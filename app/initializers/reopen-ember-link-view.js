import Ember from 'ember';


var _hasRun = false;

export function initialize() {
  if ( _hasRun ) {
    return;
  }

  Ember.LinkView.reopen({

    attributeBindings: [
      'data-toggle',
      'data-dismiss',
      'data-snap-ignore'
    ]

  });
}

export default {
  name: 'reopen-ember-link-view',
  initialize: initialize
};
