import Ember from 'ember';

export default Ember.Mixin.create({
  delegateAuthenticatedAction: function() {
    var isAuthed = this.get( 'session.isAuthenticated' );
    console.log( '**** delegateAuthenticatedAction', isAuthed );
    if ( !isAuthed ) {
      this.send( 'showModal', 'modal-login-prompt' );
    }

    return isAuthed;
  },


  actions: {
    setPreviousRouteBeforeLogin: function() {
      var controller = this.controllerFor( 'application' );

      controller.set('model.previousRouteBeforeLogin', {
        route: this.routeName,
        model: this.controller.get( 'model' )
      });

      this.transitionTo( 'login' );
    },

    handleDisplayShoppingList: function(model) {
      if ( !this.delegateAuthenticatedAction() ) {
        return false;
      }

      this.send( 'showModal', 'modal-shopping-list', model );
    },

    handleFavoriteToggle: function(model) {
      var favorite;

      if ( !this.delegateAuthenticatedAction() ) {
        return false;
      }

      if ( model.get( 'favorite' ) ) {
        model.get( 'favorite' ).destroyRecord();
      }
      else {
        favorite = this.store.createRecord( 'favorite', {
          url: model.get( 'link' )
        });

        model.set( 'favorite', favorite );
        favorite.save();
      }
    },

    handleFavoriteUpdate: function() {
      this.get( 'controller.model.favorite' ).save();
    }
  }
});
