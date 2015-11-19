import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [ 'top-notification-1', 'top-notification', 'bg-green-dark' ],

  user: Ember.computed.alias( 'session.email' ),

  didInsertElement() {
    setTimeout(( () => this.toggleDisplay() ), 500);
    setTimeout(( () => this.toggleDisplay() ), 4000);
    this.$().on( 'click', '.close-top-notification', () => this.toggleDisplay() );
  },

  toggleDisplay() {
    this.$().toggleClass( 'animate' );
  }

});
