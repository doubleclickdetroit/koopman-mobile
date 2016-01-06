import Ember from 'ember';

const ACTIVATE_URL = "https://script.google.com/macros/s/AKfycbx-Moj3h9xVW749ZPivtT4nPxNpgzo4wRPZWoTx9l8CdjK4QUew/exec";

export default Ember.Mixin.create({

  getUserData(model) {
    let city  = model.get( 'city' );
    let state = ( model.get('state') || '' ).toUpperCase();
    let cityState = `${city}, ${state}`;

    return {
      'First Name'    : model.get( 'firstName' ),
      'Last Name'     : model.get( 'lastName' ),
      'Email Address' : model.get( 'email' ),
      'Street Address': model.get( 'street' ),
      'Phone'         : model.get( 'tel' ),
      'Town, State'   : cityState,
      'ZIP Code'      : model.get( 'zipcode' )
    };
  },

  validateModel(model) {
    let data = _.pick( model, 'firstName', 'lastName', 'email', 'street', 'tel', 'city', 'state', 'zipcode' );
    let validations = _.map(data, (val, key) => {
      return { key: key, isValid: !!val, isInvalid: !!!val };
    });

    let errors  = _.where( validations, { isValid: false } );
    let isValid = errors.length === 0;
    let errorsHash = _.object( _.pluck(errors, 'key'), _.pluck(errors, 'isInvalid') );

    return {
      isValid:     isValid,
      fields:      errorsHash,
      errorsCount: errors.length
    };
  },

  activateMembership(model) {
    let deferred = Ember.RSVP.defer();
    let result = this.validateModel( model );

    if ( result.isValid ) {
      let data = this.getUserData( model );
      Ember.$.post( ACTIVATE_URL, data ).then( () => deferred.resolve() );
    }
    else {
      console.log( 'errors', result.errorsCount, result.fields );
      deferred.reject( result );
    }

    return deferred.promise;
  },

  actions: {

    activate() {
      let model = this.get( 'model' );
      this.activateMembership( model )
        .then(() => {
          this.ghostMembershipService.insertMembership( model );
          let params = { flashType: 'success', flashMessage: 'You have become a Koopman Advantage Member!' };
          this.transitionTo( 'index', { queryParams: params } );
        })
        .catch( e => this.set('errors', e) );
    }

  }

});