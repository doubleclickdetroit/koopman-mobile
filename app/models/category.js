import DS from 'ember-data';

export default DS.Model.extend({
  projects: DS.hasMany( 'project' ),
  name: DS.attr()
});
