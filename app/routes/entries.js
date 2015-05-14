import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).set( 'title', 'Almanac' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'title', null );
  },

  model: function() {
    return this.store.all( 'entry' );
  }
});
