import Ember from 'ember';

export default Ember.Component.extend({
  title: function() {
    var title;
    if      ( !!this.get( 'favorite.entry' ) )   title = 'Entry';
    else if ( !!this.get( 'favorite.project' ) ) title = 'Project';
    return title + " Reminder";
  }.property( 'favorite.entry', 'favorite.project' ),

  actions: {
    saveRemindAt: function() {
      var favorite  = this.get( 'favorite' ),
          remind_at = favorite.get( 'remind_at' );

      if ( !!remind_at ) {
        favorite.set( 'remind_at', new Date( remind_at ) );
      }

      this.sendAction( 'onSave', favorite );
    }
  }
});
