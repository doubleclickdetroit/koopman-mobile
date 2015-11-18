import Ember from 'ember';

export default Ember.Component.extend({
  okLabel: 'Ok',

  didInsertElement() {
    this.$dialog = this.$( '.simple-login-modal-content' );
    this.showDialog();
  },

  showDialog() {
    this.$dialog.modal({ onClose: () => this.closeDialog() });
  },

  closeDialog(action='close') {
    $.modal.close();
    this.sendAction( action );
  },

  actions: {
    ok() {
      this.closeDialog( 'ok' );
    }
  }
});
