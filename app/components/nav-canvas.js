import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',

  didInsertElement: function() {
    this.$().mmenu();
  }
});
