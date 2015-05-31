import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000',

  buildURL: function(type) {
    return this.host + '/' + type + '.json';
  },

  pathForType: function(typeKey) {
    return typeKey;
  },
});
