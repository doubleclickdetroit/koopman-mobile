export function initialize(container, application) {
  application.register( 'moment:main', window.moment, { instantiate: false } );

  application.inject( 'route', 'moment', 'moment:main');
  application.inject( 'controller', 'moment', 'moment:main');
  application.inject( 'helper', 'moment', 'moment:main');
  application.inject( 'model', 'moment', 'moment:main');

  window.moment.lang('en', {
    calendar : {
      lastDay : 'MMMM Do, YYYY',
      sameDay : '[Today]',
      nextDay : '[Tomorrow]',
      lastWeek: '[Last] dddd',
      nextWeek: 'dddd, MMMM Do',
      sameElse: 'MMMM Do, YYYY'
    }
  });
}

export default {
  name: 'plugin-moment',
  after: [ 'store' ],
  initialize: initialize
};
