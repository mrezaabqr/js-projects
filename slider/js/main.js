(function ($) {
    $.fn.slSlider = function (userOptions) {
        var options = $.extend({
            slideTime: 7000,
            speed: 500,
            outAnimation: 'fade',
            inAnimation: 'fade',
            pauseOnHover: true,
            swipeSupport: true,
            displayOrder: 'random', //random
            showCounter: true,
            showCaptions: true,
            showNextPrev: true,
            showControls: true
        }, userOptions);

        //    Starting code Here :)

        function rand(start, end) {
            var rnd = start + Math.floor(Math.random() * (end - start));
            return rnd
        }

        var slider = this;
        var slides = slider.find('ul').children();
        var slideCount = slides.length;
        var i = 0; // Current slide index
        $(document).ready(function () {
            //    Add Slide Counter
            var counterTag = $('<div>').addClass("counter");
            if (options.showCounter) {
                slider.append(counterTag);
                counterTag.html(i + 1 + '  /  ' + slideCount)
            }
            var captionTag = $('<div>').addClass("sliderCaption");
            if (options.showCaptions) {
                slider.append(captionTag);
                if ($(slides[i]).is("[title]")) {
                    captionTag.html($(slides[i]).attr('title')).fadeIn(options.speed);
                }
            }

            if (options.showNextPrev) {
                var nextTag = $('<span>').addClass('next fa fa-arrow-circle-right');
                var prevTag = $('<span>').addClass('prev fa fa-arrow-circle-left');
                nextTag.css({top: Number($(slider.parent()).height()) / 2 - 20});
                prevTag.css({top: Number($(slider.parent()).height()) / 2 - 20});
                slider.append(prevTag, nextTag);
                nextTag.click(function () {
                    showSlide(i + 1);
                });
                prevTag.click(function () {
                    showSlide(i - 1);
                });
            }

            if (options.showControls) {
                var buttonRowTag = $('<div>').addClass('buttonsRow');
                for (var j = 0; j < slideCount; j++) {
                    buttonRowTag.append($('<span>').attr('data-sn', j).html(j + 1));
                    slider.append(buttonRowTag);
                }
                slider.find('div.buttonsRow span').click(function () {
                    var sn = Number($(this).attr("data-sn"));
                    if (sn != i) {
                        showSlide(sn)
                    }

                });
            }

            var iv = setInterval(autoSlide, options.slideTime);

            function autoSlide() {
                showSlide(i + 1);
            }

            // Swipe Support
            if (options.swipeSupport) {
                slider.on("dragstart", function (ev) {
                    ev.preventDefault();
                });
                slider.swiperight(function () {
                    showSlide(i + 1)
                });
                slider.swipeleft(function () {
                    showSlide(i - 1)
                });
            }


            if (options.pauseOnHover) {
                slider.hover(function () {
                    clearInterval(iv);
                }, function () {
                    var iv = setInterval(autoSlide, options.slideTime);
                })
            }

            function slideOut(anim) {
                $(slides[i]).fadeOut();
            }

            function slideIn(anim) {
                $(slides[i]).fadeIn();
            }

            function showSlide(s) {
                slideOut("fade");
                i = (s + slideCount) % slideCount;
                slideIn("fade");

                if (options.showCaptions) {
                    if ($(slides[i]).is("[title]")) {
                        captionTag.html($(slides[i]).attr('title')).fadeIn(options.speed);
                    }
                    else {
                        captionTag.html('').fadeOut(options.speed);
                    }
                }
                if (options.showCounter) {
                    counterTag.text(i + 1 + ' / ' + slideCount)
                }
                if (options.showControls) {
                    slider.find(".buttonsRow span").removeClass('curr');
                    $(slider.find(".buttonsRow span")[i]).addClass('curr');
                }
            }

        });

    }


}(jQuery));