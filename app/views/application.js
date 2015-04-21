import Ember from 'ember';

export default Ember.View.extend({
  classNames: [ 'm-pikabu-viewport' ],

  getPikabuInstance: function() {
    return this.get( 'pikabuService' ).getInstance();
  },

  currentPathDidChange: function() {
    this.getPikabuInstance().closeSidebars();
  }.observes( 'controller.currentPath' ),

  didInsertElement: function() {
    this.getPikabuInstance();
  }
});
