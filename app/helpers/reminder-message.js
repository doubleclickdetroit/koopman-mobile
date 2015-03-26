import Ember from 'ember';

export function reminderMessage(input) {
  var date = moment( input ),
      diff = date.diff( moment(), 'days' ); // 1, future; 0, present; -1, past

  switch( diff ) {
    case -1: return 'Was reminded on: ' + date.calendar(); break;
    case  0: return 'Remind me: '       + date.calendar(); break;
    default: return 'Remind me on: '    + date.calendar();
  }
};

export default Ember.Handlebars.makeBoundHelper(reminderMessage);
