import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super( controller, model );

    controller.set( 'products', this.store.all('product') );
    this.controllerFor( 'modal-shopping-list' ).set( 'tools', model.get('tools') );
  }
});
