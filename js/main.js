$(function(){
    'use strict';
    $("nav-tabs ul li a, ul.navbar-nav li").click(function (){
        $(this).addClass('active').siblings().removeClass('active');
        // $(this).attr('color', '#F00 !important');
    });
    // $(".owl-carousel").owlCarousel();
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
      html:true
    });   
        $('[rel="popover"]').popover({
        container: 'body',
        html: true,
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });
});

