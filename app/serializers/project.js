import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'ID',

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
      name: 'All'
    });

    payload = {
      categories: categories,
      projects  : payload,
      tools     : tools
    };

    return this._super( store, type, payload );
  },

  normalizeHash: {
    projects: function(hash) {
      hash.steps = hash.acf_project_steps;
      delete hash.acf_project_steps;

      if ( hash.featured_image ) {
        hash.image = hash.featured_image.attachment_meta.sizes;
        delete hash.featured_image;
      }

      return hash;
    }
  }
});
