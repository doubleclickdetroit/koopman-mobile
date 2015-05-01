import DS from 'ember-data';

export default DS.Model.extend({
  tool: DS.belongsTo( 'tool' ),

  name: DS.attr()
});
