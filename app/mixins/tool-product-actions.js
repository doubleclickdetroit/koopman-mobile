import Ember from 'ember';

export default Ember.Mixin.create({
  afterModel() {
    let productsCache = this.store.all( 'product' );
    if ( productsCache.get('length') < 1 ) {
      this.store.find( 'product' );
    }

    this._super.apply( this, arguments );
  },

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

    toggleAcquired: function(model) {
      model.toggleProperty( 'hasAcquired' );
      model.save();
    },

    clearCompleted: function() {
      this.get( 'controller.model.products' )
      .filter(function(product) {
        return product.get( 'hasAcquired' ) === true;
      })
      .invoke( 'set', 'isHidden', true )
      .invoke( 'save' );
    }

  }
});
