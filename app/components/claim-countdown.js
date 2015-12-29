import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [ 'component-claim-countdown' ],

  didInsertElement() {
    let timestamp = this.get( 'timestamp' );
    if ( timestamp ) {
      this.$().countdown({
        date: timestamp,
        onEnd: () => { this.sendAction( 'onExpired' ); }
      });
    }
  }

});
