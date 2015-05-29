import DS from 'ember-data';

export default DS.Model.extend({
  firstName     : DS.attr(),
  lastName      : DS.attr(),
  gender        : DS.attr( 'number' ),
  tel           : DS.attr(),
  street        : DS.attr(),
  city          : DS.attr(),
  state         : DS.attr(),
  zipcode       : DS.attr(),
  customerNumber: DS.attr(),
  loyaltyNumber : DS.attr(),
  hasConfirmedLinkedAccount: DS.attr( 'boolean', { defaultValue: false } ),
});

