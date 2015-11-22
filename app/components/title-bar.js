import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [ 'component-title-bar' ],

  title:     null,
  routeName: null,

  titleDidChange: Ember.observer('title', function() {
    let title = this.get( 'title' );

    this.set( 'inTransition', true );
    this.set( 'hasTitle', !!title );

    setTimeout((() => {
      this.set( 'displayTitle', title );
      this.set( 'inTransition', false );
    }), 500);
  }).on( 'init' ),

  actions: {
    handleHistoryBack() {
      window.history.back();
    }
  }

});
