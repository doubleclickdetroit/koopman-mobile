import Ember from 'ember';

export default Ember.Controller.extend({
  categories: Ember.computed.alias( 'dealsCategoriesService.categories' ),

  setCategoryAsSelected(category) {
    let categoryId = category.get( 'id' );
    this.get('categories').rejectBy( 'id', categoryId ).setEach( 'isSelected', false );
    category.set( 'isSelected', true );
  },

  selectedCategory: Ember.computed('categories.@each.isSelected', function() {
    let categories = this.get( 'categories' );
    return categories.findBy( 'isSelected', true );
  }),

  actions: {
    selectCategory(category) {
      this.setCategoryAsSelected( category );
    }
  }
});
