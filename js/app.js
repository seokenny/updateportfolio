$("#mobile_nav").hide();
$("#full_nav_2").hide();

$(document).ready(function(){

    $(".wt_rugsusa").on("click",function(){
            $("#work_page_contain").stop().animate({left:'0'},500,function(){
                $(".rugsusa_tile").stop().fadeIn();
            });
    });

    $(".wps_banner").on("click",function(){
        $(".rugsusa_tile").stop().fadeOut();
        $("#work_page_contain").stop().animate({left:'100%'}, 500);
    });

    $(".wt_fuyuramen").on("click",function(){
        $("#work_page_contain").stop().animate({left:'0'},500,function(){
            $(".fuyuramen_tile").stop().fadeIn();
        });
    });

    $(".wps_banner").on("click",function(){
        $(".fuyuramen_tile").stop().fadeOut();
        $("#work_page_contain").stop().animate({left:'100%'}, 500);
    });

    $(".wt_mystiq").on("click",function(){
        $("#work_page_contain").stop().animate({left:'0'},500,function(){
            $(".mystiq_tile").stop().fadeIn();
        });
    });

    $(".wps_banner").on("click",function(){
        $(".mystiq_tile").stop().fadeOut();
        $("#work_page_contain").stop().animate({left:'100%'}, 500);
    });

    $(".wt_zombiedice").on("click",function(){
        $("#work_page_contain").stop().animate({left:'0'},500,function(){
            $(".zombiedice_tile").stop().fadeIn();
        });
    });

    $(".wps_banner").on("click",function(){
        $(".zombiedice_tile").stop().fadeOut();
        $("#work_page_contain").stop().animate({left:'100%'}, 500);
    });

    $(".wt_guesser").on("click",function(){
        $("#work_page_contain").stop().animate({left:'0'},500,function(){
            $(".guesser_tile").stop().fadeIn();
        });
    });

    $(".wps_banner").on("click",function(){
        $(".guesser_tile").stop().fadeOut();
        $("#work_page_contain").stop().animate({left:'100%'}, 500);
    });

    
});
document.querySelector(".open_m_nav").addEventListener("click",function(){
    document.querySelector("#mobile_nav").style.display = "block";
    document.querySelector("#mobile_nav").classList.remove("flipOutX");
    document.querySelector("#mobile_nav").classList.add("flipInX");
});

document.querySelector(".close_m_nav").addEventListener("click",function(){
    document.querySelector("#mobile_nav").classList.remove("flipInX");
    document.querySelector("#mobile_nav").classList.add("flipOutX");
});

//MOBILE NAVIGATION
$(".m_nav_home").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#banner_contain").offset().top
    },150, function(){
        closeNavMenu();
    });
});

$(".m_nav_work").on("click", function(){
    $("html, body").animate({
        scrollTop: $("#work_contain").offset().top - 50
    },150, function(){
        closeNavMenu();
    });
});

$(".m_nav_contact").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#contact_contain").offset().top
    },150, function(){
        closeNavMenu();
    });
});

//DESKTOP NAVIGATION
$(".nav_home").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#banner_contain").offset().top
    }, 750);
});

$(".nav_work").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#work_contain").offset().top - 100
    }, 750);
});

$(".nav_contact").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#contact_contain").offset().top
    }, 750);
});

function closeNavMenu(){
    document.querySelector("#mobile_nav").classList.remove("flipInX");
    document.querySelector("#mobile_nav").classList.add("flipOutX");
}

window.addEventListener("scroll",function(){
    if(window.scrollY == 0){
        $("#full_nav_2").stop().fadeOut(500);
    }
    else $("#full_nav_2").stop().fadeIn(500);
});
