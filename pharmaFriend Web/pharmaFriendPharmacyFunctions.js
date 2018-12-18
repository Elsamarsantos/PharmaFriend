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
    var pharmaName = ($("#pharmaNname").val());
    var location = ($("#location").val());
    newPharmacy = new Medicine(pharmaName, location);
    createPharmacy(newMPharmacy);
})
//SEARCH
$("#btnSearchPharmacy").click(function btnSearchP() {
    pharmacyName = ($("#pharmaName").val());
    searchPharmacy();
})
//UPDATE
$("#btnUpdatePharmacy").click(function btnUpdateP() {
    var pharmaName = ($("#pharmaName").val());
    var location = ($("#location").val());
    myPharmacy = new Medicine(pharmaName, location);
    createPharmacy(myMPharmacy);
})
//DELETE
$("#btnDeletePharmacy").click(function btnDeleteP() {
    pharmacyName = ($("#pharmaName").val());
    deletePharmacy();
})