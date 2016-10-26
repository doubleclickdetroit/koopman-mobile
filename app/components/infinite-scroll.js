import Ember from 'ember';

export default Ember.Component.extend({
  page: 0,
  isLoading: false,

  fetchNextPage() {
    const modelName = this.get( 'modelName' );
    let page = this.incrementProperty( 'page' );

    this.set( 'isLoading', true );

    return this.get( 'store' ).find( modelName, { page } )
      .then(data => {
        this.set( 'isLoading', false );

        if ( !data.content.length ) {
          this.get( '$container' ).trigger( 'detatchScroll' );
        }
      });
  },

  didInsertElement() {
    const $container = $( '#content, #content .has-scroll' ).last();
    this.set( '$container', $container );

    this.handleOnScroll(); // fire scroll for initial load
    this.registerScrollHandler();
  },

  registerScrollHandler() {
    const debounceScroll = _.debounce( () => { this.handleOnScroll(); }, 300 );
    const $container = this.get( '$container' );

    $container.on( 'scroll', debounceScroll );
    $container.on('detatchScroll', () => {
      $container.off( 'scroll', debounceScroll );
    });
  },

  handleOnScroll() {
    const isLoading = this.get( 'isLoading' );
    const el = this.$().get(0);

    if ( !isLoading && inViewport() ) {
      this.fetchNextPage();
    }

    function inViewport() {
      var elementBounds = el.getBoundingClientRect();

      return (
           elementBounds.top  >= 0
        && elementBounds.left >= 0
        && elementBounds.bottom <= document.documentElement.clientHeight
        && elementBounds.right  <= document.documentElement.clientWidth
      );
    }
  }

});
