import DS from 'ember-data';

export default DS.Model.extend({
  resource_pk: DS.belongsTo( 'project' ),

  resource_url: DS.attr(),
  remind_at   : DS.attr('number')
});

