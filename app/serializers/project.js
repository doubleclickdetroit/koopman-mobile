import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'ID',

  extractArray: function(store, type, payload) {
    var payload_with_root = {
      projects: payload
    };
    return this._super( store, type, payload_with_root );
  }
});
