$(document).ready(function () {
    // Function to populate the table with characters
    function populateTable(characters) {
        var table = $("#characterTable");
        table.empty(); // Clear previous content

        // Add table header
        table.append("<tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Gender</th><th>Occupation</th><th>Trait 1</th><th>Trait 2</th><th>Trait 3</th></tr>");

        // Add table rows based on characters data
        for (var i = 0; i < characters.length; i++) {
            var row = "<tr>";
            row += "<td>" + characters[i].firstName + "</td>";
            row += "<td>" + characters[i].lastName + "</td>";
            row += "<td>" + characters[i].age + "</td>";
            row += "<td>" + characters[i].gender + "</td>";
            row += "<td>" + characters[i].occupation + "</td>";
            row += "<td>" + characters[i].trait1 + "</td>";
            row += "<td>" + characters[i].trait2 + "</td>";
            row += "<td>" + characters[i].trait3 + "</td>";
            row += "</tr>";
            table.append(row);
        }

        // Update filter buttons with character count
        updateFilterButtons(characters);
    }

    // Function to update filter buttons with character count
    function updateFilterButtons(characters) {
        var countAM = 0;
        var countNZ = 0;

        for (var i = 0; i < characters.length; i++) {
            var lastName = characters[i].lastName.toUpperCase();

            if (lastName >= "A" && lastName <= "M") {
                countAM++;
            } else if (lastName >= "N" && lastName <= "Z") {
                countNZ++;
            }
        }

        $("#filterAM").text("A - M (" + countAM + ")");
        $("#filterNZ").text("N - Z (" + countNZ + ")");
    }

    // Function to handle search by first name
    $("#searchInput").on("input", function () {
        var searchTerm = $(this).val().toLowerCase();

        $("#characterTable tr").each(function () {
            var firstName = $(this).find("td:first-child").text().toLowerCase();

            if (firstName.includes(searchTerm)) {
                $(this).css({ "background-color": "darkgreen", "color": "white" });
            } else {
                $(this).css({ "background-color": "", "color": "" });
            }
        });
    });

    // Function to handle A - M filter
    $("#filterAM").on("click", function () {
        $("#characterTable tr").each(function () {
            var lastName = $(this).find("td:nth-child(2)").text().toUpperCase();

            if (lastName >= "A" && lastName <= "M") {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Function to handle N - Z filter
    $("#filterNZ").on("click", function () {
        $("#characterTable tr").each(function () {
            var lastName = $(this).find("td:nth-child(2)").text().toUpperCase();

            if (lastName >= "N" && lastName <= "Z") {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Load characters from characters.json using AJAX
    $.ajax({
        url: "characters.json",
        dataType: "json",
        success: function (data) {
            populateTable(data);
        },
        error: function (error) {
            console.error("Error loading characters:", error);
        }
    });
});
