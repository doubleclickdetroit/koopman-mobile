import Ember from 'ember';

export default Ember.Component.extend({

  attributeBindings: [ 'data-snap-ignore' ],

  hasFufilled: true,
  margin  : 0,
  autoplay: true,

  hasFufilledDidChange: Ember.observer('hasFufilled', function() {
    Ember.run.scheduleOnce('afterRender', this, 'initSlider');
  }),

  didInsertElement() {
    let hasFufilled = this.get( 'hasFufilled' );
    if ( hasFufilled ) {
      this.initSlider();
    }
  },

  initSlider() {
    let margin = parseInt(this.get( 'margin' ));

    console.log( 'autoplay', this.get('autoplay'));

    this.$().owlCarousel({
      loop      : true,
      nav       : false,
      autoHeight: false,
      margin    : margin,
      autoplay  : this.get( 'autoplay' ),
      responsive: {
        0  : { items: 1 },
        600: { items: 2 }
      }
    });
  }

});
