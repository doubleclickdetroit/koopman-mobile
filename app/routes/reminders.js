import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.filter('favorite', function(model) {
      return !!model.get( 'remind_at' );
    });
  }
});
