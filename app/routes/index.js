import Ember from 'ember';
import ENV from 'koopman-mobile/config/environment';

export default Ember.Route.extend({
  activate() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : null,
      'model.routeName': null
    });
  },

  model() {
    const query = { 'filter[posts_per_page]' : 1 };

    let requestDeals = () => {
      let ObjectPromiseProxy = Ember.ObjectProxy.extend( Ember.PromiseProxyMixin );
      let request = Ember.$.getJSON( `${ENV.API_CATALOG_URL}/deals/featured.json` );

      return ObjectPromiseProxy.create({
        promise: request.then(payload => {
          this.store.pushPayload( 'deal', payload );
          return this.store.all( 'deal' );
        })
      });
    };

    let requestResource = (resourceName, isSingular, query) => {
      let ObjectPromiseProxy = Ember.ObjectProxy.extend( Ember.PromiseProxyMixin );
      let request = query ? this.store.find( resourceName, query ) : this.store.find( resourceName );

      return ObjectPromiseProxy.create({
        promise: request.then( (collection) => isSingular ? collection.get('firstObject') : collection )
      });
    };

    return {
      entry:      requestResource( 'entry', query ),
      project:    requestResource( 'project', query ),
      membership: requestResource( 'membership' ),
      deals:      requestDeals(),
    };
  }
});
