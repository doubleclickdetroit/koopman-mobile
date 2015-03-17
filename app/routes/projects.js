import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var cached_collection = this.store.all( 'project' );

    if ( cached_collection.get( 'length' ) < 1 ) {
      return this.store.find( 'project' );
    }

    return cached_collection;
  },

});
