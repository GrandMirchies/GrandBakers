$(document).ready(function(){ 
    fnLoader();
    setTimeout(() => {
        fnLoderhide();
    }, 30000);
});
function fnLoader(){
    $("body").addClass("loading"); 
}
function fnLoderhide(){
    $("body").removeClass("loading");
}