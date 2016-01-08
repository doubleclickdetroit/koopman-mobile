import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.find( 'profile', {} ).then(function(profiles) {
      // there should only be a single profile record
      return profiles.get( 'firstObject' );
    });
  },

  afterModel(model, transition) {
    let membership = this.store.all( 'membership' ).get( 'firstObject' );
    if ( membership ) {
      let isGhostAccount = membership.get( 'isGhostAccount' );

      if ( isGhostAccount ) {
        let firstName = model.get( 'firstName' ) || membership.get( 'firstName' );
        let lastName  = model.get( 'lastName' )  || membership.get( 'lastName' );
        let tel       = model.get( 'tel' )       || membership.get( 'phone' );

        model.set( 'firstName', firstName);
        model.set( 'lastName', lastName);
        model.set( 'tel', tel);
      }

      model.set( 'isGhostAccount', isGhostAccount );
    }
  },

  setupController: function(controller, model) {
    var hasConfirmedAccount = model.get( 'hasConfirmedLinkedAccount' );

    this._super( controller, model );
    controller.setProperties({
      loyaltyNumberCache: model.get( 'loyaltyNumber' ),
      listOfStates: this.get( 'listStatesService.states' ) ,
    });

    // only display the back button if the account has been confirmed
    if ( hasConfirmedAccount ) {
      this.controllerFor( 'application' ).setProperties({
        'model.title': 'Home',
        'model.routeName': 'index'
      });
    }
  },

  actions: {
    update: function() {
      var controller = this.controller,
          model      = controller.get( 'model' ),
          hasPreviouslyConfirmed = model.get( 'hasConfirmedLinkedAccount' );

      // we just registered and will save for the first time
      if ( !hasPreviouslyConfirmed ) {
        model.set( 'hasConfirmedLinkedAccount', true );
      }

      model.save().then(function() {
        // meh... update session.profile with new model values
        this.session.setProperties({
          'profile.first_name': model.get( 'firstName' ),
          'profile.last_name' : model.get( 'lastName' )
        });
        this.session.set( 'profile', this.session.get('profile') );

        // we just registered and saved profile, now redirect to 'index'
        if ( !hasPreviouslyConfirmed ) {
          this.transitionTo( 'index' );
        }
        // we're a returning user, just display the success message
        else {
          controller.flashSuccessMessage();
        }
      }.bind( this ));
    }
  }
});
