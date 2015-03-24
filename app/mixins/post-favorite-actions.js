import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {

    handleFavoriteToggle: function(model) {
      var favorite;

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
    }

  }
});
