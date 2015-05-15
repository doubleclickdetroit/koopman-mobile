import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).set( 'model.title', 'Project Book' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.title', null );
  }
});
