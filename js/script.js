$(document).ready(function () {
    $.ajax({
        url: 'characters.json', // Update with the path to your JSON file
        dataType: 'json',
        success: function (data) {
            const characters = data.characters;
            const characterTable = $('#characterTable tbody');

            // Populate the table with character data
            characters.forEach(function (character) {
                const row = $('<tr>');
                for (const column in character) {
                    row.append($('<td>').text(character[column]));
                }
                characterTable.append(row);
            });

            // Sorting functionality
            let sortedBy = null;
            let ascending = true;

            $('th a').click(function () {
                const column = $(this).data('column');

                if (sortedBy === column) {
                    // Clicked the same column again, reverse the sorting order
                    ascending = !ascending;
                } else {
                    // Clicked a new column, reset sorting order to ascending
                    ascending = true;
                }

                // Sort the table and update the sortedBy variable
                sortTable(column, ascending);
                sortedBy = column;
            });

            function sortTable(column, ascending) {
                const rows = characterTable.find('tr').get();
                rows.sort(function (a, b) {
                    const keyA = $(a).find('td').eq(column).text().toUpperCase();
                    const keyB = $(b).find('td').eq(column).text().toUpperCase();
                    if (keyA < keyB) return ascending ? -1 : 1;
                    if (keyA > keyB) return ascending ? 1 : -1;
                    return 0;
                });

                characterTable.empty();
                $.each(rows, function (index, row) {
                    characterTable.append(row);
                });
            }
        }
    });
});
