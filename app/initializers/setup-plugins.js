export function initialize() {
  moment.lang('en', {
    calendar : {
      lastDay : 'MMMM Do, YYYY',
      sameDay : 'h:mmA',
      nextDay : 'MMMM Do, YYYY',
      lastWeek: 'MMMM Do, YYYY',
      nextWeek: 'MMMM Do, YYYY',
      sameElse: 'MMMM Do, YYYY'
    }
  });
};

export default {
  name: 'setup-plugins',
  initialize: initialize
};
