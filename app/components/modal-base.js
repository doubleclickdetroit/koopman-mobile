import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'modal', 'fade' ],

  okLabel: 'Ok',

  show: function() {
    this.$().modal().on('hidden.bs.modal', function() {
      this.sendAction( 'close' );
    }.bind( this ));
  }.on( 'didInsertElement' ),

  actions: {
    ok: function() {
      this.$().modal( 'hide' );
      this.sendAction( 'ok' );
    }
  }
});
