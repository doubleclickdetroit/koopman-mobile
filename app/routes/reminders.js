import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : 'Home',
      'model.routeName': 'index'
    });
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.routeName', this.routeName );
  },

  model: function() {
    return this.store.filter('favorite', function(model) {
      return !!model.get( 'remind_at' );
    });
  }
});
