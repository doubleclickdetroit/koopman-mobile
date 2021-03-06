import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : 'Home',
      'model.routeName': 'index'
    });
  },

  model: function() {
    return this.store.all( 'project' );
  },

  setupController: function(controller, model) {
    var categories = this.store.all( 'category' );
    this._super( controller, model );
    controller.set( 'model.categories', categories );
  }
});
