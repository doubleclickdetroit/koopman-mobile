import DS from 'ember-data';

export default DS.Model.extend({
  categories: DS.hasMany( 'category' ),
  tools     : DS.hasMany( 'tool' ),
  favorite  : DS.belongsTo( 'favorite' ),

  date       : DS.attr( 'date' ),
  link       : DS.attr(),
  title      : DS.attr(),
  content    : DS.attr(),
  relatedPost: DS.attr( 'number' ),
  image      : DS.attr(),

  steps: DS.attr( 'array' )
});
