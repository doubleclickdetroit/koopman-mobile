import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'ID',

  extractArray: function(store, type, payload) {
    payload = {
      categories: payload
    };
    return this._super( store, type, payload );
  }
});
