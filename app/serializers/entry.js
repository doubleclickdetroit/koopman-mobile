import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'ID',

  extractArray: function(store, type, payload) {
    var tools = [];

    payload.forEach(function(entry) {
      entry.tools = [];

      if ( !!entry.acf_related_products ) {
        entry.acf_related_products.forEach(function(tool) {
          tools.push( tool );
          entry.tools.push( tool.ID );
        });
      }
    });

    payload = {
      entries : payload,
      tools: tools
    };

    return this._super( store, type, payload );
  },

  normalizeHash: {
    entries: function(hash) {
      var date;

      if ( hash.acf_almanac_date ) {
        hash.date = hash.acf_almanac_date;
        delete hash.acf_almanac_date;
      }

      if ( hash.featured_image ) {
        hash.image = hash.featured_image.attachment_meta.sizes;
        hash.image.full_width = { url: hash.featured_image.source };
        delete hash.featured_image;
      }

      return hash;
    }
  }
});
