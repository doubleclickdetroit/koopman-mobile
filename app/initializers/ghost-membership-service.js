export function initialize(container, application) {
  application.inject('route:application', 'ghostMembershipService', 'service:ghost-membership');
  application.inject('route:index', 'ghostMembershipService', 'service:ghost-membership');
  application.inject('controller:activation', 'ghostMembershipService', 'service:ghost-membership');
  application.inject('controller:registration', 'ghostMembershipService', 'service:ghost-membership');
  application.inject('service:ghost-membership', 'store', 'store:main');

  let service = container.lookup( 'service:ghost-membership' );
  service.loadMembership();

};

export default {
  name: 'ghost-membership-service',
  after: [ 'store' ],
  initialize: initialize
};
