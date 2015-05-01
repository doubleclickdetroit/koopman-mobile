import Ember from 'ember';
import PostFavoriteActionsMixin from '../mixins/post-favorite-actions';
import ToolProductActionsMixin from '../mixins/tool-product-actions';

export default Ember.Route.extend(PostFavoriteActionsMixin, ToolProductActionsMixin, {
  model: function(params) {
    return this.store.find( 'entry', params.entry_id );
  }
});
