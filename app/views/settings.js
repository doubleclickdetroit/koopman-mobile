import Ember from 'ember';

export default Ember.View.extend({
  displaySuccessMessageHasChanged: function() {
    var displayMessage = this.get( 'controller.displaySuccessMessage' );
    if ( displayMessage ) {
      Ember.$( 'html, body' ).animate( { scrollTop: 0 }, '500', 'swing' );
    }
  }.observes( 'controller.displaySuccessMessage' )
});
