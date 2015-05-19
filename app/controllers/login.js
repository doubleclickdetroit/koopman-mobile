import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',

  init: function() {
    var session = this.get( 'session' );
    this._super();

    session.on('sessionAuthenticationFailed', function(errorMessage) {
      this.set( 'errorMessage', errorMessage.error );
    }.bind( this ));
  },

  actions: {
    authenticate: function() {
      this.set( 'errorMessage', null );
      this._super();
    }
  }
});
