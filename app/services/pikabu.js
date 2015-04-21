/* global Pikabu */
import Ember from 'ember';

export default Ember.Object.extend({
  __instance__: null,

  getInstance: function() {
    var instance = this.get( '__instance__' );
    if ( !instance ) {
      instance = this.set( '__instance__', new Pikabu() );
    }
    return instance;
  }
});
