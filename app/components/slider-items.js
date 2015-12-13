import Ember from 'ember';

export default Ember.Component.extend({

  attributeBindings: [ 'data-snap-ignore' ],

  margin  : 0,
  autoplay: true,

  didInsertElement() {
    this.initSlider();
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
