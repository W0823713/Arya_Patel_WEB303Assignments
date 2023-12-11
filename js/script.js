$(document).ready(function () {
    $.ajax({
      url: "js/character.json",
      success: function (data) {
        data.characters.forEach((characters) => {
          $("table#characters tbody").append(`
                <tr class="name">
                  <td>${characters.breed}</td>
                  <td>${characters.country}</td>
                  <td>${characters.origin}</td>
                  <td>${characters.coat}</td>
                  <td>${characters.pattern}</td>
                 
                </tr>
              `);
        });
  
        // Initialize filter counts
        updateFilterCounts();
      },
    });
  
    $("#search").on("input", function () {
      var searchTerm = $(this).val().toLowerCase();
  
      $("tbody tr.name").each(function () {
        let firstName = $(this).find("td:eq(0)").text().toLowerCase();
  
        if (firstName.includes(searchTerm)) {
          $(this).addClass("highlighted");
        } else {
          $(this).removeClass("highlighted");
        }
      });
    });
  
    $("#filtercountry").click(function () {
      filterBycountry("USA");
    });
  
    $("#filterNZ").click(function () {
      filterBycountry("NOT USA");
    });
  
    function filterBycountry(startLetter1, startLetter2) {
      $("tbody tr.name").each(function () {
        var country = $(this).find("td:eq(1)").text().charAt(0).toUpperCase();
  
        if (
          (country >= startLetter1 && lastName <= startLetter2) ||
          country === ""
        ) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
  
      updateFilterCounts();
    }
  
    function updateFilterCounts() {
      var countAM = $("tbody tr.name").filter(function () {
        var lastName = $(this).find("td:eq(1)").text().charAt(0).toUpperCase();
        return lastName >= "A" && lastName <= "M";
      }).length;
  
      var countNZ = $("tbody tr.name").filter(function () {
        var lastName = $(this).find("td:eq(1)").text().charAt(0).toUpperCase();
        return lastName >= "N" && lastName <= "Z";
      }).length;
  
      $("#filtercountry").text(`USA (${countUSA})`);
      $("#filtercountry").text(`NOT-USA (${countNOTUSA})`);
    }
  });
  // Function to update table header with arrow symbols
  function updateHeaderArrows() {
    $("#character th .sort-icon").html(""); // Clear existing icons
    $("#character th").each(function () {
      if ($(this).data("sort") === sortedColumn) {
        if (sortOrder === 1) {
          $(this).find(".sort-icon").html("&#x25B2;"); // Up arrow
        } else {
          $(this).find(".sort-icon").html("&#x25BC;"); // Down arrow
        }
      }
    });
  }
  
  // Function to sort the table by a given column
  function sortTable(column) {
    if (sortedColumn === column) {
      sortOrder *= -1;
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
    updateHeaderArrows();
  }
  
  // Keep track of the number of times a column header is clicked
  let clickCount = 0;
  
  // Handle click on table headings for sorting
  $("#characterTable th").click(function () {
    const column = $(this).data("sort");
    sortTable(column);
  
    // Check if the table has been sorted for the third time
    clickCount++;
    if (clickCount === 3) {
      // Reset the table to its original state
      charactersData = [...originalData];
      renderTable();
      sortedColumn = null;
      sortOrder = 1;
      updateHeaderArrows();
      clickCount = 0;
    }
  });
  
  // Handle resetting the table to the original data
  $("#resetTable").click(function () {
    charactersData = [...originalData];
    renderTable();
    sortedColumn = null;
    sortOrder = 1;
    updateHeaderArrows();
  });
  
  // Load character data from the JSON file using AJAX
  $.getJSON("js/characters.json", function (data) {
    charactersData = data;
    originalData = [...data];
    renderTable();
  });
  
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
  