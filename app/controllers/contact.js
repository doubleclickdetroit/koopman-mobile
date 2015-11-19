import Ember from 'ember';

export default Ember.Controller.extend({
  isWithoutFeedback: Ember.computed.equal( 'model.hasFeedback', false ),

  flashSuccessMessage: function() {
    this.set( 'animateSuccessMessage', true );
    this.set( 'displaySuccessMessage', true );

    setTimeout(() => {
      this.set( 'animateSuccessMessage', false );
      this.set( 'displaySuccessMessage', false );
    }, 5000);
  }
});
