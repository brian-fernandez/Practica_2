var proceso;

$(document).ready(function () {
    var actualIndice = 0;
    var objetos = $('.contenedor div');
    var numObjetos = objetos.length;

    function cambiarImagen() {
        var imagen = objetos.eq(actualIndice);
        objetos.hide();
        imagen.css('display', 'inline-block');
    }

    proceso = setInterval(function () {
        actualIndice += 1;
        if (actualIndice > (numObjetos - 1)) {
            actualIndice = 0;
        }
        cambiarImagen();
    }, 3000);

    $('.siguiente').click(function () {
        limpiarIntervalo();
        actualIndice += 1;
        if (actualIndice > (numObjetos - 1)) {
            actualIndice = 0;
        }
        cambiarImagen();
    });

    $('.anterior').click(function () {
        limpiarIntervalo();
        actualIndice -= 1;
        if (actualIndice < 0) {
            actualIndice = numObjetos - 1;
        }
        cambiarImagen();
    });

});

function limpiarIntervalo() {
    window.clearInterval(proceso);
}


/* scrool*/

$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 145) {
            $(".caja1").addClass("active");
        } else {
            $(".caja1").removeClass("active");
        }


        var scroll2 = $(window).scrollTop();
        if (scroll2 >= 840) {
            $(".tittle-2").addClass("active");
        } else {
            $(".tittle-2").removeClass("active");
        }

        var scroll2_2 = $(window).scrollTop();
        if (scroll2_2 >= 845) {
            $(".marcas").addClass("active");
        } else {
            $(".marcas").removeClass("active");
        }
        

        var scroll2_2 = $(window).scrollTop();
        if (scroll2_2 >= 2200) {
            $("body").css({"background" : "black","transition":"2s"});
            $(".tittle").css({"color":"white"});
            $("label").css({"color":"white"});
        } else {
            $("body").css({"background" : "white","transition":"2s"});
            $(".tittle").css({"color":"black"});
        }


        var scroll = $(window).scrollTop();
        if (scroll >= 145) {
            $(".top").addClass("active");
        } else {
            $(".top").removeClass("active");
        }

    });
});


/* fin de scroll*/

$("#img1").click
(function () 
{ 
    $(".caja2").css({"background":"#000000","transition":"2s"}),
    $(".marcas .row").css({"background":"#000000","transition":"2s","display":"none"}),
    $(".toyota").show(),
    $(".tittle-2").css({"animation" : "1s blanco infinite"}),
    $(".tittle-2").html("ATRAS");

    
});







$("#img2").click
(function () 
{ 
    $(".caja2").css({"background":"#000000","transition":"2s"}),
    $(".marcas .row").css({"background":"#000000","transition":"1s","display":"none"}),
    $(".Honda").show(),
    $(".tittle-2").css({"animation" : "1s blanco infinite"}),
    $(".tittle-2").html("ATRAS");

    
});

$("#img3").click
(function () 
{ 
    $(".caja2").css({"background":"#000000","transition":"2s"}),
    $(".marcas .row").css({"background":"#000000","transition":"1s","display":"none"}),
    $(".Nissan").show(),
    $(".tittle-2").css({"animation" : "1s blanco infinite"}),
    $(".tittle-2").html("ATRAS");

    
});



$(".tittle-2").click
(function()
{
    $(".tittle-2").html("MARCAS"),
    $(".tittle-2").css({"animation" : "none","color":"black"}),
    $(".toyota").hide(),$(".Honda").hide(),$(".Nissan").hide(),
    $(".marcas .row").css({"background":"white","transition":"1s","display":"flex"}),
    $(".caja2").css({"background":"white","transition":"2s"});
})

$("#card1").hover(function () {
        $("#card1").css({"background" : "black","transition":"1s","color":"white"});
        
    },function()
    {
        $("#card1").css({"background" : "#fff","transition":"1s","color":"#212529"});
    }
);
$("#card2").hover(function () {
    $("#card2").css({"background" : "black","transition":"1s","color":"white"});
    
},function()
{
    $("#card2").css({"background" : "#fff","transition":"1s","color":"#212529"});
}
);
$("#card3").hover(function () {
    $("#card3").css({"background" : "black","transition":"1s","color":"white"});
    
},function()
{
    $("#card3").css({"background" : "#fff","transition":"1s","color":"#212529"});
}
);



$("#img1").hover(function () {
    $("#img1").css({"opacity" : "0.5"});
        
    }, function () {
        $("#img1").css({"opacity" : "1"});
    }
);
$("#img2").hover(function () {
    $("#img2").css({"opacity" : "0.5"});
        
    }, function () {
        $("#img2").css({"opacity" : "1"});
    }
);
$("#img3").hover(function () {
    $("#img3").css({"opacity" : "0.5"});
        
    }, function () {
        $("#img3").css({"opacity" : "1"});
    }
);
