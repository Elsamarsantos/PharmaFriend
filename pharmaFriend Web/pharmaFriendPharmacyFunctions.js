//THIS IS MY JS FOR AJAX FUNCTIONS FOR ON CLICK EVENTS//

//THIS IS MY PHARMACY CLASS
class Pharmacy {
    constructor (pharmaName, location){
    this.pharmaName = pharmaName;
    this.location = location;
    this.longitude = longitude;
    this.latitude = latitude;

    }
}
//THIS ARE MINE AJAX FUNCTIONS
//CREATE
$("#btnCreatePharmacy").click(function btnCreateP() {
    
    var newPharmacy = {"pharmacyName": $("#pharmaName").val(), "address": $("#location").val(), "lonLocation":$("#longitude").val(), "latLocation": $("#latitude").val()};
    createPharmacy(newPharmacy);
   
})
//SEARCH
$("#btnSearchPharmacy").click(function btnSearchP() {
    pharmacyName = ($("#searchPharma").val());
    searchPharmacy(pharmacyName);
})
//UPDATE
$("#btnUpdatePharmacy").click(function btnUpdateP() {
    var myPharmacy = {"id": 160, "pharmacyName": $("#pharmaName").val(), "address": $("#location").val(), "lonLocation":$("#longitude").val(), "latLocation": $("#latitude").val()};
    createPharmacy(myPharmacy);
})
