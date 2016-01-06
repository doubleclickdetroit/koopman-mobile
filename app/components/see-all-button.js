import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'component-btn-see-all', 'animated' ],
  classNameBindings: [ 'isAnimated:shine' ],

  isAnimated: true,

  didInsertElement() {
    this.interval = setInterval(() => {
      this.set( 'isAnimated', false );
      setTimeout(() => {
        this.set( 'isAnimated', true );
      }, 1000)
    }, 10000);
  },

  willDestroyElement() {
    clearInterval( this.interval );
  }
});
