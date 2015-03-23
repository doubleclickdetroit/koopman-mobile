export function initialize(container) {
  var store   = container.lookup( 'store:main' ),
      payload = [
        { id: 1, resource_pk: 2115 },
        { id: 2, resource_pk: 2362 }
      ];

  // store.pushMany( 'favorite', payload );
}

export default {
  name: 'bootstrap-data',
  after: [ 'store' ],
  initialize: initialize
};
