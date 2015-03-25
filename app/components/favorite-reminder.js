import Ember from 'ember';

export default Ember.Component.extend({
  title: function() {
    var title;
    if      ( !!this.get( 'favorite.entry' ) )   title = 'Entry';
    else if ( !!this.get( 'favorite.project' ) ) title = 'Project';
    return title + " Reminder";
  }.property( 'favorite.entry', 'favorite.project' )
});
