export function initialize(container, application) {
  application.inject( 'route', 'listStatesService', 'service:list-states' );
}

export default {
  name: 'list-states-service',
  initialize: initialize
};
