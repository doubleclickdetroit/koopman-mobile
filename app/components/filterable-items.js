import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [ 'portfolio-filter-wrapper' ],

  filterDidChange: Ember.observer('filter', function() {
    let filter = this.get( 'filter' );
    let className = `.${filter}`;

    this.$().show( 250 );
    this.$( '.portfolio-filter-item' ).not( className ).delay( 100 ).hide( 250 );
    setTimeout(() => {
        this.$( className ).show( 250 );
        this.$().show( 250 );
    }, 0);
  }),

  didInsertElement() {
    this.assignClassNames();
  },

  assignClassNames() {
    this.$().children().addClass( 'portfolio-filter-item' );
  }

});
