import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractSingle(store, type, payload, id, requestType) {
    var tools = [];

    payload.tools = [];

    if ( !!payload.acf_related_post ) {
      payload.relatedPost = payload.acf_related_post.ID;
      delete payload.acf_related_post;
    }

    if ( !!payload.acf_related_products ) {
      payload.acf_related_products.forEach(function(tool) {
        tools.push( tool );
        payload.tools.push( tool.ID );
      });
    }

    payload = {
      projects: payload,
      tools   : tools
    };

    return this._super( store, type, payload, id, requestType );
  },

  extractArray: function(store, type, payload) {
    var tools      = [],
        categories = {};

    payload.forEach(function(project) {
      project.tools      = [];
      project.categories = [0]; // add "all" category

      if ( !!project.acf_related_post ) {
        project.relatedPost = project.acf_related_post.ID;
        delete project.acf_related_post;
      }

      if ( !!project.acf_related_products ) {
        project.acf_related_products.forEach(function(tool) {
          tools.push( tool );
          project.tools.push( tool.ID );
        });
      }

      if ( !!project.terms && !!project.terms.category ) {
        project.terms.category.forEach(function(category) {
          categories[ category.ID ] = category;
          project.categories.push( category.ID );
        });
      }
    });

    categories = _.map( categories );
    categories.unshift({
      ID: 0,
      name: 'All Categories'
    });

    payload = {
      categories: categories,
      projects  : payload,
      tools     : tools
    };

    return this._super( store, type, payload );
  },

  normalizeHash: {
    project(hash) {
      hash.seriesAttributes = hash.acf_series_attibutes;
      delete hash.acf_series_attibutes;

      hash.hasMultipleParts = hash.acf_has_multiple_parts;
      delete hash.acf_has_multiple_parts;

      hash.seriesPartNumber = hash.acf_series_part_number;
      delete hash.acf_series_part_number;

      hash.seriesPartTitle = hash.acf_series_part_title;
      delete hash.acf_series_part_title;

      hash.seriesTitle = hash.acf_series_title;
      delete hash.acf_series_title;

      hash.seriesCautionStatement = hash.acf_series_caution_statement;
      delete hash.acf_series_caution_statement;

      hash.seriesPartEstimateTime = hash.acf_series_part_estimated_time;
      delete hash.acf_series_part_estimated_time;

      hash.seriesPartDifficulty = hash.acf_series_part_difficulty;
      delete hash.acf_series_part_difficulty;

      hash.steps = hash.acf_project_steps;
      delete hash.acf_project_steps;

      hash.wrapUp = hash.acf_wrap_up;
      delete hash.acf_wrap_up;

      if ( hash.better_featured_image ) {
        hash.image = hash.better_featured_image.media_details.sizes;
        hash.image.full_width = { url: hash.better_featured_image.source_url };
        delete hash.better_featured_image;
      }

      return hash;
    },

    projects: function(hash) {
      hash.seriesAttributes = hash.acf_series_attibutes;
      delete hash.acf_series_attibutes;

      hash.hasMultipleParts = hash.acf_has_multiple_parts;
      delete hash.acf_has_multiple_parts;

      hash.seriesPartNumber = hash.acf_series_part_number;
      delete hash.acf_series_part_number;

      hash.seriesPartTitle = hash.acf_series_part_title;
      delete hash.acf_series_part_title;

      hash.seriesTitle = hash.acf_series_title;
      delete hash.acf_series_title;

      hash.seriesCautionStatement = hash.acf_series_caution_statement;
      delete hash.acf_series_caution_statement;

      hash.seriesPartEstimateTime = hash.acf_series_part_estimated_time;
      delete hash.acf_series_part_estimated_time;

      hash.seriesPartDifficulty = hash.acf_series_part_difficulty;
      delete hash.acf_series_part_difficulty;

      hash.steps = hash.acf_project_steps;
      delete hash.acf_project_steps;

      hash.wrapUp = hash.acf_wrap_up;
      delete hash.acf_wrap_up;

      if ( hash.better_featured_image ) {
        hash.image = hash.better_featured_image.media_details.sizes;
        hash.image.full_width = { url: hash.better_featured_image.source_url };
        delete hash.better_featured_image;
      }

      return hash;
    }
  }
});
