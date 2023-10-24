$(document).ready(function () {
    // Accordion
    $('.accordion h3').click(function () {
        $(this).next('div').slideToggle();
        $(this).parent().siblings().find('div').slideUp();
    });

    // Tabs
    $('.tabs ul li a').click(function () {
        var tabID = $(this).attr('href');
        $('.tabs div').hide();
        $(tabID).show();
    });
});
