import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('projects', function() {
    this.resource( 'project', { path: ':project_id' } );
  });
  this.resource('entries', function() {
    this.resource( 'entry', { path: ':entry_id' } );
  });
  this.resource('favorites', function() { });
  this.resource('reminders', function() { });

  this.route( 'cart' );
  this.route( 'settings' );
  this.route( 'login' );
  this.route( 'registration' );
});

export default Router;
