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
  loyaltyPoints  : DS.attr('number'),
  loyaltyDollars : DS.attr('number')
});
