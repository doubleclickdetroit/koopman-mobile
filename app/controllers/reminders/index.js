import Ember from 'ember';

export default Ember.ArrayController.extend({
  selectedGroupYear: ( new Date().getFullYear() ).toString(),

  listOfGroupYears: function() {
    var groups = this.get( 'groupedByYear' );
    return _.keys( groups );
  }.property( 'groupedByYear' ),

  groupedByYear: function() {
    var reminders = this.get( 'model.content' );
    return _.groupBy(reminders, function(item) {
      var year = item.get( 'remind_at' ).getFullYear();
      return year;
    });
  }.property( 'model.content' ),

  groupedByDate: function() {
    var groupDates,
        moment        = this.get( 'moment' ),
        selectedYear  = this.get( 'selectedGroupYear' ),
        groupedYears  = this.get( 'groupedByYear' ),
        currentGroup  = groupedYears[ selectedYear ];

    groupDates = _.groupBy(currentGroup, function(reminder) {
      return moment( reminder.get('remind_at') ).format( 'MMMM' );
    });
    groupDates = _.map(groupDates, function(collection, month) {
      var groupOfDates = _.groupBy(collection, function(date) {
        return moment( date.get('remind_at') ).format( 'DD' );
      });
      groupOfDates = _.map(groupOfDates, function(collection, date) {
        return { number: date, reminders: collection };
      });
      groupOfDates = _.sortBy( groupOfDates, 'number' );
      return { name: month, dates: groupOfDates };
    });

    return groupDates;
  }.property( 'selectedGroupYear', 'groupedByYear' )
});
