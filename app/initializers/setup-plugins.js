export function initialize() {
  moment.lang('en', {
    calendar : {
      lastDay : 'MMMM Do, YYYY',
      sameDay : '[Today]',
      nextDay : '[Tomorrow]',
      lastWeek: '[Last] dddd',
      nextWeek: 'dddd, MMMM Do',
      sameElse: 'MMMM Do, YYYY'
    }
  });
};

export default {
  name: 'setup-plugins',
  initialize: initialize
};
