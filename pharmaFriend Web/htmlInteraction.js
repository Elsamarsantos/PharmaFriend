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
$("#userLogo").click(function reload(){
    location.reload();
});

$("#btnclose").click(function close() {
    $("#medicineName").val(""); 
    $("#userdistance").val("");
    $("#results").hide();
    home();
});

$("#btnLogin").click(function doLogin(){
    verificaRegisto();
    alert("Login efectuado");
    home();
 });

 
function verificaRegisto(){
    var email = $("#user").val();
    var pass = $("#password").val();
    // Faz o get para verificar se o utilizador ja existe
    // Se existir confirma se o utilizador e pass correspondem
    // Se nao existir pergunta se pretende criar um novo utilizador

};
 

function home() {
    $("#userLogo").show();
    $("#pharmacyImg").hide();
    $("#user").hide();
    $("#password").hide();
    $("#btnLogin").hide();
    $("#mypharmaform1").show();
    $("#medicineListBtn").show();
    $("#pharmacyListBtn").show();
    $("#homeBtn").show();
    $("#benvindo").show();
    $("#btnRegistar").hide();
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