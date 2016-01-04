import Ember from 'ember';

export default Ember.Mixin.create({

  initContent() {
    this.$('#content').on( 'scroll', this.displayBackToTop );
  },

  displayBackToTop() {
    var $badge = $('.back-to-top-badge');
    $badge.data( 'at-bottom', false );

    var total_scroll_height = $('#content')[0].scrollHeight;
    var inside_header = $('#content').scrollTop() <= 150;
    var passed_header = $('#content').scrollTop() >= 0;
    var footer_reached = $('#content').scrollTop() >= (total_scroll_height - ($(window).height() +100 ));

    if (inside_header == true) {
        $badge.removeClass('back-to-top-badge-visible');
    }
    else if (passed_header == true)  {
        $badge.addClass('back-to-top-badge-visible');
    }

    if (footer_reached == true){
      $badge.data( 'at-bottom', true );

      setTimeout(function() {
        if ( $badge.data('at-bottom') ) {
          $badge.removeClass('back-to-top-badge-visible');
          $badge.data( 'at-bottom', false );
        }
      }, 1000);
    }
  },

  align_cover_elements() {
    let screen_offset = this.$( '.cover-screen' ).offset().top;
    let cover_width  = $(window).width();
    let cover_height = $(window).height() - screen_offset;
    let cover_vertical   = -( this.$('.cover-center').height() ) / 2;
    let cover_horizontal = -( this.$('.cover-center').width() ) / 2;

    this.$('.cover-screen').css({
      width:  cover_width,
      height: cover_height
    });

    this.$('.cover-screen .overlay').css({
      width:  cover_width,
      height: cover_height
    });

    this.$('.cover-center').css({
      marginTop:  cover_vertical + 30,
      marginLeft: cover_horizontal
    });

    this.$('.cover-left').css('margin-top', cover_vertical);
    this.$('.cover-right').css('margin-top', cover_vertical);

    this.$('.homepage-cover, .homepage-cover-slider').css({
      width:  cover_width,
      height: cover_height
    });

    this.$( '.responsive-image' ).load( () => this.align_cover_elements() );
  }

});
