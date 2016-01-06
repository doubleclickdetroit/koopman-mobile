import Ember from 'ember';

const STORAGE_KEY = "ghostMembership";

export default Ember.Object.extend({

  insertMembership(model) {
    let data = {
      email: model.get( 'email' ),
      isGhostAccount: true
    };

    localStorage.setItem( STORAGE_KEY, JSON.stringify(data) );

    // now load in-memory
    this.loadMembership();
  },

  loadMembership() {
    let data = localStorage.getItem( STORAGE_KEY );
    if ( data ) {
      this.store.createRecord( 'membership', JSON.parse(data) );
    }
  },

  removeMembership() {
    localStorage.removeItem( STORAGE_KEY );
  }

});
