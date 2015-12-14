/* jshint node: true */

module.exports = function(environment) {
  var config = require( './config' ).config;

  var ENV = {
    defaults: config,
    modulePrefix: 'koopman-mobile',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    contentSecurityPolicy: {
      'default-src': "'self' https://www.youtube-nocookie.com/",
      'connect-src': "'self' http://koopmanblog.com/wp-json/ http://localhost:3000/",
      'img-src': "'self' http://koopmanblog.com/",
      'style-src': "'self' 'unsafe-inline' use.typekit.net http://fonts.googleapis.com/",
      'font-src': "'self' http://fonts.gstatic.com/"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    cordova: {
      // rebuildOnChange: true,
      emulate: true
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.API_WP_URL = config.apiWp.url.dev;
    ENV.API_RAILS_URL = config.apiRails.url.dev;
    ENV.API_CATALOG_URL = config.apiCatalog.url.dev;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.API_WP_URL = config.apiWp.url.prod;
    ENV.API_RAILS_URL = config.apiRails.url.prod;
    ENV.API_CATALOG_URL = config.apiCatalog.url.prod;
  }


  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise'
  };
  ENV['simple-auth-devise'] = {
    identificationAttributeName: 'email'
  };

  ENV['simple-auth']['crossOriginWhitelist'] = [ENV.API_RAILS_URL];
  ENV['simple-auth-devise']['serverTokenEndpoint'] = ENV.API_RAILS_URL + '/users/sign_in.json';


  return ENV;
};
