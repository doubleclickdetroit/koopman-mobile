export function initialize(container, application) {
  application.inject( 'view:application', 'pikabuService', 'service:pikabu' );
}

export default {
  name: 'pikabu-service',
  initialize: initialize
};
