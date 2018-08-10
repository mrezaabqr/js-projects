$(document).ready(function () {

    (function startQuiz() {

        this.loadQuiz = function () {

            $('.panel_one h1').show("drop", 500, function () {
                $('.start_quiz').addClass('started', 500);
            });
            $('.start_quiz').on('click', function () {
                showPanel(1);
                listenNext();
            });
        };

        this.showPanel = function (position) {
            var current = $('div[data-panel=' + (position - 1) + ']');


            current.find('.wrapper').animate({left: '-=100px', opacity: 0}, 500, function () {
                current.addClass('hidden');

                //Show Element
                var next = $('div[data-panel=' + position + ']');
                next.removeClass('hidden');
                showNext(next);
            });
        };

        this.showNext = function (next) {
            var wrapper = next.find('.wrapper');
            wrapper.fadeIn(500, function () {
                wrapper.find('.options').children().each(function () {
                    manageOptions(next)
                })

            });

        };

        this.manageOptions = function (next) {
            var options = next.find('.options');
            var childrens = options.find('div');
            var counter = 0;
            childrens.each(function (i, el) {
                $(el).delay(counter).fadeIn(1000);
                counter += 500;
            });
            childrens.on('click', function () {
                $(this).parent().find('div').removeClass('active');
                next.addClass('valid');
                $(this).addClass('active');

            });
        };


        this.listenNext = function () {
            $('.next_question').on('click', function () {
                var next = $(this).data('next');
                if (validateSelection($(this))) {
                    showPanel(next);
                    showProgressAndStore(next);
                } else {
                    $('.error').animate({bottom: '15px', display: 'block'}, 500, function () {
                        $(this).delay(2000).animate({bottom: '-30px'}, 500);
                    })
                }

            });
        };

        this.validateSelection = function ($this) {
            var parent = $this.parents('.item');
            if (parent.hasClass('valid')) {
                return true
            } else {
                return false
            }
        };

        this.showProgressAndStore = function (panel) {
            $('.progress .bar').animate({width: "+=25%"}, 500);
            var options = $('div[data-panel=' + (panel - 1) + ']').find('.options');
            options.find('div').each(function (i, el) {
                if ($(this).hasClass('active')) {
                    console.log($(this).text())
                }
            });
        };

        loadQuiz();

    })();

});