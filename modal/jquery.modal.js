(function ($) {
    $.fn.slModal = function (userOptions) {
        var options = $.extend({
            wrapperBgColor: "#000",
            wrapperOpacity: 0.8,
            width: 500,
            entrance: 'top',
            speed: 300,
            top: 100,
            showEvent: 'mouseover',
            showCloseButton: false,
            CloseButtonText: 'X',
            onStart: function () {
            },
            onFinish: function () {
            }
        }, userOptions);
        var enterModal = function (modal, enterMode) {
            var topPosition = options.top + 'px';
            var wh = $(window).height();
            var ww = $(window).width();
            var leftPosition = ((window.innerWidth / 2) - (modal.width() / 2)) + 'px';
            switch (enterMode) {
                case 'fade':
                    modal.css({
                        top: topPosition,
                        left: leftPosition
                    });
                    modal.fadeIn(options.speed);
                    break;
                case 'top':
                    modal.css({
                        top: -1 * $(window).height(),
                        left: leftPosition,
                        display: 'block'
                    });
                    modal.animate({top: topPosition, left: leftPosition}, options.speed);
                    break;
                case 'bottom':
                    modal.css({
                        top: 2 * $(window).height(),
                        left: leftPosition,
                        display: 'block'
                    });
                    modal.animate({top: topPosition, left: leftPosition}, options.speed);
                    break;
            }
        };
        $(document).ready(function () {
            var modalButtons = $('button[data-modal], a[data-modal]');
            var wrapper = $('<div>').addClass('wrapper').css({
                backgroundColor: options.wrapperBgColor,
                opacity: options.wrapperOpacity,
            });
            modalButtons.each(function () {
                var mBtn = $(this);
                var mBox = $('#' + mBtn.attr('data-modal')).css({
                    width: options.width + 'px'
                });
                mBtn.on(options.showEvent, function (ev) {
                    ev.preventDefault();
                    mBox.before(wrapper);


                    if (typeof options.onStart() === 'function') {
                        options.onStart();
                    }
                    wrapper.fadeIn(options.speed);
                    var enterMode = mBox.is("[data-entrance]") ? mBox.attr("data-entrance") : options.entrance
                    enterModal(mBox, enterMode);

                });
                wrapper.click(function () {
                    wrapper.fadeOut(options.speed);
                    mBox.fadeOut(options.speed, function () {
                        if (typeof options.ononFinish === 'function') {
                            options.onFinish();
                        }
                    });
                });
            });
        });
    };
}(jQuery));