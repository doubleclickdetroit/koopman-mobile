import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {

    delegateAuthenticatedAction: function() {
      var isAuthed = this.get( 'session.isAuthenticated' );
      if ( !isAuthed ) {
        alert( 'You must first sign-in to use this feature.' );
      }
      return isAuthed;
    },

    handleFavoriteToggle: function(model) {
      var favorite;

      if ( !this.send('delegateAuthenticatedAction') ) {
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
      this.get( 'favorite' ).save();
    }

  }
});
