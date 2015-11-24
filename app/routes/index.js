import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : null,
      'model.routeName': null
    });
  },

  model() {
    const query = { 'filter[posts_per_page]' : 1 };

    let requestSingleResource = (resourceName, query) => {
      let ObjectPromiseProxy = Ember.ObjectProxy.extend( Ember.PromiseProxyMixin );
      let request = query ? this.store.find( resourceName, query ) : this.store.find( resourceName );

      return ObjectPromiseProxy.create({
        promise: request.then( (collection) => collection.get('firstObject') )
      });
    };

    return {
      entry  : requestSingleResource( 'entry', query ),
      project: requestSingleResource( 'project', query ),
      membership: requestSingleResource( 'membership' )
    };
  }
});
