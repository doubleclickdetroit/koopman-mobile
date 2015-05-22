import Ember from 'ember';
import PostFavoriteActionsMixin from '../mixins/post-favorite-actions';
import ToolProductActionsMixin from '../mixins/tool-product-actions';

export default Ember.Route.extend(PostFavoriteActionsMixin, ToolProductActionsMixin, {
  model: function(params) {
    return this.modelFor( 'application' ).posts.find(function(post) {
      if ( post.get('id') == params.post_id ) return true;
    });
  },

  setupController: function(controller, model) {
    this._super( controller, model );
    this.controllerFor( 'modal-shopping-list' ).set( 'tools', model.get('tools') );
  },

  renderTemplate: function() {
    var model    = this.controller.model,
        postType = model.constructor.typeKey;

    // render this template
    this.render();

    // render the applicable postType template within the post template
    this.render(postType, {
      into      : 'post',
      model     : model,
      controller: postType
    });
  }
});
