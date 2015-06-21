import DS from 'ember-data';
import ENV from 'koopman-mobile/config/environment';

export default DS.ActiveModelAdapter.extend({
  host: ENV.API_RAILS_URL,

  buildURL: function(type) {
    return this.host + '/' + type + '.json';
  },

  pathForType: function(typeKey) {
    return typeKey;
  },
});
