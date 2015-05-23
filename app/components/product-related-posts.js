import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'related-posts' ],

  isDisplayed: false,

  labelAction: function() {
    var isDisplayed = this.get( 'isDisplayed' );
    return isDisplayed ? 'Hide' : 'Show';
  }.property( 'isDisplayed' ),

  actions: {
    toggleRelatedPosts: function() {
      this.toggleProperty( 'isDisplayed' );
    }
  }
});
