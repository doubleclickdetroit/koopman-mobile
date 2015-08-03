/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  vendorFiles: {
    'handlebars.js': null
  },
  fingerprint: {
    enabled: false
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
app.import('bower_components/ember-data/ember-data.js.map', { destDir: 'assets' });

app.import('bower_components/lodash/lodash.min.js');

app.import('bower_components/moment/min/moment.min.js');

app.import('bower_components/pickadate/lib/compressed/picker.js');
app.import('bower_components/pickadate/lib/compressed/picker.date.js');
app.import('bower_components/pickadate/lib/compressed/themes/default.css');
app.import('bower_components/pickadate/lib/compressed/themes/default.date.css');

app.import('bower_components/pikabu/build/pikabu.min.js');
app.import('bower_components/pikabu/build/pikabu.css');

app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');
app.import('bower_components/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.eot', { destDir: 'fonts/bootstrap' });
app.import('bower_components/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf', { destDir: 'fonts/bootstrap' });
app.import('bower_components/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.svg', { destDir: 'fonts/bootstrap' });
app.import('bower_components/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.woff', { destDir: 'fonts/bootstrap' });

app.import('bower_components/fontawesome/fonts/fontawesome-webfont.eot', { destDir: 'fonts' });
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.ttf', { destDir: 'fonts' });
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.svg', { destDir: 'fonts' });
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff', { destDir: 'fonts' });
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff2', { destDir: 'fonts' });
app.import('bower_components/fontawesome/fonts/FontAwesome.otf', { destDir: 'fonts' });


// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
