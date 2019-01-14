//THIS IS MY MAIN PAGE
$(document).ready(function () {

  home();
  searchAllPharmacy();
  searchAllMedicine();
});

//------------ BUTTONS ----------------
$("#homeBtn").click(home);
$("#medicineListBtn").click(medicineList);
$("#pharmacyListBtn").click(pharmacyList);
$("#ourVisionBtn").click(ourVision);


function home() {
    $("#results").hide();
    $("#logoff").show();
    $("#userListBtn").show();
    $("#userLogo").show();
    $("#pharmacyImg").hide();
    $("#user").hide();
    $("#password").hide();
    $("#btnLogin").hide();
    $("#mypharmaform1").show();
    $("#medicineListBtn").show();
    $("#pharmacyListBtn").show();
    $("#userListBtn").show()
    $("#homeBtn").show();
    $("#benvindo").show();
    $("#btnRegistar").hide();
    $("#ourVision").hide();
    $("#tabMedicine").hide();
    $("#tabPharmacy").hide();
    $("#tabUser").hide();
    $("#home").show();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#homeBtn').addClass( "active" );
   
}

function medicineList() {
    $("#results").hide();
    $("#medicineTable").hide();
    $("#mypharmaform1").hide();
    $("#ourVision").hide();
    $("#home").hide();
    $("#tabPharmacy").hide();
    $("#tabMedicine").show();
    $("#tabUser").hide();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#medicineListBtn').addClass( "active" );
    getListMedicines();

    
}

function pharmacyList() {
    $("#results").hide();
    $("#pharmacyTable").hide();
    $("#mypharmaform1").hide();
    $("#ourVision").hide();
    $("#home").hide();
    $("#tabMedicine").hide();
    $("#tabPharmacy").show();
    $("#tabUser").hide();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#pharmacyListBtn').addClass( "active" );
    getListPharmacies();
}

function ourVision() {
    $("#tabUser").hide();
    $("#results").hide();
    $("#mypharmaform1").hide();
    $("#tabMedicine").hide();
    $("#tabPharmacy").hide();
    $("#home").hide();
    $("#ourVision").show();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#ourVisionBtn').addClass( "active" );
}