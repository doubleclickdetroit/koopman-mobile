import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host     : 'http://koopmanblog.com',
  namespace: 'wp-json'
});
