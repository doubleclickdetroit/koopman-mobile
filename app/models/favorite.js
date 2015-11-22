import DS from 'ember-data';

export default DS.Model.extend({
  entry  : DS.belongsTo( 'entry', { async: true }),
  project: DS.belongsTo( 'project', { async: true }),

  url      : DS.attr(),
  remind_at: DS.attr( 'date' ),
  is_hidden: DS.attr( 'boolean' )
});
