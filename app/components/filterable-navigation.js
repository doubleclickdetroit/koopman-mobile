import Ember from 'ember';

var throttleAssignClassNames;

export default Ember.Component.extend({

  classNames: [ 'portfolio-filter-categories' ],

  didInsertElement() {
    this.assignClassNames();
    this.assignListeners();

    throttleAssignClassNames = _.throttle(() => {
      this.assignClassNames();
    }, 100, { leading: false });
  },

  itemsDidChange: function() {
    throttleAssignClassNames();
  }.observes( 'items.[]' ),

  assignClassNames() {
    this.$( '.portfolio-filter-categories-navigation' ).css( 'width', 'auto' );

    let width = $( window ).outerWidth();
    let $category = this.$( '.filter-category:last' );
    let position  = this.getCategoryPosition( $category );
    let isInline  = width >= position.endPos;

    this.set( 'isInline', isInline );

    this.$( '.portfolio-filter-categories-navigation' )
      .css( 'width', width )
      .children( ':not(:input)' ).addClass( 'filter-category' );
  },

  assignListeners() {
    this.$().on( 'click', '.filter-category', e => this.handleSelectedCategory(e) );
  },

  getCategoryPosition($category) {
    let offset   = Math.floor( $category.offset().left );
    let width    = $category.outerWidth();
    let startPos = 0; $category.prevAll().each( (n,e) => startPos += $(e).outerWidth() );
    let endPos   = offset + Math.ceil( $category.outerWidth() );

    return {
      offset  : offset,
      width   : width,
      startPos: startPos,
      endPos  : endPos
    }
  },

  handleSelectedCategory(evt) {
    let $category  = this.$( evt.target );
    let $scroll    = $category.parent();

    let maxWidth = $( window ).outerWidth();
    let position = this.getCategoryPosition( $category );

    // move left
    if ( maxWidth < position.endPos ) {
      let pos = ( position.startPos + position.width ) - maxWidth;
      $scroll.animate({ scrollLeft: pos });
    }

    // move right
    else if ( 0 > position.offset ) {
      let pos = position.startPos;
      $scroll.animate({ scrollLeft: pos });
    }
  }

});
