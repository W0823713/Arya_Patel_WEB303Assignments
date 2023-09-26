// Step 2: Create a method for $.getJSON
function getTeamDataWithGetJSON() {
    $.getJSON('team.json', function (data) {
        // Step 2b: Loop through the data
        $.each(data, function (index, member) {
            // Step 2c: Insert name, position, and bio into the div#team
            var memberDiv = $('<div class="team-member">');
            var nameHeading = $('<h2>').text(member.name);
            var positionHeading = $('<h5>').text(member.position);
            var bioParagraph = $('<p>').text(member.bio);

            memberDiv.append(nameHeading, positionHeading, bioParagraph);
            $('#team').append(memberDiv);
        });
    });
}

// Step 3: Create a method for $.ajax
function getTeamDataWithAjax() {
    // Step 3a: Use $.ajax for the request
    $.ajax({
        type: 'GET',
        url: 'team.json',
        dataType: 'json',
        beforeSend: function () {
            // Step 3b: Display "Loading..." message
            $('#team').text('Loading...');
        },
        success: function (data) {
            // Step 3d: Display data after successful response
            $('#team').empty(); // Clear previous content
            $.each(data, function (index, member) {
                var memberDiv = $('<div class="team-member">');
                var nameHeading = $('<h2>').text(member.name);
                var positionHeading = $('<h5>').text(member.position);
                var bioParagraph = $('<p>').text(member.bio);

                memberDiv.append(nameHeading, positionHeading, bioParagraph);
                $('#team').append(memberDiv);
            });
        },
        error: function () {
            // Step 3c: Display error message on failure
            $('#team').text('Error: Content could not be retrieved.');
        },
    });
}

// Call one of the methods in a ready function to run the code
$(document).ready(function () {
    // Call either getTeamDataWithGetJSON() or getTeamDataWithAjax() here
});
