import Ember from 'ember';
import ToolProductActionsMixin from '../mixins/tool-product-actions';

export default Ember.Route.extend(ToolProductActionsMixin, {
  activate: function() {
    this.controllerFor( 'application' ).set( 'title', 'Shopping List' );
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'title', null );
  }
});
