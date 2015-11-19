import Ember from 'ember';
import ToolProductActionsMixin from '../mixins/tool-product-actions';

export default Ember.Controller.extend(ToolProductActionsMixin, {

  customProduct: Ember.Object.create({ title: '' }),

  actions: {

    addCustomProduct() {
      let product = this.get( 'customProduct' );
      
      if ( !!product.get('title') ) {
        this.send( 'addProduct', product );
        this.set( 'customProduct.title', '' );
      }
    }

  }

});
