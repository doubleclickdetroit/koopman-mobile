import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractSingle(store, type, payload, id, requestType) {
    var tools = [];

    payload.tools = [];

    if ( !!payload.acf_related_products ) {
      payload.acf_related_products.forEach(function(tool) {
        tools.push( tool );
        payload.tools.push( tool.ID );
      });
    }

    payload = {
      entry : payload,
      tools: tools
    };

    return this._super( store, type, payload, id, requestType );
  },

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
    entry(hash) {
      if ( hash.acf_almanac_date ) {
        hash.date = moment( hash.acf_almanac_date ).add( 1, 'day' ).format( 'YYYY-MM-DD' );
        delete hash.acf_almanac_date;
      }

      if ( hash.better_featured_image ) {
        hash.image = hash.better_featured_image.media_details.sizes;
        hash.image.full_width = { url: hash.better_featured_image.source_url };
        delete hash.better_featured_image;
      }

      return hash;
    },
    entries: function(hash) {
        if ( hash.acf_almanac_date ) {
        hash.date = moment( hash.acf_almanac_date ).add( 1, 'day' ).format( 'YYYY-MM-DD' );
        delete hash.acf_almanac_date;
      }

      if ( hash.better_featured_image ) {
        hash.image = hash.better_featured_image.media_details.sizes;
        hash.image.full_width = { url: hash.better_featured_image.source_url };
        delete hash.better_featured_image;
      }

      return hash;
    }
  }
});
