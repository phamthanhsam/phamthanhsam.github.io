$('.m1').click(function (e) { 
    e.preventDefault();
    $('body').animate({
        scrollTop: 0
    }, 1000)
});
$('.m2').click(function (e) { 
    e.preventDefault();
    $('body').animate({
        scrollTop: $('.nenkhoi2').offset().top - 72
    }, 1000)
});
$('.m3').click(function (e) { 
    e.preventDefault();
    $('body').animate({
        scrollTop: $('.khoi3').offset().top - 72
    }, 1000)
});
$(window).scroll(function () { 
    console.log(window.pageYOffset)
    if (window.pageYOffset >= $('.khoi6').offset().top - 72) {
        $('.nut').removeClass('active');
        $('.m3').addClass('active');
    } else if (window.pageYOffset >= $('.khoi-3').offset().top - 72) {
        $('.nut').removeClass('active');
        $('.m2').addClass('active');
    } else {
        $('.nut').removeClass('active');
    }
});
