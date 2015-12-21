import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'component-deal-details' ],
  classNameBindings: [ 'deal.isMembersOnly' ],

  redirectRoute: 'deals',
  redirectTitle: 'Deals',

  didInsertElement() {
    let image = this.get( 'deal.image' );
    this.$().css( 'background-image', `url(${image})` );
  }
});
