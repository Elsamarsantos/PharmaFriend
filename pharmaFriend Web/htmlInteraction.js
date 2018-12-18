//THIS IS MY MAIN PAGE
$(document).ready(function () {
    console.log("Ready!");
    $("#ourvision").hide();
    $("#tabmedicine").hide();
    $("#tabpharmacy").hide();
    $("#Home").show();
});

//------------ BUTTONS ----------------
$("#homebtn").click(home);
$("#productlistbtn").click(productlist);
$("#pharmacylistbtn").click(pharmacylist);
$("#ourvisionbtn").click(ourvision);

function home() {
    $("#ourvision").hide();
    $("#tabmedicine").hide();
    $("#tabpharmacy").hide();
    $("#Home").show();
}

function productlist() {
    $("#ourvision").hide();
    $("#Home").hide();
    $("#tabpharmacy").hide();
    $("#tabmedicine").show();
}

function pharmacylist() {
    $("#ourvision").hide();
    $("#Home").hide();
    $("#tabmedicine").hide();
    $("#tabpharmacy").show();
}

function ourvision() {
    $("#tabmedicine").hide();
    $("#tabpharmacy").hide();
    $("#Home").hide();
    $("#ourvision").show();

}