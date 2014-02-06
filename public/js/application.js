$(document).ready(function(){
  $("a").click(function(){

    $.ajax({
      url: '/color',
      type: "POST",
      success: function(response) {
        $("li:eq(" + response.cell +")").css("background-color", '"' + response.color + '"');
      },
      dataType: "json"

    }); // end ajax
  }); // end click
}); // end document
