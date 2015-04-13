import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
    function handleFailFn() {
      return [];
    }

    return Ember.RSVP.hash({
      favorites: this.store.find( 'favorite' ).catch( handleFailFn ),
      entries  : this.store.find( 'entry' ),
      projects : this.store.find( 'project' )
    });
  },

  actions: {
    sessionAuthenticationSucceeded: function() {
      // just signed-in, reload the model
      this.refresh();

      // now transition to index
      this.transitionTo( 'index' );
    }
  }
});
