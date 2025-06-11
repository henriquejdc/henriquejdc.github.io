(function ($) {

    "use strict";

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true
    });

    // SMOOTHSCROLL
    $(function () {
        $('.nav-link, .custom-btn-link').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

$('#hamburger').on('click', function () {
    $('#menu').slideToggle('slow');
    var subtitle_show = document.getElementById("subtitle_show");
    var subtitle_hide = document.getElementById("subtitle_hide");

    if (subtitle_show.style.display === "none") {
        subtitle_show.style.display = "block";
        subtitle_hide.style.display = "none";
    } else {
        subtitle_show.style.display = "none";
        subtitle_hide.style.display = "block";
    }
});

$('#hamburger2').on('click', function () {
    $('#menu-two').slideToggle('slow');
    var subtitle_show_two = document.getElementById("subtitle_show_two");
    var subtitle_hide_two = document.getElementById("subtitle_hide_two");

    if (subtitle_show_two.style.display === "none") {
        subtitle_show_two.style.display = "block";
        subtitle_hide_two.style.display = "none";
    } else {
        subtitle_show_two.style.display = "none";
        subtitle_hide_two.style.display = "block";
    }
});

function saudacaoComFuso(is_pt) {
    const fuso = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const agora = new Date();
    const hora = agora.getHours();

    let saudacao;
    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia";
        greeting = "Good morning";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde";
        greeting = "Good afternoon";
    } else {
        saudacao = "Boa noite";
        greeting = "Goodnight";
    }
    if (is_pt) {
        return `${saudacao}!`;
    } else {
        return `${greeting}!`;
    }
}


$(function () {
    $('#saudacao').text(saudacaoComFuso(true));
    $('#greeting').text(saudacaoComFuso(false));
});