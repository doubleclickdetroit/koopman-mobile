import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: [ 'date:desc' ],
  sortedProjects: Ember.computed.sort( 'listOfProjects', 'sortProperties' ),

  listOfCategories  : Ember.computed.alias( 'categories' ),
  selectedCategoryId: Ember.computed.oneWay( 'categories.firstObject.id' ),

  selectedCategoryObject: function() {
    var selectedId = this.get( 'selectedCategoryId' ),
        categories = this.get( 'listOfCategories.content' );

    return _.findWhere( categories, {id: selectedId} );
  }.property( 'listOfCategories', 'selectedCategoryId' ),

  listOfProjects: Ember.computed.alias( 'selectedCategoryObject.projects' )
});
