import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'ID',

  normalizeHash: {
    products: function(hash) {
      hash.sku         = hash.acf_sku;
      hash.image       = hash.acf_image;
      hash.description = hash.acf_description;

      delete hash.acf_sku;
      delete hash.acf_image;
      delete hash.acf_description;

      return hash;
    }
  }
});
