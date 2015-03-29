import DS from 'ember-data';

export default DS.Model.extend({
  entry  : DS.belongsTo( 'entry' ),
  project: DS.belongsTo( 'project' ),

  url      : DS.attr(),
  remind_at: DS.attr( 'date' ),
  is_hidden: DS.attr( 'boolean' )
});

