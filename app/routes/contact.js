import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title': 'Contact Us',
      'model.routeName': 'index'
    });
  },

  model: function() {
    return this.store.createRecord( 'reaction' );
  },

  actions: {
    saveReaction: function() {
      var model = this.controller.model;
      if ( model.get('hasFeedback') ) {
        model.save().then(function() {
          this.refresh();
          this.controller.flashSuccessMessage();
        }.bind( this ));
      }
    }
  }
});
