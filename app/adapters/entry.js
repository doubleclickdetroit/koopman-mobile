import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(type, id, record) {
    var query = '?type[]=almanac_entry';
    return this._super( type, id, record ) + query;
  },

  pathForType: function() {
    return Ember.String.pluralize( 'post' );
  }
});
