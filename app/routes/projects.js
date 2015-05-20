import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).set( 'model.title', 'Project Book' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.title', null );
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
