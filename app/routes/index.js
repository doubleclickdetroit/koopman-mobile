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
          let deals =  this.store.all( 'deal' ).filterBy( 'isFeatured', true );
          return deals.slice( 0, 3 );
        })
      });
    };

    let membershipResource = this.store.all( 'membership' ).get( 'firstObject' );
    let ObjectPromiseProxy = Ember.ObjectProxy.extend( Ember.PromiseProxyMixin );
    let deferred = Ember.RSVP.defer();
    if ( membershipResource ) {
      deferred.resolve( membershipResource );
    }
    let membershipPromise  = ObjectPromiseProxy.create({
      promise: deferred.promise
    });

    let requestResource = (resourceName, query) => {
      let ObjectPromiseProxy = Ember.ObjectProxy.extend( Ember.PromiseProxyMixin );
      let request = query ? this.store.find( resourceName, query ) : this.store.find( resourceName );

      return ObjectPromiseProxy.create({
        promise: request.then( collection => collection.get('firstObject') )
      });
    };

    return {
      entry:      requestResource( 'entry', query ),
      project:    requestResource( 'project', query ),
      membership: membershipResource ? membershipPromise : requestResource( 'membership' ),
      deals:      requestDeals(),
    };
  },

  afterModel(model, transition) {
    model.membership.then(membership => {
      let isGhostAccount = membership.get( 'isGhostAccount' );
      if ( isGhostAccount ) {
        this.store.find( 'membership' ).then(membershipRecords => {
          let ObjectPromiseProxy = Ember.ObjectProxy.extend( Ember.PromiseProxyMixin );
          let deferred = Ember.RSVP.defer();
          let membershipPromise = ObjectPromiseProxy.create({
            promise: deferred.promise
          });

          membership.deleteRecord();
          deferred.resolve( membershipRecords.get('lastObject') );

          this.ghostMembershipService.removeMembership();
          Ember.set( model, 'membership', membershipPromise );
        });
      }
    });
  }
});
