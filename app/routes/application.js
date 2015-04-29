import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
    function handleFailFn() {
      return [];
    }

    return Ember.RSVP.hash({
      favorites: this.store.find( 'favorite' ).catch( handleFailFn ),
      entries  : this.store.find( 'entry' ).catch( handleFailFn ),
      projects : this.store.find( 'project' ).catch( handleFailFn )
    });
  },

  afterModel: function(model) {
    var moment = this.moment;

    model.entries = model.entries.filter(function(entry) {
      var date = moment( entry.get('date') );
      return date.diff( moment(), 'days' ) >= 0;
    }).sortBy( 'date', 'title' );

    this._super( model );
  },

  actions: {
    sessionAuthenticationSucceeded: function() {
      // just signed-in, reload the model
      this.refresh();

      // now transition to index
      this.transitionTo( 'index' );
    },

    sessionInvalidationSucceeded: function() {
      // just signed-out, reload the model
      this.refresh();

      // unload all favorites
      // there has to be a better way to do this!!
      this.store.unloadAll( 'favorite' );

      // now transition to index
      this.transitionTo( 'index' );
    }
  }
});
