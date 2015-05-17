import DS from 'ember-data';

export default DS.Model.extend({
  firstName       : DS.attr(),
  lastName        : DS.attr(),
  gender          : DS.attr( 'number' ),
  tel             : DS.attr(),
  street          : DS.attr(),
  city            : DS.attr(),
  state           : DS.attr(),
  zipcode         : DS.attr(),
  customer_number : DS.attr(),
  loyalty_number  : DS.attr(),
  has_confirmed_linked_account: DS.attr( 'boolean', { defaultValue: false } ),
});

