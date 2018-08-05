(function ($) {
    $.fn.slTooltip = function (userOptions) {
        var options = $.extend({
            width: 200,
        }, userOptions);
        this.each(function (index, value) {
            var elm = $(this);
            if ($(this).is('[data-ttw]')) {
                var ttWidth = $(this).attr('data-ttw');
            }
            else {
                var ttWidth = options.width;
            }
            var ttBox = $('<div>').attr('class', 'tooltipBox').css({width: ttWidth + 'px'});
            elm.hover(function () {
                if ($(this).is('[title]')) {
                    ttBox.html($(this).attr('title'));
                    $(document.body).append(ttBox);
                    var elmOffset = $(this).offset();
                    ttBox.css({
                        bottom: $(window).height() - elmOffset.top + 10,
                        left: elmOffset.left - ttWidth / 2,
                    });
                    ttBox.fadeIn();
                    $(this).data("titleData", $(this).attr('title'));
                    $(this).removeAttr('title');
                }
            }, function () {
                $(this).attr('title', $(this).data("titleData"));
                ttBox.fadeOut(function () {
                    $(this).remove()
                });
            });
        });
    }
}(jQuery));

