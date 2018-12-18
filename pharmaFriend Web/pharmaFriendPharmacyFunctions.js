//THIS IS MY JS FOR AJAX FUNCTIONS FOR ON CLICK EVENTS//

//THIS IS MY PHARMACY CLASS
class Pharmacy {
    constructor (pharmaName, location){
    this.pharmaName = pharmaName;
    this.location = location;

    }
}
//THIS ARE MINE AJAX FUNCTIONS
//CREATE
$("#btnCreatePharmacy").click(function btnCreateP() {
    
    var newPharmacy = {"pharmacyName":$("#pharmaName").val(), "location": $("#location").val()};
    createPharmacy(newPharmacy);

    $("#pharmacyTable").append('<tr><td>' + $("#pharmaName").val() + 
      '</td><td>' + $("#location").val() + '</td></tr>'); 

})
//SEARCH
$("#btnSearchPharmacy").click(function btnSearchP() {
    pharmacyName = ($("#searchPharma").val());
    searchPharmacy();
})
//UPDATE
$("#btnUpdatePharmacy").click(function btnUpdateP() {
    var myPharmacy = {"pharmacyName":$("#pharmaName").val(), "location": $("#location").val()};
    createPharmacy(myPharmacy);
})
//DELETE
$("#btnDeletePharmacy").click(function btnDeleteP() {
    pharmacyName = ($("#searchPharma").val());
    deletePharmacy();
})