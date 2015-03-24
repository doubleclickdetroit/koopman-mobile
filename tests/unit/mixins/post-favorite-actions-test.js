import Ember from 'ember';
import PostFavoriteActionsMixin from 'koopman-mobile/mixins/post-favorite-actions';

module('PostFavoriteActionsMixin');

// Replace this with your real tests.
test('it works', function() {
  var PostFavoriteActionsObject = Ember.Object.extend(PostFavoriteActionsMixin);
  var subject = PostFavoriteActionsObject.create();
  ok(subject);
});
