(function ($) {
    $.fn.AccorMenu = function () {
        $('.accTitle').on('click', function () {
            $(this).parent().parent().find(".accContent").slideUp();
            if ($(this).next('.accContent').css('Display') == 'none') {
                $(this).next('.accContent').slideDown();
            }
        })
    };
}(jQuery));