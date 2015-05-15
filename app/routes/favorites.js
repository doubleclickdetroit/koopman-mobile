import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).set( 'model.title', 'Favorites' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.title', null );
  },

  model: function() {
    return this.store.all( 'favorite' );
  }
});
