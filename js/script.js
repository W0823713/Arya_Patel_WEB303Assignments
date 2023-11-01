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
// Add click event handler to the sorting anchors
$('.sort').click(function (e) {
    e.preventDefault();

    const column = $(this).data('column');
    const chevron = $(this).find('.chevron');
    
    // Get the table rows for sorting
    const rows = $('tbody tr');
    
    if (chevron.text() === '▲') {
        // Sort in descending order
        rows.sort((a, b) => {
            const valA = $(a).find(`td[data-column="${column}"]`).text();
            const valB = $(b).find(`td[data-column="${column}"]`).text();
            return valB.localeCompare(valA);
        });
        chevron.html('▼');
    } else {
        // Sort in ascending order
        rows.sort((a, b) => {
            const valA = $(a).find(`td[data-column="${column}"]`).text();
            const valB = $(b).find(`td[data-column="${column}"]`).text();
            return valA.localeCompare(valB);
        });
        chevron.html('▲');
    }

    // Update the table with the sorted rows
    $('tbody').html(rows);
});

// Initial sorting order (ascending) for the first column
$('.sort[data-column="firstName"]').trigger('click');
