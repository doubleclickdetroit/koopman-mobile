import Ember from 'ember';
import ENV from 'koopman-mobile/config/environment';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import ActivationControllerMixin from '../mixins/acitvation-mixin';

export default Ember.Mixin.create(LoginControllerMixin, ActivationControllerMixin, {
  identification: Ember.computed.alias( 'email' ),

  advantageRegistration() {
    let deferred = Ember.RSVP.defer();
    let isAdvantageSignup = this.get( 'isAdvantageSignup' );

    if ( isAdvantageSignup ) {
      let errors = this.validateAdvantageData();
      if ( errors ) {
        this.send( 'onFailure', errors );
        deferred.reject();
      }
      else {
        this.send( 'onSuccess' );
        deferred.resolve( true );
      }
    }
    else {
      deferred.resolve( false );
    }

    return deferred.promise;
  },

  userRegistration() {
    var request, credentialsHash;
    credentialsHash = this.getProperties( 'email', 'password', 'password_confirmation' );

    this.send( 'onRegister' );

    request = Ember.$.ajax({
      method  : 'POST',
      dataType: 'json',
      url: ENV.API_RAILS_URL + '/users.json',
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
  },

  validateAdvantageData() {
    let data = this.getProperties( 'firstName', 'lastName', 'tel' );
    let errors = {};
    _.each( data, (val, key) => {
      if ( !val ) errors[key] = [ "can't be blank" ];
    });

    return _.keys( errors ).length ? errors : false;
  },

  actions: {
    onRegister: function() {
      this.set( 'errors', null );
    },
    onSuccess: function() {
      this.set( 'errors', null );
    },
    onFailure: function(errors) {
      var errorHash = Ember.Object.create( errors );
      this.set( 'errors', errorHash );
    },

    handleRegistration: function() {
      this.advantageRegistration()
        .then(hasMembership => {

          if ( hasMembership ) {
            this.userRegistration()
              .then(() => {
                this.activateMembership( this )
                  .then( () => this.send('authenticate') );
              })
              .catch(e => console.log('userRegistration error', e))
          }
          else {
            this.userRegistration()
              .then( () => this.send('authenticate') );
          }
        })
        .catch(() => {})
    }
  }

});
