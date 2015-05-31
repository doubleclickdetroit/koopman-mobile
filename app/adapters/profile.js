import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'https://koopman.herokuapp.com',

  buildURL: function(type) {
    return this.host + '/' + type + '.json';
  },

  pathForType: function(typeKey) {
    return typeKey;
  },
});
