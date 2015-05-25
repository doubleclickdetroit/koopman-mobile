/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'koopman-mobile',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    contentSecurityPolicy: {
      'connect-src': "'self'",
      'style-src': "'self' 'unsafe-inline' use.typekit.net"
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

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise'
  };
  ENV['simple-auth-devise'] = {
    identificationAttributeName: 'email',
    serverTokenEndpoint: 'http://localhost:3000/users/sign_in.json'
  }

  ENV['simple-auth']['crossOriginWhitelist'] = ['http://localhost:3000'];

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
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

  }

  return ENV;
};
