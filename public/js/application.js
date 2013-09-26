$(document).ready(function(){
  $("a").click(function(event){

    $.post('/color', function(data) {
      $("li:nth-of-type(" + data.cell + ")").css('background-color', data.color);
      }, 'json');
  });
});
