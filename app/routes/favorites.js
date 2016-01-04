import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : 'Home',
      'model.routeName': 'index'
    });
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.routeName', this.routeName );
  },

  model: function() {
    let favorites = this.store.all( 'favorite' );
    if ( !favorites.get('length') ) {
      favorites = this.store.find( 'favorite' );
    }

    return favorites;
  }
});
