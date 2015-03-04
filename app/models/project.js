import DS from 'ember-data';

export default DS.Model.extend({
  favorite: DS.belongsTo( 'favorite', { async: true } ),

  title  : DS.attr(),
  content: DS.attr(),
});
