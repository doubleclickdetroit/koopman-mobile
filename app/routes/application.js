import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend( ApplicationRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      favorites: this.store.find( 'favorite' ),
      projects : this.store.find( 'project' )
    });
  }
});
