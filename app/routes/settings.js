import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : 'Settings',
      'model.routeName': 'index'
    });
  },

  model: function() {
    return this.store.find( 'profile', {} ).then(function(profiles) {
      // there should only be a single profile record
      return profiles.get( 'firstObject' );
    });
  },

  setupController: function(controller, model) {
    this._super( controller, model );
    controller.set( 'listOfStates', this.get('listStatesService.states') );
  },

  actions: {
    update: function() {
      var controller   = this.controller,
          model        = controller.get( 'model' ),
          hasConfirmed = controller.get( 'hasConfirmed' );

      model.set( 'has_confirmed_linked_account', true );
      model.save().then(function() {
        controller.flashSuccessMessage();
      });
    }
  }
});
