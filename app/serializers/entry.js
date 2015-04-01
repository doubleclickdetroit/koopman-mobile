import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'ID',

  extractArray: function(store, type, payload) {
    var products = [];

    payload.forEach(function(entry) {
      entry.products = [];

      if ( !!entry.acf_related_products ) {
        entry.acf_related_products.forEach(function(product) {
          products.push( product );
          entry.products.push( product.ID );
        });
      }
    });

    payload = {
      entries : payload,
      products: products
    };

    return this._super( store, type, payload );
  }
});
