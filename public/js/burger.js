$(document).ready(function() {
 
$("#submit").on("click", function(){
  event.preventDefault();

   var order = {
      burger:$("#search").val().trim(),
    };

    console.log(order);

   $.post("/api/posts", order);

   $("#search").val("");

});

$.get("/api/posts", function(req,res){
    
    $("#ordered").prepend(req.body);
   
});



});
