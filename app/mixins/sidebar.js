import Ember from 'ember';

export default Ember.Mixin.create({

  initSideBar() {
    let $body = $( 'body' );
    if( $body.hasClass('dual-sidebar') )  {  this.dual_sidebar(); }
    if( $body.hasClass('left-sidebar') )  {  this.left_sidebar(); }
    if( $body.hasClass('right-sidebar') ) { this.right_sidebar(); }
    if( $body.hasClass('no-sidebar') )    {    this.no_sidebar(); }
  },

  dual_sidebar() {
        var $div = $('<div />').appendTo('body');
        $div.attr('id', 'footer-fixed');
        $div.attr('class', 'not-active');
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'none',
            tapToClose: true,
            touchToDrag: true,
            maxPosition: 266,
            minPosition: -266
        });
        this.$().on('click', '.close-sidebar, .menu-item, .sessionButton', function(){snapper.close();});
        $('.close-sidebar').click(function(evt){evt.preventDefault();});
        $('.open-left-sidebar').click(function() {
            //$(this).toggleClass('remove-sidebar');
            if( snapper.state().state=="left" ){
                snapper.close();
            } else {
                snapper.open('left');
            }
            return false;
        });
        $('.open-right-sidebar').click(function() {
            //$(this).toggleClass('remove-sidebar');
            if( snapper.state().state=="right" ){
                snapper.close();
            } else {
                snapper.open('right');
            }
            return false;
        });
        snapper.on('open', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});

        this.snapper = snapper;
    },

    left_sidebar() {
        var $div = $('<div />').appendTo('body');
        $div.attr('id', 'footer-fixed');
        $div.attr('class', 'not-active');
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'right',
            tapToClose: true,
            touchToDrag: true,
            maxPosition: 266,
            minPosition: -266
        });
        this.$().on('click', '.close-sidebar, .menu-item, .sessionButton', function(){snapper.close();});
        $('.close-sidebar').click(function(evt){evt.preventDefault();});
        $('.open-left-sidebar').click(function() {
            //$(this).toggleClass('remove-sidebar');
            if( snapper.state().state=="left" ){
                snapper.close();
            } else {
                snapper.open('left');
            }
            return false;
        });
        snapper.on('open', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
    },

    right_sidebar() {
        var $div = $('<div />').appendTo('body');
        $div.attr('id', 'footer-fixed');
        $div.attr('class', 'not-active');
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'left',
            tapToClose: true,
            touchToDrag: true,
            maxPosition: 266,
            minPosition: -266
        });
        this.$().on('click', '.close-sidebar, .menu-item, .sessionButton', function(){snapper.close();});
        $('.close-sidebar').click(function(evt){evt.preventDefault();});
        $('.open-right-sidebar').click(function() {
            //$(this).toggleClass('remove-sidebar');
            if( snapper.state().state=="right" ){
                snapper.close();
            } else {
                snapper.open('right');
            }
            return false;
        });
        snapper.on('open', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
    },

    no_sidebar() {
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'none',
            tapToClose: false,
            touchToDrag: false
        });
    }

});
