import Ember from 'ember';
import ToolProductActionsMixin from '../mixins/tool-product-actions';

export default Ember.Route.extend(ToolProductActionsMixin, {
  activate: function() {
    this.controllerFor( 'application' ).setProperties({
      'model.title'    : 'Shopping List',
      'model.routeName': null
    });
  },
  deactivate: function() {
    this.controllerFor( 'application' ).set( 'model.routeName', 'cart' );
  }
});
