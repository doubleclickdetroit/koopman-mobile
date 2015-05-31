import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'https://koopman.herokuapp.com',

  buildURL: function(type, id, record) {
    return this._super( type, id, record ) + '.json';
  }
});
