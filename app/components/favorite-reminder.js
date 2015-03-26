import Ember from 'ember';

export default Ember.Component.extend({
  title: function() {
    var title;
    if      ( !!this.get( 'favorite.entry' ) )   { title = 'Entry'; }
    else if ( !!this.get( 'favorite.project' ) ) { title = 'Project'; }
    return title + " Reminder";
  }.property( 'favorite.entry', 'favorite.project' ),

  remindAtBuffer: Ember.computed.oneWay( 'favorite.remind_at' ),

  actions: {
    saveRemindAt: function() {
      var favorite  = this.get( 'favorite' ),
          remind_at = this.get( 'remindAtBuffer' );

      remind_at = !!remind_at ? new Date( remind_at ) : null;
      favorite.set( 'remind_at', remind_at );

      this.sendAction( 'onSave', favorite );
    }
  }
});
