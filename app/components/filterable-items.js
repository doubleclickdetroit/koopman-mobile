import Ember from 'ember';

var throttleAssignClassNames;

export default Ember.Component.extend({

  classNames: [ 'portfolio-filter-wrapper' ],

  filterDidChange: Ember.observer('filter', function() {
    this.filterContent();
  }),

  filterContent(duration=250) {
    let filter = this.get( 'filter' );
    let className = `.${filter}`;
    let delayDuration = duration === 0 ? duration : 100;

    this.$().show( duration );
    this.$( '.portfolio-filter-item' ).not( className ).delay( delayDuration ).hide( duration );
    setTimeout(() => {
        this.$( className ).show( duration );
        this.$().show( duration );
    }, 0);
  },

  didInsertElement() {
    this.assignClassNames();

    throttleAssignClassNames = _.throttle(() => {
      this.assignClassNames();
      this.filterContent(0);
    }, 100, { leading: false });
  },

  itemsDidChange: Ember.observer('items.[]', function() {
    throttleAssignClassNames();
  }),

  assignClassNames() {
    this.$().children().addClass( 'portfolio-filter-item' );
  }

});
