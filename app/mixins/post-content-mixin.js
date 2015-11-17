import Ember from 'ember';

export default Ember.Mixin.create({

  didInsertElement() {
    this.preventClickableImges();
    this.blocklevelImages();
  },

  preventClickableImges() {
    this.$().on( 'click', '.post-body a', function(evt) {
      let shouldStopEvt = !!$( this ).find( 'img' ).length;
      if ( shouldStopEvt ) {
        evt.preventDefault();
      }
    });
  },

  blocklevelImages() {
    this.$( '.post-body img' ).wrap( '<div class="post-image" />' );
  }

});
