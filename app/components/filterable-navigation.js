import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [ 'portfolio-filter-categories' ],

  didInsertElement() {
    this.assignClassNames();
    this.assignListeners();
  },

  assignClassNames() {
    let width = $( window ).outerWidth();
    this.$( '.portfolio-filter-categories-navigation' )
      .css( 'width', width )
      .children( ':not(:input)' ).addClass( 'filter-category' );
  },

  assignListeners() {
    this.$().on( 'click', '.filter-category', (e) => this.handleSelectedCategory(e) );
  },

  handleSelectedCategory(evt) {
    let $category  = this.$( evt.target );
    let $scroll    = $category.parent();

    let maxWidth = $( window ).outerWidth();
    let offset   = Math.floor( $category.offset().left );
    let width    = $category.outerWidth();
    let startPos = 0; $category.prevAll().each( (n,e) => startPos += $(e).outerWidth() );
    let endPos   = offset + Math.ceil( $category.outerWidth() );

    // move left
    if ( maxWidth < endPos ) {
      let pos = ( startPos + width ) - maxWidth;
      $scroll.animate({ scrollLeft: pos });
    }

    // move right
    else if ( 0 > offset ) {
      let pos = startPos;
      $scroll.animate({ scrollLeft: pos });
    }
  }

});
