import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'global-loading',
  tagName     : 'article',
  classNames  : [ 'app-view', 'view-loading' ]
});
