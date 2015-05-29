import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).set( 'model.title', 'Settings' );
  },

  model: function() {
    return this.store.find( 'profile', {} ).then(function(profiles) {
      // there should only be a single profile record
      return profiles.get( 'firstObject' );
    });
  },

  setupController: function(controller, model) {
    var hasConfirmedAccount = model.get( 'hasConfirmedLinkedAccount' );

    this._super( controller, model );
    controller.set( 'listOfStates', this.get('listStatesService.states') );

    // only display the back button if the account has been confirmed
    if ( hasConfirmedAccount ) {
      this.controllerFor( 'application' ).set( 'model.routeName', 'index' );
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
