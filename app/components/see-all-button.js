import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'btn-see-all', 'animated' ],
  classNameBindings: [ 'isAnimated:swing' ],

  isAnimated: true,

  didInsertElement() {
    setInterval(() => {
      this.set( 'isAnimated', false );
      setTimeout(() => {
        this.set( 'isAnimated', true );
      }, 1000)
    }, 10000);
  }
});
