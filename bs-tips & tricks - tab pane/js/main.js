(function () {
    $(document).ready(function () {
        var nav = $('.nav-in-768');
        $('#sidebar').click(function () {
            nav.toggleClass('open');
        });
        nav.click(function () {
            nav.addClass('open');
        });
        $('#area').click(function () {
            if (nav.hasClass('open')) {
                nav.removeClass('open')
            }
        })
    });
}());