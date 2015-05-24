import DS from 'ember-data';

export default DS.Model.extend({
  isNewLocation     : DS.attr('boolean'),
  title             : DS.attr('string'),
  address           : DS.attr('string'),
  phone             : DS.attr('string'),
  fax               : DS.attr('string'),
  generalManager    : DS.attr('string'),
  scheduleCollection: DS.attr( 'array' ),

  encodedAddress: function() {
    var address = this.get( 'address' );
    return address.replace( /(<([^>]+)>)/ig, '' )
                  .replace( /(\r\n|\n|\r)/gm, ' ' )
                  .replace( / /g, '+' );
  }.property( 'address' ),

  encodedPhone: function() {
    var phone = this.get( 'phone' );
    return phone.replace( /\D/g, '' );
  }.property( 'phone' ),

  encodedFax: function() {
    var fax = this.get( 'fax' );
    return fax.replace( /\D/g, '' );
  }.property( 'fax' ),
});
