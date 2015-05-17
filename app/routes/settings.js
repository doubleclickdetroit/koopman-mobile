import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).set( 'model.title', 'Settings' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.title', null );
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
      var model = this.controller.get( 'model' );
      model.save();
    }
  }
});
