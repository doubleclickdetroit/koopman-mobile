import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title': 'Home',
      'model.routeName': 'index'
    });
  },

  model: function() {
    var locations = this.store.all( 'location' );

    if ( locations.get('length') ) {
      return locations;
    }

    return this.store.find( 'location' );
  }
});
