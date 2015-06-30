import Ember from 'ember';

export default Ember.Controller.extend({
  productCollection        : Ember.computed.filterBy( 'model.products', 'isHidden', false ),
  acquiredProductCollection: Ember.computed.filterBy( 'productCollection', 'hasAcquired', true ),
  withoutAcquiredProducts  : Ember.computed.equal( 'acquiredProductCollection.length', 0 ),

  customProduct: Ember.Object.create({
    title: ''
  })
});
