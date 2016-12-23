import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(type, id, record) {
    var query = "?filter[order]=ASC&filter[orderby]=title";
    return this._super( type, id, record ) + query;
  },

  pathForType: function() {
    return "location";
  }
});
