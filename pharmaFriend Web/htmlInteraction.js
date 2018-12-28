//THIS IS MY MAIN PAGE
$(document).ready(function () {
    $("#ourVision").hide();
    $("#tabMedicine").hide();
    $("#tabPharmacy").hide();
    $("#home").show();
  
});

//------------ BUTTONS ----------------
$("#homeBtn").click(home);
$("#medicineListBtn").click(medicineList);
$("#pharmacyListBtn").click(pharmacyList);
$("#ourVisionBtn").click(ourVision);

$("#btnLogin").click(function doLogin(){
    alert("Login efectuado");
    home_andre();
 });
 
 
 
 function  home_andre(){
     $("#pharmacyImg").hide();
    $("#user").hide();
    $("#password").hide();
    $("#btnLogin").hide();
    $("#mypharmaform1").show();
    $("#medicineListBtn").show();
    $("#pharmacyListBtn").show();
    $("#homeBtn").show();
    $("#benvindo").show();
    home(); 
};

function home() {
    $("#ourVision").hide();
    $("#tabMedicine").hide();
    $("#tabPharmacy").hide();
    $("#home").show();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#homeBtn').addClass( "active" );
    $("#mypharmaform1").show();
}

function medicineList() {
    $("#ourVision").hide();
    $("#home").hide();
    $("#tabPharmacy").hide();
    $("#tabMedicine").show();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#medicineListBtn').addClass( "active" );

    
}

function pharmacyList() {
    $("#ourVision").hide();
    $("#home").hide();
    $("#tabMedicine").hide();
    $("#tabPharmacy").show();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#pharmacyListBtn').addClass( "active" );
}

function ourVision() {
    $("#tabMedicine").hide();
    $("#tabPharmacy").hide();
    $("#home").hide();
    $("#ourVision").show();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#ourVisionBtn').addClass( "active" );

}