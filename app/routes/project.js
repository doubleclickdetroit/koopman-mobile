import Ember from 'ember';
import PostFavoriteActionsMixin from '../mixins/post-favorite-actions';
import ToolProductActionsMixin from '../mixins/tool-product-actions';

export default Ember.Route.extend(PostFavoriteActionsMixin, ToolProductActionsMixin, {
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title': 'Projects',
      'model.routeName': 'projects'
    });
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.routeName', 'index' );
    this.controller.set( 'redirect', '' );
  },

  model: function(params) {
    return this.store.find( 'project', params.project_id );
  },

  setupController: function(controller, model) {
    /*
    var KOOPMAN_URL   = "http://koopmanblog.com/wp-json/posts/",
        categories    = model.get( 'categories' ),
        relatedPostId = model.get( 'relatedPost' );

    function generateRandomInteger(max) {
      return Math.floor((Math.random() * ( max - 1 + 1 )) + 1);
    }

    function generateRandomCategoryURL() {
      var randomIndex       = generateRandomInteger( categories.length ),
          randomCategory    = categories.objectAt( --randomIndex ),
          randomCategoryUrl = KOOPMAN_URL + "?filter[order]=DESC&filter[orderby]=date&filter[posts_per_page]=1&filter[category_name]=" + randomCategory.get( 'slug' );

      return randomCategoryUrl;
    }

    function fetchRecentPost() {
      var recentPostUrl = generateRandomCategoryURL();

      Ember.$.getJSON( recentPostUrl ).done(function(recentPostJSON) {
        if ( recentPostJSON.length ) {
          controller.set( 'model.recentPostObject', recentPostJSON[0] );
        }
        else {
          fetchRecentPost();
        }
      });
    }

    function fetchRelatedPost() {
      var relatedPostUrl = KOOPMAN_URL + relatedPostId;

      Ember.$.getJSON( relatedPostUrl ).done(function(relatedPostJSON) {
        controller.set( 'model.relatedPostObject', relatedPostJSON );
      });
    }
    */


    // set data
    this._super( controller, model );

    /*
    fetchRecentPost();

    if ( relatedPostId ) {
      fetchRelatedPost();
    }
    */

    this.controllerFor( 'modal-shopping-list' ).set( 'tools', model.get('tools') );
  }
});
