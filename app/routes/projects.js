import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : 'Project Book',
      'model.routeName': 'index'
    });
  }
});
