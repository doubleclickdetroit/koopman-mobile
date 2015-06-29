import Ember from 'ember';

export default Ember.Controller.extend({
  isWithoutFeedback: Ember.computed.equal( 'model.hasFeedback', false ),

  flashSuccessMessage: function() {
    this.set( 'animateSuccessMessage', true );
    this.set( 'displaySuccessMessage', true );

    setTimeout(function() {
      this.set( 'animateSuccessMessage', false );
    }.bind( this ), 5000);

    setTimeout(function() {
      this.set( 'displaySuccessMessage', false );
    }.bind( this ), 5300);
  }
});
