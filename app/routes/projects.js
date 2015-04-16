import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.all( 'project' );
  },

  setupController: function(controller, model) {
    var categories = this.store.all( 'category' );

    this._super( controller, model );

    this.controllerFor( 'projects.index' ).setProperties({
      categories: categories,
      initialSelectedCategoryId: categories.get( 'firstObject.id' )
    });
  }
});
