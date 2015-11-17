import Ember from 'ember';

export default Ember.Mixin.create({

  initContent() {
    $(window).resize(() => this.create_paddings());
    this.$('#content').on( 'scroll', this.displayBackToTop );
  },

  displayBackToTop() {
    var total_scroll_height = $('#content')[0].scrollHeight;
    var inside_header = $('#content').scrollTop() <= 150;
    var passed_header = $('#content').scrollTop() >= 0;
    var footer_reached = $('#content').scrollTop() >= (total_scroll_height - ($(window).height() +100 ));
    var $badge = $('.back-to-top-badge');

    if (inside_header == true) {
        $badge.removeClass('back-to-top-badge-visible');
    }
    else if (passed_header == true)  {
        $badge.addClass('back-to-top-badge-visible');
    }

    if (footer_reached == true){
        $badge.removeClass('back-to-top-badge-visible');
    }
  }

});
