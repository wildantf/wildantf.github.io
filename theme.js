if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}


$(document).ready(function () {
    function light(slctr) {
        slctr.text('☀️');
        localStorage.theme = 'light';
        $('html').addClass('light').removeClass('dark');
        $('body').css({
            'backgroundImage': "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80')",
        })
    };
    function dark(slctr) {
        slctr.text('🌙');
        $('html').addClass('dark').removeClass('light');
        localStorage.theme = 'dark';
        $('body').css({
            'backgroundImage': "url('https://images.unsplash.com/photo-1586165877141-3dbcfc059283?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80')",
        });
    };


    if (localStorage.theme == 'light') {
        light($('#theme-toggle'));
    } else {
        dark($('#theme-toggle'));
    };

    $('#theme-toggle').on('click', function () {
        if ($(this).text() == '🌙') {
            light($(this));
        } else if ($(this).text() == '☀️') {
            dark($(this));
        }
    });

});

