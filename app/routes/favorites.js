import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : 'Favorites',
      'model.routeName': 'index'
    });
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.routeName', this.routeName );
  },

  model: function() {
    return this.store.all( 'favorite' );
  }
});
