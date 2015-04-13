import Ember from 'ember';
import RegistrationControllerMixinMixin from 'koopman-mobile/mixins/registration-controller-mixin';

module('RegistrationControllerMixinMixin');

// Replace this with your real tests.
test('it works', function() {
  var RegistrationControllerMixinObject = Ember.Object.extend(RegistrationControllerMixinMixin);
  var subject = RegistrationControllerMixinObject.create();
  ok(subject);
});
