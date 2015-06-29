import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  feedback: DS.attr( 'string' ),

  hasFeedback: function() {
    var feedback = this.get( 'feedback' );
    return !!feedback && !!feedback.trim();
  }.property( 'feedback' )
});
