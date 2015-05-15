import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).set( 'model.title', 'Login' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.title', null );
  }
});
