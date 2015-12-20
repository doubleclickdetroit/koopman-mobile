import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'component-deal-details' ],

  didInsertElement() {
    let image = this.get( 'deal.image' );
    this.$().css( 'background-image', `url(${image})` );
  }
});
