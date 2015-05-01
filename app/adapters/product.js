import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000',

  buildURL: function(type, id, record) {
    return this._super( type, id, record ) + '.json';
  }
});
