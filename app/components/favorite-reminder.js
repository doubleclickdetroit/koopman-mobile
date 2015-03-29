import Ember from 'ember';

export default Ember.Component.extend({
  remindAtBuffer: Ember.computed.oneWay( 'favorite.remind_at' ),
  isRemindAtNull: Ember.computed.none( 'favorite.remind_at' ),
  isEditable    : Ember.computed.or( 'isRemindAtNull', 'favorite.isDirty' ),

  title: function() {
    var title;
    if      ( !!this.get( 'favorite.entry' ) )   { title = 'Entry'; }
    else if ( !!this.get( 'favorite.project' ) ) { title = 'Project'; }
    return title + " Reminder";
  }.property( 'favorite.entry', 'favorite.project' ),

  favoriteDidChange: function() {
    this.set( 'remindAtBuffer', null );
    this.set( 'isEditable', true );
  }.observes( 'favorite' ),

  actions: {
    setAsEditable: function() {
      if ( !this.get( 'favorite.remind_at' ) ) {
        this.set( 'remindAtBuffer', null );
      }
      this.toggleProperty( 'isEditable' );
    },

    saveRemindAt: function() {
      var favorite  = this.get( 'favorite' ),
          remind_at = this.get( 'remindAtBuffer' );

      remind_at = !!remind_at ? new Date( remind_at ) : null;
      favorite.set( 'remind_at', remind_at );

      this.toggleProperty( 'isEditable' );
      this.sendAction( 'onSave', favorite );
    }
  }
});
