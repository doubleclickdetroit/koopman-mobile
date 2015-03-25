import Ember from 'ember';

export default Ember.Component.extend({
  remindAtDidChange: function() {
    var remind_at = this.get( 'remind_at' );
    this.get( 'picker' ).set( 'select', remind_at );
  }.observes( 'remind_at' ),

  remindAtBufferDidChange: function() {
    var buffer = this.get( 'remindAtBuffer' );
    if ( !!buffer ) {
      buffer = new Date( buffer ).getTime();
    }
    this.set( 'remind_at', buffer );
  }.observes( 'remindAtBuffer' ),

  didInsertElement: function() {
    var $input = this.$( ':input' ).pickadate({ min: new Date() });

    // save a reference of the picker
    this.set( 'picker', $input.pickadate('picker') );

    // initially update picker with `remind_at` value
    this.remindAtDidChange();
  }
});
