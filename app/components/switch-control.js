import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: [ 'switch', 'switch-1' ],
  classNameBindings: [ 'isActive:switch-1-on' ],

  isActive: false,

  click() {
    this.toggleProperty( 'isActive' );
  }
});
