import Ember from 'ember';

export default Ember.Controller.extend({
  isNewProfile: Ember.computed.not( 'model.hasConfirmedLinkedAccount' ),
  isLoyaltyMember: Ember.computed.notEmpty( 'model.loyaltyNumber' ),

  isMatchingLoyaltyNumber: function() {
    return this.get( 'loyaltyNumberCache' ) === this.get( 'model.loyaltyNumber' );
  }.property( 'loyaltyNumberCache', 'model.loyaltyNumber' ),

  shouldDisplayMatchedAccountMsg: Ember.computed.and( 'isNewProfile', 'isLoyaltyMember', 'isMatchingLoyaltyNumber' ),

  listOfGenders: [
    { id: 1, label: 'Male'   },
    { id: 2, label: 'Female' }
  ],

  flashSuccessMessage: function() {
    this.set( 'animateSuccessMessage', true );
    this.set( 'displaySuccessMessage', true );

    setTimeout(function() {
      this.set( 'animateSuccessMessage', false );
    }.bind( this ), 5000);

    setTimeout(function() {
      this.set( 'displaySuccessMessage', false );
    }.bind( this ), 5300);
  }
});
