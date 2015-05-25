import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
    function handleFailFn() {
      return [];
    }

    return Ember.RSVP.hash({
      products : this.store.find( 'product' ).catch( handleFailFn ),
      favorites: this.store.find( 'favorite' ).catch( handleFailFn ),
      entries  : this.store.find( 'entry' ).catch( handleFailFn ),
      projects : this.store.find( 'project' ).catch( handleFailFn )
    });
  },

  afterModel: function(model) {
    var moment = this.moment;

    model.posts = Ember.ArrayProxy.create({
      content: Ember.A(_.union(
        model.entries.toArray(),
        model.projects.toArray()
      ))
    });

    model.entries = model.entries.filter(function(entry) {
      var date = moment( entry.get('date') );
      return date.diff( moment(), 'days' ) >= 0;
    }).sortBy( 'date', 'title' );

    this._super( model );
  },

  actions: {
    loading: function(transition, originRoute) {
      var view = this.container.lookup( 'view:loading' ).append();
      this.router.one( 'didTransition', view, 'destroy' );
    },

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
      this.store.unloadAll( 'product' );
      this.store.unloadAll( 'profile' );

      // now transition to index
      this.transitionTo( 'index' );
    },

    showModal: function(name, model) {
      this.render(name, {
        into  : 'application',
        outlet: 'modal'
      });
    },

    removeModal: function() {
      this.disconnectOutlet({
        outlet    : 'modal',
        parentView: 'application'
      });
    }
  }
});
