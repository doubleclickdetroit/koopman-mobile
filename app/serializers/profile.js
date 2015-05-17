import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  extractArray: function(store, type, payload) {
    // ember-data needs single resource to be wrapped in an array ಠ_ಠ
    payload.profile = [ payload.profile ];
    return this._super( store, type, payload );
  }
});
