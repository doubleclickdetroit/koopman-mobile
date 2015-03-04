export function initialize(container) {
  var store   = container.lookup( 'store:main' ),
      payload = { id: 1, project: 2115, name: 'Yo Dawg' };

  store.push( 'favorite', payload );
};

export default {
  name: 'bootstrap-data',
  after: [ 'store' ],
  initialize: initialize
};
