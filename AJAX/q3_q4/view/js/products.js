
$(()=>{
    
    $("form").submit(function(){
             
        console.log($(this).children())
        let name = $(this).children().eq(0).val();
        let price = $(this).children().eq(1).val();
        let item = {prodName:name,prodPrice: price};
      
  
        $.post({
            url: "/addToCart",
            data: item,
            
        }).done(success).fail(fail); 
        return false;
      
        
    })
  
    function success(data){
        $("#msg").text("product successfully added");
        //console.log(data);
        setTimeout(()=>{
            $("#msg").text("");
        }, 3000);
    }
    function fail(xhr, status, exception){
        $("#msg").text("Failed to add Product");
        setTimeout(()=>{
            $("#msg").text("");
        }, 3000);
    }
});