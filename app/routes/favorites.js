import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).set( 'title', 'Favorites' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'title', null );
  },

  model: function() {
    return this.store.all( 'favorite' );
  }
});
