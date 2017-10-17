// jQuery call
$(document).ready(function() {
  // $("#searchTerm").focus();    // set cursor to only data field
  //when search is clicked
  $("#search").click(function() {
    //get search input
    var searchTerm = $("#searchTerm").val();

    var url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchTerm +
      "&format=json&callback=?";

    $.ajax({
      type: "Get",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        console.log(data[1][0]);
        console.log(data[2][0]);
        console.log(data[3][0]);
        $("#output").html("");
        for (var i = 0; i < data[1].length; i++) {
          $("#output").prepend(
            "<div><div class='btn-default btn-style'><a href=" +
              data[3][i] +
              "><h3>" +
              data[1][i] +
              "</h3>" +
              "<p></a>" +
              data[2][i] +
              "</p></div></div>"
          );
        }
        // $("#searchTerm").val("");
      },
      error: function(errorMessage) {
        alert("Error");
      }
    }); // end ajax
  }); // end search click

  // hitting enter submits search
  $("#searchTerm").keypress(function(e) {
    if (e.which == 13) {
      $("#search").click();
    }
  }); // end searchTerm keypress
}); // end document ready
