import Ember from 'ember';
import RegistrationControllerMixin from '../mixins/registration-controller-mixin';

export default Ember.Controller.extend(RegistrationControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',

  errorsCollection: function() {
    var errors = this.get( 'errors' );
    return _.map(errors, function(key, val) {
      return { field: key, messages: val };
    });
  }.property( 'errors' )
});
