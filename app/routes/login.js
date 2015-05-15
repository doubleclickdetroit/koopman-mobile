import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).set( 'title', 'Login' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'title', null );
  }
});
