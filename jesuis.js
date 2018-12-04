$(document).ready(function(){
    $(".bae").hover(function(){
        $(".bae").css("text-decoration","underline")
        $(".bae").css("color","aquamarine")
    },function (){
        $(".bae").css("text-decoration","none")
        $(".bae").css("color","rgb(181, 144, 216)")
    })
})