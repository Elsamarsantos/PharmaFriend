$(document).ready(function () {
    console.log("Ready!");
    $("#tabmedicine").hide();
    $("#tabpharmacy").hide();
    $("#Home").show();
});


//------------ BUTOES ----------------

$("#homebtn").click(home);
$("#productlistbtn").click(productlist);
$("#pharmacylistbtn").click(pharmacylist);

function home (){
    $("#tabmedicine").hide();
    $("#tabpharmacy").hide();
    $("#Home").show();
}

function productlist (){
    $("#Home").hide();
    $("#tabpharmacy").hide();
    $("#tabmedicine").show();
}

function pharmacylist(){
    $("#Home").hide();
    $("#tabmedicine").hide();
    $("#tabpharmacy").show();
}