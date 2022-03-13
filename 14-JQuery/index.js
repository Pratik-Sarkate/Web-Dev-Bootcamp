
/*

=> Manipulating the style

    $("h1").css("color",'red');


=> Add/remove classes

    $("h1").addClass("big-title");   ---> single class addition
    $("h1").addClass("big-title margin");  ---> multiple class addition

    $("h1").removeClass("big-title");   ---> single class removal



=> Manipulating Text/Html

    $("h1").text("Bye");
    $("h1").html("<em>Bye</em>");



=> Manipulating attributes

    $("img").attr("src");   --> to view the attribute value
    $("h1").attr("href","https://www.instagram.com");   --> to edit the attribute value



=> Adding event listeners

    $("button").click(function (){
        $("h1").css("color","purple");
    })


    $("input").keydown(function (event){        whatever written in the input box is seen in console
        console.log(event.key);
    })

    OR

    $(document).keydown(function (event){        whatver written on the screen is seen in console
        console.log(event.key);
    })

    OR

    $("h1").on("mouseover", function(){
        console.log($("h1").css("color","purple"));
    });


=> Adding/removing elements

    $("h1").before("<button> New </button>");
    $("h1").after("<button> New </button>");
    $("h1").prepend("<button> New </button>");
    $("h1").append("<button> New </button>");


=> Animation:

    $("h1").hide();
    $("h1").show();
    $("h1").toggle();
    
    $("h1").fadeOut();
    $("h1").fadeIn();
    $("h1").fadeToggle();

    $("h1").slideDown();
    $("h1").slideUp();
    $("h1").slideToggle();


    $("h1").animate({opacity: 0.5});
    $("h1").animate({margin: "30%" });
    
    $("h1").slideUp().slodeDown().animate({margin: "30%" });


*/


