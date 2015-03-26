import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: [ 'date:desc' ],
  sortedEntries : Ember.computed.sort( 'model', 'sortProperties' )
});
