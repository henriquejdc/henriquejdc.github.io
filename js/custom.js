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
$('#form-email').on('submit', function (e) {
  e.preventDefault()
  const button = $("#send-email-button")
  let old_text_button = button.val()
  button.val('Sending your email...')
  button.prop("disabled", true);
  button.css('background-color', 'grey')
  Email.send({
    SecureToken: "39a25dfe-87f6-421d-b378-5cdff3686249",
    To: 'riquejdc@gmail.com',
    From: 'riquejdc@gmail.com',
    Subject: `${this.name.value} deseja conversar com você.`,
    Body: `${this.message.value} \n email: ${this.email.value}`,
  })
    .then(response => {
      console.log(response)
      $('#form-email').each(function () {
        this.reset();
      });
      Swal.fire({
        icon: 'success',
        title: 'Email successfully sent.',
        text: "I'll answer as soon as possible",
      })
      button.val(old_text_button)
      button.prop("disabled", false);
      button.css('background-color', '#258322')
    })
})

$('#hamburger').on('click', function() {
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

$('#hamburger2').on('click', function() {
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