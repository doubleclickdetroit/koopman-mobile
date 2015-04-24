import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: [ 'date:desc' ],
  sortedEntries : Ember.computed.sort( 'model', 'sortProperties' ),

  selectedGroupYear: ( new Date().getFullYear() ).toString(),

  listOfGroupYears: function() {
    var groups = this.get( 'groupedByYear' );
    return _.keys( groups );
  }.property( 'groupedByYear' ),

  groupedByYear: function() {
    var entries = this.get( 'model.content' );
    return _.groupBy(entries, function(item) {
      var year = item.get( 'date' ).getFullYear();
      return year;
    });
  }.property( 'model.content' ),

  groupedByDate: function() {
    var groupDates,
        moment       = this.get( 'moment' ),
        selectedYear = this.get( 'selectedGroupYear' ),
        groupedYears = this.get( 'groupedByYear' ),
        currentGroup = groupedYears[ selectedYear ];

    groupDates = _.groupBy(currentGroup, function(entry) {
      return moment( entry.get('date') ).format( 'MMMM' );
    });
    groupDates = _.map(groupDates, function(collection, month) {
      var groupOfDates = _.groupBy(collection, function(date) {
        return moment( date.get('date') ).format( 'DD' );
      });
      groupOfDates = _.map(groupOfDates, function(collection, date) {
        return { number: date, entries: collection };
      });
      groupOfDates = _.sortBy( groupOfDates, 'number' );
      return { name: month, dates: groupOfDates };
    });

    return groupDates;
  }.property( 'selectedGroupYear', 'groupedByYear' )
});
