(function () {
    $(document).ready(function () {
        $('.nav-link-custom').on('click', function () {
            var arrow = $('.traingule');
            $(this).parents().eq(1).find('.traingule').remove();
            console.log();
            arrow.css({borderBottomColor: $(this).css('color')});
            $(this).parents().eq(0).append(arrow);


        });
    });

}());