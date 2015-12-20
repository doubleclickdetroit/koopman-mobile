import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title:         DS.attr('string'),
  description:   DS.attr('string'),
  details:       DS.attr('string'),
  priceCents:    DS.attr('number'),
  startDate:     DS.attr('date'),
  endDate:       DS.attr('date'),
  isFeatured:    DS.attr('boolean'),
  isMembersOnly: DS.attr('boolean'),
  modelNumber:   DS.attr('string'),
  sku:           DS.attr('string'),
  image:         DS.attr('string'),

  price: Ember.computed('priceCents', function() {
    let cents = this.get( 'priceCents' );
    return ( cents / 100 ).toFixed( 2 );
  }),

  categoryIds: Ember.computed('isMembersOnly', function() {
    let categories    = [ 'all' ];
    let isMembersOnly = this.get( 'isMembersOnly' );
    if ( isMembersOnly ) categories.push( 'advantage' );
    return categories.join( ' ' );
  })
});
