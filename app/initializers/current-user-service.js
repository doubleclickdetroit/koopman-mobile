export function initialize(container, application) {
  application.inject('route', 'currentUserService', 'service:current-user');
}

export default {
  name: 'current-user-service',
  initialize: initialize
};
