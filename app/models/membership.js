import DS from 'ember-data';

export default DS.Model.extend({
  name           : DS.attr('string'),
  email          : DS.attr('string'),
  phone          : DS.attr('string'),
  address1       : DS.attr('string'),
  address2       : DS.attr('string'),
  city           : DS.attr('string'),
  state          : DS.attr('string'),
  zipcode        : DS.attr('string'),
  acctId         : DS.attr('string'),
  loyaltyId      : DS.attr('string'),
  acctOpenDate   : DS.attr('date'),
  pointsConverted: DS.attr('number'),
  ytdSales       : DS.attr('number'),
  loyaltyPoints  : DS.attr('number', { defaultValue: 0 }),
  loyaltyDollars : DS.attr('number', { defaultValue: 0 }),
  isGhostAccount : DS.attr('boolean', { defaultValue: false }),

  isAdvantageMember: Ember.computed('loyaltyId', 'isGhostAccount', function() {
    let hasLoyaltyId   = !!this.get( 'loyaltyId' );
    let isGhostAccount = this.get( 'isGhostAccount' );
    return hasLoyaltyId || isGhostAccount;
  }),

  advantageMembershipSignupDate: Ember.computed('acctOpenDate', function() {
    let date = this.get( 'acctOpenDate' );
    return moment( date ).format( 'MMMM, YYYY' );
  }),

  nameFormatted: Ember.computed('name', function() {
    let name = this.get( 'name' ) || '';
    return name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }),

  loyaltyDollarsFormatted: Ember.computed('loyaltyDollars', function() {
    let amt = ( this.get('loyaltyDollars') || 0 ).toFixed( 2 );
    return `$${amt}`;
  })
});
