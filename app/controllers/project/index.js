import Ember from 'ember';

export default Ember.Controller.extend({
  // related post
  relatedPost     : Ember.computed.alias( 'model.relatedPostObject' ),
  relatedPostImage: Ember.computed.alias( 'relatedPost.featured_image' ),
  relatedPostThumb: Ember.computed.alias( 'relatedPostImage.attachment_meta.sizes.thumbnail' ),

  // recent post
  recentPost     : Ember.computed.alias( 'model.recentPostObject' ),
  recentPostImage: Ember.computed.alias( 'recentPost.featured_image' ),
  recentPostThumb: Ember.computed.alias( 'recentPostImage.attachment_meta.sizes.thumbnail' )
});
