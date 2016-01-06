export function initialize(container, application) {
  let session = container.lookup( 'simple-auth-session:main' );
  application.inject( 'model', 'session', 'simple-auth-session:main' );
};

export default {
  name: 'current-user',
  after: 'simple-auth',
  initialize: initialize
};
