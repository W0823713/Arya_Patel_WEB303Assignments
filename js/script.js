function fetchTeamDataJSON() {
    $.getJSON('team.json', function(data) {
        $.each(data, function(index, member) {
            var memberHTML = '<div class="team-member">' +
                '<h2>' + member.name + '</h2>' +
                '<h5>' + member.position + '</h5>' +
                '<p>' + member.bio + '</p>' +
                '</div>';
            $('#team').append(memberHTML);
        });
    });
}

function fetchTeamDataAjax() {
    $('#team').html('Loading...');
    $.ajax({
        type: 'GET',
        url: 'team.json',
        dataType: 'json',
        success: function(data) {
            $('#team').html('');
            $.each(data, function(index, member) {
                var memberHTML = '<div class="team-member">' +
                    '<h2>' + member.name + '</h2>' +
                    '<h5>' + member.position + '</h5>' +
                    '<p>' + member.bio + '</p>' +
                    '</div>';
                $('#team').append(memberHTML);
            });
        },
        error: function() {
            $('#team').html('Error: Content could not be retrieved.');
        }
    });
}

$(document).ready(function() {
    setTimeout(fetchTeamDataAjax, 3000);
});
