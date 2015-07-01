import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : null,
      'model.routeName': null
    });
  },

  model: function() {
    var hash = this.modelFor( 'application' );

    return Ember.RSVP.hash({
      products  : hash.products,
      entry     : hash.entries.get( 'firstObject' ),
      project   : hash.projects.get( 'firstObject' ),
      membership: hash.membership.get( 'firstObject' )
    });
  }
});
