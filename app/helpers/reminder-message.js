import Ember from 'ember';

export function reminderMessage(input) {
  var date = window.moment( input ),
      diff = date.diff( window.moment(), 'days' ); // 1, future; 0, present; -1, past

  if ( !input ) {
    return 'A reminder has not been set.';
  }

  switch( diff ) {
    case -1: return 'Was reminded on: ' + date.calendar();
    case  0: return 'Remind me: '       + date.calendar();
    default: return 'Remind me on: '    + date.calendar();
  }
}

export default Ember.Handlebars.makeBoundHelper(reminderMessage);
