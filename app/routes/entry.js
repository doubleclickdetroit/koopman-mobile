import Ember from 'ember';
import PostFavoriteActionsMixin from '../mixins/post-favorite-actions';
import ToolProductActionsMixin from '../mixins/tool-product-actions';

export default Ember.Route.extend(PostFavoriteActionsMixin, ToolProductActionsMixin, {
  activate: function() {
    this.controllerFor( 'application' ).set( 'routeName', 'entries' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'routeName', null );
  },

  model: function(params) {
    return this.store.find( 'entry', params.entry_id );
  }
});
