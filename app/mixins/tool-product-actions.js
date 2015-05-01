import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {

    addProduct: function(model) {
      var product = this.store.createRecord('product', {
        name: model.get( 'title' )
      });

      model.set( 'product', product );
      product.save();
    },

    removeProduct: function(model) {
      var isProduct = model.get( 'constructor.typeKey' );
      if ( isProduct === 'product' ) {
        model.destroyRecord();
      }
    },

    emptyProducts: function() {
      var isConfirmed = confirm( 'Are you sure you want to clear your entire shopping list?' );
      if ( isConfirmed ) {
        this.get( 'controller.model.products' ).invoke( 'destroyRecord' );
      }
    }

  }
});
