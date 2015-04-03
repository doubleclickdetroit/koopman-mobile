import Ember from 'ember';

export default Ember.Component.extend({
  remindAtBuffer: Ember.computed.oneWay( 'favorite.remind_at' ),
  isRemindAtNull: Ember.computed.none( 'favorite.remind_at' ),

  isEditable: function() {
    var isNull   = this.get( 'isRemindAtNull' ),
        isHidden = this.get( 'favorite.is_hidden'),
        isDirty  = this.get( 'favorite.isDirty' );

    return isNull && !isDirty && !isHidden;
  }.property( 'isRemindAtNull', 'favorite.is_hidden', 'favorite.isDirty' ),

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
      this.set( 'favorite.is_hidden', false );
    },

    saveRemindAt: function() {
      var favorite  = this.get( 'favorite' ),
          remind_at = this.get( 'remindAtBuffer' );

      remind_at = !!remind_at ? new Date( remind_at ) : null;
      favorite.set( 'remind_at', remind_at );

      this.toggleProperty( 'isEditable' );
      this.set( 'favorite.is_hidden', true );
      this.sendAction( 'onSave', favorite );
    }
  }
});
