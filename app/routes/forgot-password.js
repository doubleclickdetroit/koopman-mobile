import Ember from 'ember';

export default Ember.Route.extend({
  isSuccess: false,

  model() {
    return { email: '' };
  },

  actions: {
    requestPasswordChange() {
      let email = this.controller.get( 'identification' );

      Ember.$.post('http://koopman.herokuapp.com/users/password', { 'user[email]': email })
        .then( () => this.controller.set('isSuccess', true) );

      this.controller.set( 'isProcessing', true );
    }
  }
});
