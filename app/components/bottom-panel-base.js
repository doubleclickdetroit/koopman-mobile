import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [ 'share-bottom', 'component-bottom-panel-base' ],

  didInsertElement() {
    setTimeout(( () => this.togglePanelDisplay() ), 200);
    $( window ).on( 'app.sidebar.open', () => this.send('cancel') );
  },

  togglePanelDisplay(shouldOpen) {
    try {
      this.$().toggleClass( 'active-share-bottom', shouldOpen );
    }
    catch(e) {
      console.log( 'togglePanelDisplay', e );
    }
  },

  actions: {

    ok() {
      this.sendAction( 'ok' );
    },

    cancel() {
      this.send( 'close' );
      this.sendAction( 'cancel' );
    },

    close() {
      this.togglePanelDisplay( false );
      setTimeout(( () => this.sendAction('close') ), 200);
    }

  }

});
