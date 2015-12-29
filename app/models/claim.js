import DS from 'ember-data';

export default DS.Model.extend({
  deal: DS.belongsTo( 'deal' ),
  expiresAt: DS.attr( 'date' )
});
