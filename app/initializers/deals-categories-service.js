export function initialize(container, application) {
  application.inject('controller:deals/index', 'dealsCategoriesService', 'service:deals-categories');
};

export default {
  name: 'deals-categories-service',
  initialize: initialize
};
