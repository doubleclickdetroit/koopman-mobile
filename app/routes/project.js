import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.find( 'project', params.project_id );
  },

  actions: {
    'handleUnfavorite': function(model) {
      console.log('handleUnfavorite', model);
    },

    'handleFavorite': function(model) {
      console.log('handleFavorite', model);
    },
  },

});
