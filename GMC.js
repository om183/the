function bold(){
     $("#demo").css("font-weight","bold");
}
function italic(){
     $("#demo").css("font-style","italic");
}
function underline(){
     $("#demo").css("text-decoration","underline");
}
function font(){
    $("#demo").css("font-family" , $("#font").val() );
}

//$("#font").click(function() {
//})
//function size(){
   // $("#demo").css("font-size",$("#"))
//}
$("#size").change(function() {
    $("#demo").css("font-size" , $("#size").val() );

})
   
                
     

        //function size(p){
  //  document.getElementById('demo').style.fontSize =p.value;

//function font(e){
   // document.getElementById('demo').style.fontFamily=e.value;