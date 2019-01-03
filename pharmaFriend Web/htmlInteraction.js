//THIS IS MY MAIN PAGE
$(document).ready(function () {
    $("#ourVision").hide();
    $("#tabMedicine").hide();
    $("#tabPharmacy").hide();
    $("#tabUser").hide();
    $("#home").show();
  
});

//------------ BUTTONS ----------------
$("#homeBtn").click(home);
$("#medicineListBtn").click(medicineList);
$("#pharmacyListBtn").click(pharmacyList);
$("#userListBtn").click(userList);
$("#ourVisionBtn").click(ourVision);
$("#userLogo").click(function reload(){
    location.reload();
});

$("#btnclose").click(function close() {
    $("#medicineName").val("");
    $("#getDose").empty();
    $("#getVolume").empty();
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
    $("#ourVision").hide();
    $("#home").hide();
    $("#tabPharmacy").hide();
    $("#tabMedicine").show();
    $("#tabUser").hide();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#medicineListBtn').addClass( "active" );

    
}

function pharmacyList() {
    $("#ourVision").hide();
    $("#home").hide();
    $("#tabMedicine").hide();
    $("#tabPharmacy").show();
    $("#tabUser").hide();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#pharmacyListBtn').addClass( "active" );
}

function userList() {
    $("#ourVision").hide();
    $("#home").hide();
    $("#tabMedicine").hide();
    $("#tabPharmacy").hide();
    $("#tabUser").show();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#userListBtn').addClass( "active" );
}


function ourVision() {
    $("#tabMedicine").hide();
    $("#tabPharmacy").hide();
    $("#home").hide();
    $("#ourVision").show();
    $(".active").removeClass( "active" ).addClass( "hover" );
    $('#ourVisionBtn').addClass( "active" );

}