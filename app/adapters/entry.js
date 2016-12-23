import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(type, id, record) {
    var date  = moment().format( 'YYYY-MM-DD' ),
        query = "?almanac_date_after="+ date +"T00:00:00&per_page=10&order=asc";
        
    return this._super( type, id, record ) + query;
  },

  pathForType: function() {
    return "almanac_entry";
  }
});
