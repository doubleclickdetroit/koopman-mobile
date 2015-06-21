import DS from 'ember-data';
import ENV from 'koopman-mobile/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.API_WP_URL,
  namespace: ENV.defaults.apiWp.namespace
});
