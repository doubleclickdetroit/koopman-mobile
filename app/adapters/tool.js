import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType: function() {
    return Ember.String.pluralize( 'post' );
  }
});
