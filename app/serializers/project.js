import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'ID',

  extractArray: function(store, type, payload) {
    var products = [];

    payload.forEach(function(project) {
      project.products = [];

      if ( !!project.acf_related_products ) {
        project.acf_related_products.forEach(function(product) {
          products.push( product );
          project.products.push( product.ID );
        });
      }
    });

    payload = {
      projects: payload,
      products: products
    };

    return this._super( store, type, payload );
  },

  normalizeHash: {
    projects: function(hash) {
      hash.steps = hash.acf_project_steps;
      delete hash.acf_project_steps;

      return hash;
    }
  }
});
