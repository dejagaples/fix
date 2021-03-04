$("#menu > li > a").click(function(e){
    e.preventDefault();
    if($(this).hasClass("buka"))
    {
    $(this).removeClass("buka");
    $(this).parent().children("ul").stop(true,true).slideUp("normal");
    } else {
    $("#menu a.tutup.buka").removeClass("buka");
    $(this).addClass("buka");
    $(".sub").filter(":visible");
    $(this).parent().children("ul").stop(true,true).slideDown("normal");
    }
});

$("#menu2 > li > a").click(function(e){
    e.preventDefault();
    if($(this).hasClass("buka"))
    {
    $(this).removeClass("buka");
    $(this).parent().children("ul").stop(true,true).slideUp("normal");
    } else {
    $("#menu2 a.tutup.buka").removeClass("buka");
    $(this).addClass("buka");
    $(".sub2").filter(":visible");
    $(this).parent().children("ul").stop(true,true).slideDown("normal");
    }
});
