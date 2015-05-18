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
  excerpt    : DS.attr(),
  image      : DS.attr(),

  steps                 : DS.attr( 'array' ),
  hasMultipleParts      : DS.attr(),
  seriesPartNumber      : DS.attr(),
  seriesTitle           : DS.attr(),
  seriesAttributes      : DS.attr( 'array' ),
  seriesCautionStatement: DS.attr(),
  seriesPartTitle       : DS.attr(),
  seriesPartEstimateTime: DS.attr(),
  seriesPartDifficulty  : DS.attr(),
  wrapUp                : DS.attr()

});
