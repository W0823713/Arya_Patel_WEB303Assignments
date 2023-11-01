$(document).ready(function () {
    // Accordion
    $(".accordion h3").click(function () {
      $(this).next("div").slideToggle();
      $(this).parent().siblings().find("div").slideUp();
    });
  
    // Tabs
    $(".tabs ul li a").click(function () {
      var tabID = $(this).attr("href");
      $(".tabs div").hide();
      $(tabID).show();
    });
  });
  $(document).ready(function () {
    let charactersData = []; // To store the character data
    let sortedColumn = null;
    let sortOrder = 1;
  
    // Function to render the table based on character data
    function renderTable() {
      const tbody = $("#characterTable tbody");
      tbody.empty();
  
      charactersData.forEach(function (character) {
        const row = $("<tr>");
        row.append($("<td>").text(character.firstName));
        row.append($("<td>").text(character.lastName));
        row.append($("<td>").text(character.age));
        row.append($("<td>").text(character.occupation));
        row.append($("<td>").text(character.location));
        row.append($("<td>").text(character.dateOfBirth));
        row.append($("<td>").text(character.debutDate));
        tbody.append(row);
      });
    }
  
    // Function to sort the table by a given column
    function sortTable(column) {
      if (sortedColumn === column) {
        sortOrder *= -1; // Reverse order on each click
      } else {
        sortedColumn = column;
        sortOrder = 1;
      }
  
      charactersData.sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];
        if (aValue < bValue) {
          return -1 * sortOrder;
        }
        if (aValue > bValue) {
          return 1 * sortOrder;
        }
        return 0;
      });
  
      renderTable();
    }
  
    // Handle click on table headings for sorting
    $("#characterTable th").click(function () {
      const column = $(this).data("sort");
      sortTable(column);
      // Add class for displaying chevron
      $("#characterTable th").removeClass("asc desc");
      $(this).addClass(sortOrder === 1 ? "asc" : "desc");
    });
  
    // Load character data from the JSON file
    $.getJSON("characters.json", function (data) {
      charactersData = data;
      renderTable();
    });
  });
  