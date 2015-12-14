import DS from 'ember-data';
import ENV from 'koopman-mobile/config/environment';

export default DS.ActiveModelAdapter.extend({
  host: ENV.API_CATALOG_URL,

  buildURL: function(type, id, record) {
    return this._super( type, id, record ) + '.json';
  }
});
