$(function(){
   var gameStarted = false;
   var isCreated = false;
   $("div.boundary").mouseenter(function(){
    
      if(gameStarted)
      {
         $("div.boundary").css("background-color", "red");
         
         gameStarted = false;
         
         $("#stat").text("You Lost");
        
      }
      
   });
   // $("div.")
   $("#start").click(function(){
      gameStarted = true;
      
      $("div.boundary").css("background-color", "#eeeeee");
      console.log(isCreated); 
      if(!isCreated)
      {
         $('<p id="stat">' + " Game Started " + '</p>').appendTo("div.example");
         isCreated = true;
      }
      else{
         $("#stat").text("Game Started");
      }
      
      console.log("game started");
   })
   $("#end").mouseenter(function(){
      if(gameStarted)
      {
        // alert("you won");
        
         $("div.boundary").css("background-color", "#88ff88");
         $("#stat").text("You Won");
         gameStarted = false;
      }
      
   })
   // $("end").mouseleave(function(){
   //    if(gameStarted)
   //    {
   //      // alert("you won");
        
   //       $("div.boundary").css("background-color", "red");
   //       gameStarted = false;
   //    }
   // })
   $("div.container").mouseenter(function(){
      if(gameStarted)
      {
         $("div.boundary").css("background-color", "red");
         $("#stat").text("You Lost");
         gameStarted = false;
      }
   })
});


