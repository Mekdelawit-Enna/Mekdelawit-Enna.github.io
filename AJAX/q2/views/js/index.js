$(()=>{
    
    $("#txtArea").keypress(function(event){
        if(event.which == 13)
        {
            callAjax();
        }
    })
  
    $('#btn').click(function(){
       callAjax();

        }
    );

    function callAjax()
    {
        let url = "/8ball";
        $.get(url).done(ajaxSuccess).fail(ajaxFailure);
    }

    function ajaxSuccess(data) {
        $('#txtarea').val('');
    
        $('#txtarea').val(data);
    }

    function ajaxFailure() {
        $('#errors').text('An ajax error occurred.');
    }
});