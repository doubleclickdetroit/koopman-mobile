import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName     : DS.attr(),
  lastName      : DS.attr(),
  gender        : DS.attr( 'number' ),
  email         : DS.attr(),
  tel           : DS.attr(),
  street        : DS.attr(),
  city          : DS.attr(),
  state         : DS.attr(),
  zipcode       : DS.attr(),
  customerNumber: DS.attr(),
  loyaltyNumber : DS.attr(),
  hasConfirmedLinkedAccount: DS.attr( 'boolean', { defaultValue: false } ),

  populateEmailOnInit: Ember.on('init', function() {
    Ember.run.schedule('sync', this, function() {
      let email = this.get( 'session.email' );
      this.set( 'email', email );
    });
  })
});
