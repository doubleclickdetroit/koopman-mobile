import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : null,
      'model.routeName': null
    });
  },

  model: function() {
    return Ember.RSVP.hash({});
  }
});
