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