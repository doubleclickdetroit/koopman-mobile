import Ember from 'ember';

export function noBr(input) {
  return input.replace( /<br ?\/?>/g, ',' );
};

export default Ember.Handlebars.makeBoundHelper(noBr);
