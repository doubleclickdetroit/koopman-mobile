import Ember from 'ember';
import ToolProductActionsMixin from 'koopman-mobile/mixins/tool-product-actions';

module('ToolProductActionsMixin');

// Replace this with your real tests.
test('it works', function() {
  var ToolProductActionsObject = Ember.Object.extend(ToolProductActionsMixin);
  var subject = ToolProductActionsObject.create();
  ok(subject);
});
