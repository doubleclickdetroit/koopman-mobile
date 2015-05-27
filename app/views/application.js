import Ember from 'ember';

export default Ember.View.extend({
  classNames: [ 'm-pikabu-viewport' ],

  getPikabuInstance: function() {
    return this.get( 'pikabuService' ).getInstance();
  },

  currentPathDidChange: function() {
    this.closeSidebars();
  }.observes( 'controller.currentPath' ),

  closeSidebars: function() {
    this.getPikabuInstance().closeSidebars();
  },

  didInsertElement: function() {
    // init pikabu
    this.getPikabuInstance();

    // in addition to changes in currentPath
    // if a link is clicked in the sidebar, close it
    this.$( '.m-pikabu-sidebar' ).on('click', 'a', function() {
      this.closeSidebars();
    }.bind( this ));

  }
});
