$('#searchForm').submit(function(event) {
  var searchField = $('#search').val();
  $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      data: {
          action: "opensearch",
          search: searchField
      }, // data object
      dataType: "jsonp",
      async: false,
      success: function(data) {
        var output = "<ul class='searchresults'>";
        if (data[1][0] == undefined) {
          output += "<li><h4>Sorry</h4><p>No Results Found</p></li>"
        } else {
          for (var i = 0; i < 10; i++) {
            if (data[3][i] == undefined) {
              break;
            }
            output += "<li><a href='" + data[3][i];
            output += "' target='_blank'><h4>" + data[1][i];
            output += "</h4><p>" + data[2][i] + "</p></li>";
          }
        }
        output += "</ul>";
        $('#results').html(output);
      }, // success function
      error: function(errorMessage) {
        alert("AJAX call Failed");
      }
  }); // $.ajax
  event.preventDefault();
}); // $.submit

$('#formReset').click(function() {
  $('#results').html(" ");
  $('.logo').css("width", "30%");
}); // .click formReset

$('#search').click(function() {
  $('.logo').css("width", "15%");
}); // .click search
