import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: [ 'date:desc' ],
  sortedProjects: Ember.computed.sort( 'model', 'sortProperties' )
});
