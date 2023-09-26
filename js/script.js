$(document).ready(function () {
    // Step 2: Create a method for $.getJSON
    function getTeamDataWithGetJSON() {
        $.getJSON('team.json', function (dataValue) {
            $.each(dataValue.members, function (key, val) {
                $('#team').append(`<div>
                    <h2>${val.name}</h2>
                    <h5>${val.position}</h5>
                    <p>${val.bio}</p>
                </div>`);
            });
        }).fail(function () {
            $("#team").text("Can't display the data. There is something wrong!!");
        });
    }

    // Step 3: Create a method for $.ajax
    function getTeamDataWithAjax() {
        $.ajax({
            type: 'GET',
            url: 'team.json',
            dataType: 'json',
            beforeSend: function () {
                $('#team').text('Loading...');
            },
            success: function (dataValue) {
                $('#team').empty(); // Clear previous content
                $.each(dataValue.members, function (key, val) {
                    $('#team').append(`<div>
                        <h2>${val.name}</h2>
                        <h5>${val.position}</h5>
                        <p>${val.bio}</p>
                    </div>`);
                });
            },
            error: function () {
                $('#team').text('Error: Content could not be retrieved.');
            },
        });
    }

    // Call one of the methods to execute the code
    // You can choose either getTeamDataWithGetJSON() or getTeamDataWithAjax()
    getTeamDataWithGetJSON(); // Or getTeamDataWithAjax() here
});
