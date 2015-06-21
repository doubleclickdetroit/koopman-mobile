import DS from 'ember-data';
import ENV from 'koopman-mobile/config/environment';

export default DS.ActiveModelAdapter.extend({
  host: ENV.API_RAILS_URL,

  buildURL: function(type, id, record) {
    type = 'post';
    return this._super( type, id, record ) + '.json';
  },
});
