import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  tool: DS.belongsTo( 'tool' ),

  name       : DS.attr(),
  hasAcquired: DS.attr( 'boolean', { defaultValue: false } ),
  isHidden   : DS.attr( 'boolean', { defaultValue: false } ),

  relatedPosts: Ember.computed.alias( 'tool.relatedPosts' )
});
