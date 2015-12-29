import Ember from 'ember';
import PostFavoriteActionsMixin from '../mixins/post-favorite-actions';

export default Ember.Route.extend(PostFavoriteActionsMixin, {
  activate: function() {
    this.controllerFor( 'application' ).set( 'model.routeName', 'deals' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.routeName', 'index' );
    this.controller.set( 'redirect', '' );
  },

  model: function(params) {
    return this.store.find( 'deal', params.deal_id );
  },

  afterModel(model, transition) {
    let dealId = model.get( 'id' );
    let ObjectPromiseProxy = Ember.ObjectProxy.extend( Ember.PromiseProxyMixin );
    let claimRequest = ObjectPromiseProxy.create({
      promise: this.store.find( 'claim', dealId )
    });

    model.set( 'claim', claimRequest );
  },

  setupController(controller, model) {
    this._super( controller, model );
    controller.set( 'hasExpired', false );
  }
});
