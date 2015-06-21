import ApplicationAdapter from './application';
import ENV from 'koopman-mobile/config/environment';

export default ApplicationAdapter.extend({
  host: ENV.API_RAILS_URL,
});
