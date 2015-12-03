import Ember from 'ember';
import PostFavoriteActionsMixin from '../mixins/post-favorite-actions';
import ToolProductActionsMixin from '../mixins/tool-product-actions';

export default Ember.Route.extend(PostFavoriteActionsMixin, ToolProductActionsMixin, {
  activate: function() {
    this.controllerFor( 'application' ).set( 'model.routeName', 'entries' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.routeName', 'index' );
    this.controller.set( 'redirect', '' );
  },

  model: function(params) {
    return this.store.find( 'entry', params.entry_id );
  },
  setupController: function(controller, model) {
    this._super( controller, model );
    // controller.set( 'products', this.store.all('product') ); // do we use this?
    this.controllerFor( 'modal-shopping-list' ).set( 'tools', model.get('tools') );
  }
});
