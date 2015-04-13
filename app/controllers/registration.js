import Ember from 'ember';
import RegistrationControllerMixin from '../mixins/registration-controller-mixin';

export default Ember.Controller.extend(RegistrationControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise'
});
