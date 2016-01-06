import Ember from 'ember';
import AcitvationMixinMixin from 'koopman-mobile/mixins/acitvation-mixin';

module('AcitvationMixinMixin');

// Replace this with your real tests.
test('it works', function() {
  var AcitvationMixinObject = Ember.Object.extend(AcitvationMixinMixin);
  var subject = AcitvationMixinObject.create();
  ok(subject);
});
