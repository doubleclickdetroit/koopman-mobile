import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : 'Home',
      'model.routeName': 'index'
    });
  },

  model: function() {
    return this.store.find( 'deal' );
  }
});
