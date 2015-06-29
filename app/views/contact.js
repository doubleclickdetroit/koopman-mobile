import Ember from 'ember';

export default Ember.View.extend({
  injectCallRailScript: function() {
    var url = '//cdn.callrail.com/companies/173276157/c70c8efd9c49d99cea1a/12/swap.js';
    Ember.$.getScript( url );
  }.on( 'didInsertElement' )
});
