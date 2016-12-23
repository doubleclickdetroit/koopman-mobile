import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(type, id, record) {
    var query = "?categories[]=135&filter[order]=DESC&filter[orderby]=date&per_page=10";
    return this._super( type, id, record ) + query;
  },

  pathForType: function() {
    return Ember.String.pluralize( "post" );
  }
});
