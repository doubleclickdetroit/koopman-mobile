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
          var session       = this.get( 'session' ),
              authenticator = this.get( 'authenticator' );

          this.send( 'authenticate' );
          this.set( 'password_confirmation', null );
          return this.send( 'onSuccess', response );
        }.bind( this ));
      };

      function handleFailure(xhr, status, error) {
        Ember.run(function() {
          var responseHash = JSON.parse( xhr.responseText ),
              errorHash    = responseHash[ 'errors' ];

          return this.send( 'onFailure', errorHash );
        }.bind( this ));
      };

      return request;
    }
  }

});
