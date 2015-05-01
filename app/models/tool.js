import DS from 'ember-data';

export default DS.Model.extend({
  entries : DS.hasMany( 'entry' ),
  projects: DS.hasMany( 'project' ),
  product : DS.belongsTo( 'product' ),

  title      : DS.attr(),
  content    : DS.attr(),
  description: DS.attr(),
  image      : DS.attr(),
  sku        : DS.attr()
});
