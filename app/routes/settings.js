import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).set( 'model.title', 'Settings' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.title', null );
  }
});
