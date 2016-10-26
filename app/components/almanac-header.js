import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'h4',
  classNames: [ 'timeline-month' ],

  yearAndMonthDidChange: function() {
    var date   = new Date();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var selectedYear = this.get( 'year' );
    var currentYear  = ( new Date() ).getFullYear();

    var month        = this.get( 'month' );
    var currentMonth = months[ (new Date()).getMonth() ];

    var isCurrentYear  = selectedYear == currentYear;
    var isCurrentMonth = month == currentMonth;;

    if ( isCurrentYear && isCurrentMonth ) {
      Ember.run.schedule('afterRender', () => {
        var $el = Ember.$( this.$() );
        var height = Ember.$( '.header-elements' ).outerHeight();

        /*
        Ember.$('#content').scrollTop(0).animate({
          scrollTop: $el.offset().top - 60
        }, 500, 'easeInOutQuad');
        */
      });
    }
  }.observes( 'year', 'month' ).on( 'init' )
});
