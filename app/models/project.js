import DS from 'ember-data';

export default DS.Model.extend({
  categories: DS.hasMany( 'category' ),
  products  : DS.hasMany( 'product' ),
  favorite  : DS.belongsTo( 'favorite' ),

  date       : DS.attr( 'date' ),
  link       : DS.attr(),
  title      : DS.attr(),
  content    : DS.attr(),
  relatedPost: DS.attr( 'number' ),

  steps: DS.attr( 'array' )
});
