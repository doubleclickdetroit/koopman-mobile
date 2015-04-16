import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(type, id, record) {
    return this._super() + '/taxonomies/category/terms';
  }
});
