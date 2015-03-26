import Ember from 'ember';

export function dateMoment(input) {
  return moment( input ).calendar();
};

export default Ember.Handlebars.makeBoundHelper(dateMoment);
