import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Mixin.create(LoginControllerMixin, {
  identification: Ember.computed.alias( 'email' ),

  actions: {
    onSuccess: function(response) {
      // override method
      console.log( 'onSuccess', response );
    },

    onFailure: function(errorHash) {
      // override method
      console.log( 'onFailure', errorHash );
    },

    register: function() {
      var request, credentialsHash;

      credentialsHash = this.getProperties( 'email', 'password', 'password_confirmation' );

      request = Ember.$.ajax({
        method  : 'POST',
        dataType: 'json',
        url: 'http://localhost:3000/users.json',
        data: {
          user: credentialsHash
        }
      })
      .then(
        handleSuccess.bind( this ),
        handleFailure.bind( this )
      );

      function handleSuccess(response) {
        Ember.run(function() {
          this.send( 'authenticate' );
          this.set( 'password_confirmation', null );
          this.send( 'onSuccess', response );
        }.bind( this ));
      }

      function handleFailure(xhr) {
        Ember.run(function() {
          var responseHash = JSON.parse( xhr.responseText ),
              errorHash    = responseHash[ 'errors' ];
          this.send( 'onFailure', errorHash );
        }.bind( this ));
      }

      return request;
    }
  }

});