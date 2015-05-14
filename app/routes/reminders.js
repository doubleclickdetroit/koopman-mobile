import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).set( 'title', 'Reminders' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'title', null );
  },

  model: function() {
    return this.store.filter('favorite', function(model) {
      return !!model.get( 'remind_at' );
    });
  }
});
