/* global Pikabu */
import Ember from 'ember';

export default Ember.View.extend({
  classNames: [ 'm-pikabu-viewport' ],

  didInsertElement: function() {
    var pikabu = new Pikabu();
  }
});
