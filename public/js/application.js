$(document).ready(function(){
  $("a").click(function(){

    $.ajax({
      url: '/color',
      type: "POST",
      success: function(response) {
        console.log(response.cell);
        $('li:eq(' + (response.cell - 1)+')').css('background-color', '' + response.color + '');
      },
      dataType: "json"

    }); // end ajax
  }); // end click
}); // end document
