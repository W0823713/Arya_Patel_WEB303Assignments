function getTeamDataWithGetJSON() {
    $.getJSON('team.json', function(data) {
        $.each(data, function(index, member) {
            var memberDiv = $('<div class="team-member">');
            var nameHeading = $('<h2>').text(member.name);
            var positionHeading = $('<h5>').text(member.position);
            var bioParagraph = $('<p>').text(member.bio);

            memberDiv.append(nameHeading, positionHeading, bioParagraph);
            $('#team').append(memberDiv);
        });
    });
}

function getTeamDataWithAjax() {
    $.ajax({
        type: 'GET',
        url: 'team.json',
        dataType: 'json',
        beforeSend: function() {
            $('#team').text('Loading...');
        },
        success: function(data) {
            $('#team').empty();
            $.each(data, function(index, member) {
                var memberDiv = $('<div class="team-member">');
                var nameHeading = $('<h2>').text(member.name);
                var positionHeading = $('<h5>').text(member.position);
                var bioParagraph = $('<p>').text(member.bio);

                memberDiv.append(nameHeading, positionHeading, bioParagraph);
                $('#team').append(memberDiv);
            });
        },
        error: function() {
            $('#team').text('Error: Content could not be retrieved.');
        },
    });
}

$(document).ready(function() {
    getTeamDataWithAjax();
});
