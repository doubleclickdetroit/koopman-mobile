import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : 'Login',
      'model.routeName': null
    });
  },

  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.previousRouteBeforeLogin', null );
  }
});
