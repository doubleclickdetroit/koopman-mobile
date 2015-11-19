import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [ 'portfolio-item' ],

  subtitle: '&nbsp;',

  actions: {

    toggleContent() {
      this.$( '.wide-text' ).slideToggle( 200 );
    }

  }

});
