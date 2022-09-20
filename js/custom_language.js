$(function () {
    ///// Language Switching (2 languages: English and Portuguese). /////
  
    // Initially disable language switching button.
    $('.change-language').css({'pointer-events':'none',
     'cursor':'default'}).attr('disabled','disabled');
  
    function langButtonListen() {
      $('.change-language').click(function (event) {
        event.preventDefault();
        
        $('[lang="pt"]').toggle();
        $('[lang="en"]').toggle();
        // Switch cookie stored language.
        if ($.cookie('lang') === 'en') {
          $.cookie('lang', 'pt', { expires: 7 });
        } else {
          $.cookie('lang', 'en', { expires: 7 });
        }
      });
      // Enable lang switching button.
      $('.change-language').css({'pointer-events':'auto',
       'cursor':'pointer'}).removeAttr('disabled');
    }
  
    $('[lang="pt"]').hide();
    // Check if language cookie already exists.
    if ($.cookie('lang')) {
      var lang = $.cookie('lang');
      if (lang !== 'en') {
        $('[lang="en"]').hide();
        $('[lang="pt"]').show();
        langButtonListen();
      }
    } else {
      // no cookie set, so detect language based on location.
      if ("geolocation" in navigator) {
        // geolocation is available
        navigator.geolocation.getCurrentPosition(function (position) {
          // accepted geolocation so figure out which country
          var lat = position.coords.latitude,
              lng = position.coords.longitude;
          $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=true', null, function (response) {
            
            if (response.results.length) {
                var country = response.results[response.results.length-1].formatted_address;
                if (country ===  'Brazil' || country === 'Portugal') {
                  $('[lang="en"]').hide();
                  $('[lang="pt"]').show();
                  $.cookie('lang', 'pt', { expires: 7 });
                  langButtonListen();
                } else {
                    $.cookie('lang', 'en', { expires: 7 });
                    langButtonListen();
                }
            } else {
                $.cookie('lang', 'en', { expires: 7 });
                langButtonListen();
            }
          }).fail(function (err) {
            console.log('error: '+err);
            $.cookie('lang', 'en', { expires: 7 });
            langButtonListen();
          });
        },
        function (error) {
          if (error.code == error.PERMISSION_DENIED) {
            // denied geolocation
            $.cookie('lang', 'en', { expires: 7 });
            langButtonListen();
          } else {
            console.log('Unknown error. Defaulting to English!');
            $.cookie('lang', 'en', { expires: 7 });
            langButtonListen();
          }
        });
      } else {
        // geolocation IS NOT available
        $.cookie('lang', 'en', { expires: 7 });
        langButtonListen();
      }
    }
});