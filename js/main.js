// WEB303 Assignment 2


$(document).ready(function () {
    $('#prospect').on('click', function () {
        $.ajax({
            url: 'prospect.html',
            type: 'GET',
            dataType: 'html',
            success: function (response) {
                var $contentVal = $('#content');
                $contentVal.hide().html(response).fadeIn(1500).css({
                    'border': '1.5px solid blue'
                });
            },
            error: function () {
                console.log('Something went wrong!');
            }
        });
    });

    $('#convert').on('click', function () {
        $.ajax({
            url: 'convert.html',
            type: 'GET',
            dataType: 'html',
            success: function (response) {
                var $contentVal = $('#content');
                $contentVal.hide().html(response).fadeIn(1500).css({
                    'border': '1.5px solid blue'
                });
            },
            error: function () {
                console.log('Something went wrong!');
            }
        });
    });

    $('#retain').on('click', function () {
        $.ajax({
            url: 'retain.html',
            type: 'GET',
            dataType: 'html',
            success: function (response) {
                var $contentVal = $('#content');
                $contentVal.hide().html(response).fadeIn(1500).css({
                    'border': '1.5px solid blue'
                });
            },
            error: function () {
                console.log('Something went wrong!');
            }
        });
    });
});
