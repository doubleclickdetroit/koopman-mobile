import Ember from 'ember';

export default Ember.Controller.extend({
  currentPage: 0,
  listOfProjects: Ember.computed.alias( 'model' ),

  sortProjectsProperties: [ 'date:desc' ],
  sortedProjects: Ember.computed.sort( 'listOfProjects', 'sortProjectsProperties' ),

  listOfCategories: Ember.computed.alias( 'model.categories' ),

  sortCategoriesProperties: [ 'name:asc' ],
  sortedCategories: Ember.computed.sort( 'listOfCategories', 'sortCategoriesProperties' ),

  selectedCategory: Ember.computed('model.categories.@each.isSelected', function() {
    let categories = this.get( 'model.categories' );
    return categories.findBy( 'isSelected', true );
  }),

  sortedCategoriesDidChange: Ember.observer('model.categories.[]', function() {
    // ensure category isn't yet selected, if it is skip assigning one
    let categories = this.get( 'model.categories' );
    if ( categories && categories.findBy('isSelected', true) ) { return; }

    let defaultCategory = this.get( 'model.categories.firstObject' );
    if ( defaultCategory ) {
      this.setCategoryAsSelected( defaultCategory );
    }
  }),

  setCategoryAsSelected(category) {
    let categoryId = category.get( 'id' );
    this.get('model.categories').rejectBy( 'id', categoryId ).setEach( 'isSelected', false );
    category.set( 'isSelected', true );
  },

  actions: {

    selectCategory(category) {
      this.setCategoryAsSelected( category );
    }

  }
});
