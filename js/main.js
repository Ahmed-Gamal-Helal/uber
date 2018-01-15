$(function(){
    'use strict';
    // $("nav-tabs ul li a, ul.navbar-nav li").click(function (){
        // $(this).addClass('active').siblings().removeClass('active');
        // $(this).attr('color', '#F00 !important');
    // });

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

// Google MAps
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(30.0444,31.2357),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

// Animation
