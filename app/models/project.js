import DS from 'ember-data';

export default DS.Model.extend({
  favorite: DS.belongsTo( 'favorite' ),

  date   : DS.attr( 'date' ),
  link   : DS.attr(),
  title  : DS.attr(),
  content: DS.attr(),
});
