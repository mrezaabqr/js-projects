(function ($) {
    $.fn.addCloseBtn = function () {
        this.each(function (index, value) {
            var btn = $('<span>');
            btn.attr('class', 'slCloseBtn');
            btn.click(function () {
                btn.parent().hide()
            })
            $(this).css({position: 'relative'});
            console.log(btn);
            $(this).append(btn);
        })

    }
}(jQuery));