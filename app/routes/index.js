import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var hash = this.modelFor( 'application' );

    return Ember.RSVP.hash({
      entry  : hash.entries.get( 'firstObject' ),
      project: hash.projects.get( 'firstObject' )
    });
  }
});
