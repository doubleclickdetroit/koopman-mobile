export function initialize(container, application) {
  application.inject( 'component:infinite-scroll', 'store', 'store:main' );
};

export default {
  name: 'inject-store',
  after: 'store',
  initialize: initialize
};
