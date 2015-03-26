import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var hash = this.modelFor( 'application' );

    return Ember.RSVP.hash({
      project: hash.projects.get( 'firstObject' )
    });
  }
});
