$(function () {
    ///// Language Switching (2 languages: English and Portuguese). /////

    // Initially disable language switching button.
    $('.change-language').css({
        'pointer-events': 'none',
        'cursor': 'default'
    }).attr('disabled', 'disabled');

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
        $('.change-language').css({
            'pointer-events': 'auto',
            'cursor': 'pointer'
        }).removeAttr('disabled');
    }

    // Check if language cookie already exists.
    if ($.cookie('lang')) {
        var lang = $.cookie('lang');
        if (lang === 'en') {
            $('[lang="pt"]').hide();
            langButtonListen();
        } else {
            $('[lang="en"]').hide();
            langButtonListen();
        }
    } else {
        var url_ = new URL(location.href);
        var get_lang = url_.searchParams.get("lang");
        if (get_lang == "pt") {
            $('[lang="en"]').hide();
            $.cookie('lang', 'pt', { expires: 7 });
            langButtonListen();
        } else {
            $('[lang="pt"]').hide();
            $.cookie('lang', 'en', { expires: 7 });
            langButtonListen();
        }
    }


    // Função para aplicar o modo de cor    
    function setColorMode(mode) {
        if (mode === 'dark') {
            $('body').addClass('dark-mode');
            $('.color-mode-icon').addClass('active');
        } else {
            $('body').removeClass('dark-mode');
            $('.color-mode-icon').removeClass('active');
        }
        // Salvar a preferência no cookie
        $.cookie('color_mode', mode, { expires: 7 });
    }

    // SET COLOR MODE BASE
    const savedMode = $.cookie('color_mode') || 'dark'; // Default é "dark"
    setColorMode(savedMode);

    // COLOR MODE
    $('.color-mode').click(function () {
        const newMode = $('body').hasClass('dark-mode') ? 'light' : 'dark';
        setColorMode(newMode);
    })
});