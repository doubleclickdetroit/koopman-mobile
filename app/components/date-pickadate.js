import Ember from 'ember';

export default Ember.Component.extend({
  dateDidChange: function() {
    var date = this.get( 'date' );
    if ( date ) {
      this.get( 'picker' ).set( 'select', date );
    }
  }.observes( 'date' ),

  dateBufferDidChange: function() {
    var buffer = this.get( 'dateBuffer' );
    if ( !!buffer ) {
      buffer = new Date( buffer ).getTime();
    }
    this.set( 'date', buffer );
  }.observes( 'dateBuffer' ),

  didInsertElement: function() {
    var $input = this.$( ':input' ).pickadate({ min: new Date() });

    // save a reference of the picker
    this.set( 'picker', $input.pickadate('picker') );

    // initially update picker with `date` value
    this.dateDidChange();
  }
});
