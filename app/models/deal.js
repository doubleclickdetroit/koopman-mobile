import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title:         DS.attr('string'),
  description:   DS.attr('string'),
  details:       DS.attr('string'),
  price:         DS.attr('number'),
  startDate:     DS.attr('date'),
  endDate:       DS.attr('date'),
  isFeatured:    DS.attr('boolean'),
  isMembersOnly: DS.attr('boolean'),
  modelNumber:   DS.attr('string'),
  sku:           DS.attr('string'),
  image:         DS.attr('string'),

  categoryIds: Ember.computed('isMembersOnly', function() {
    let categories    = [ 'all' ];
    let isMembersOnly = this.get( 'isMembersOnly' );
    if ( isMembersOnly ) categories.push( 'advantage' );
    return categories.join( ' ' );
  })
});
