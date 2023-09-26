// Method for $.getJSON request
function fetchTeamDataJSON() {
    $.getJSON('team.json', function(data) {
        // Loop through the data array
        $.each(data, function(index, member) {
            // Create HTML elements and append data
            var memberHTML = '<div class="team-member">' +
                '<h2>' + member.name + '</h2>' +
                '<h5>' + member.position + '</h5>' +
                '<p>' + member.bio + '</p>' +
                '</div>';

            $('#team').append(memberHTML);
        });
    });
}

// Method for $.ajax request
function fetchTeamDataAjax() {
    // Display loading message
    $('#team').html('Loading...');

    $.ajax({
        type: 'GET',
        url: 'team.json',
        dataType: 'json',
        success: function(data) {
            // Remove loading message
            $('#team').html('');

            // Loop through the data array
            $.each(data, function(index, member) {
                // Create HTML elements and append data
                var memberHTML = '<div class="team-member">' +
                    '<h2>' + member.name + '</h2>' +
                    '<h5>' + member.position + '</h5>' +
                    '<p>' + member.bio + '</p>' +
                    '</div>';

                $('#team').append(memberHTML);
            });
        },
        error: function() {
            // Display error message if the request fails
            $('#team').html('Error: Content could not be retrieved.');
        }
    });
}

// Call one of the methods in a jQuery ready function
$(document).ready(function() {
    // Hello Sir, Check my both method working in the below code 
    // Thank you 
    // Call the fetchTeamDataAjax or fetchTeamDataJSON  method to fetch and display data with a loading delay
    setTimeout(fetchTeamDataAjax, 3000); // 3 seconds delay
});
