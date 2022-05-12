$(function(){


   let inter;
   

    $("#start").click( function(){
        
        if($("div.circle-holder").length)
        {
            $("div.circle-holder").remove();
        }

        let width = parseInt($("#width").val());
        let growth = parseInt($("#grw").val());
        let interval = parseInt($("#interval").val());
        let size = parseInt($("#size").val()); 

        let theDiv = '<div class="circle-holder"></div>';
        $("div.container").append(theDiv)
        let wid = $(window).width() /2;
       
        let w = wid+"px";
        let circle = {
            "position":"absolute",
            "margin-left":w,
            "margin-top": "100px",
            "height": "150px",
            "width": width + "px",
            "background-color": "red",
            "border-radius": "50%",
            "float":"left"
        }

        for(let i = 0; i < size; i++)
        {
            let a  = '<div class="circle' + i;
            a = a + '"></div>';
            $("div.circle-holder").append(a);
            let id = "div.circle" + i;
            $(id).click(function(){
                $(id).remove();
                clearInterval(inter);
            })
        }
        
        let b;
        let add = wid + 70; 


        for(let i=0; i < size; i++)
        {
            if(i === 0)
            {
                 b = "div.circle"+i;
                $(b).css(circle);
            }
            else
            {
                if(i % 2 === 1)
                {
                    add = wid - (i * 70);
                    
                }
                else{
                    add = wid + (i * 70);
                    
                }
                
                b = "div.circle"+i;
                $(b).css(circle);
                $(b).css("margin-left", add+"px");
                let back = ["#84c79f","#d8508b","#6c3348","#bea51e","#5b4654","#17296e","#da616a","#716e23","#641726"];
                let rand = back[Math.floor(Math.random() * back.length)];
                $(b).css("background-color", rand);
                add += 70;
            }
        }

       
       let g = width;
       inter = setInterval(()=>{
            g = g + growth;
            for(let i = 0; i < size; i++)
            {
                let c = "div.circle" + i;
                $(c).css("width", g + "px");
            }
            
        }, interval);

    });
    
});

