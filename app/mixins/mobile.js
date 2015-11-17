import Ember from 'ember';

export default Ember.Mixin.create({

  initMobile() {
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if(isMobile.any()) {
        //Settings for all mobiles
        $('head').append('<link />');
    }

    if( !isMobile.any() ){
        $('.show-blackberry, .show-ios, .show-windows, .show-android').hide(0);
        $('show-no-detection').show(0);

        $('#content').bind('mousewheel', function(event) {
          event.preventDefault();
          var scrollTop = this.scrollTop;
          this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -2));
          //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
        });
        $("#content").css("overflow-y","hidden");
    }

    if(isMobile.Android()) {
        $('.show-android').show(0);
        $('.show-blackberry, .show-ios, .show-windows').hide(0);
    }

    if(isMobile.BlackBerry()) {
        $('.show-blackberry').show(0);
        $('.show-android, .show-ios, .show-windows').hide(0);
    }

    if(isMobile.iOS()) {
        $('.show-ios').show(0);
        $('.show-blackberry, .show-android, .show-windows').hide(0);
    }

    if(isMobile.Windows()) {
        $('.show-windows').show(0);
        $('.show-blackberry, .show-ios, .show-android').hide(0);
    }

    this.$().on('click', '.back-to-top-badge, .back-to-top', function() {
      $('#content').animate({
        scrollTop:0
      }, 500, 'easeInOutQuad');

      return false;
    });
  }

});
