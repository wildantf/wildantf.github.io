

$(document).ready(function () {
    if(localStorage.theme == 'light'){
        $('#theme-toggle').text('☀️');
        $('body').css('backgroundImage', "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80')")
    }else{
        $('#theme-toggle').text('🌙');
        $('body').css('backgroundImage', "url('https://source.unsplash.com/1L71sPT5XKc')")
    }

    $('#theme-toggle').on('click', function () {
        if ($(this).text() == '🌙') {
            $(this).text('☀️');
            localStorage.theme = 'light';
        } else if($(this).text() == '☀️') {
            $(this).text('🌙');
            localStorage.theme = 'dark';
        }

    });
});

