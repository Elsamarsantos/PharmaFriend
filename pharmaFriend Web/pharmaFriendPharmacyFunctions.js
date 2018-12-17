//THIS IS MY JS FOR AJAX FUNCTIONS FOR ON CLICK EVENTS//

//THIS IS MY PHARMACY CLASS
class Pharmacy {
    constructor (pharmaName, location, medicine){
    this.pharmaName = pharmaName;
    this.location = location;
    this.medicine = medicine;
    }
}
//THIS ARE MINE AJAX FUNCTIONS
//CREATE
function btnCreateP() {
    var pharmaName = ($("#name").val());
    var location = ($("#location").val());
    var medicine = ($("#medicine").val());
    newPharmacy = new Medicine(pharmaName, location, medicine);
    createPharmacy(newMPharmacy);
}
//SEARCH
function btnSearchP() {
    pharmacyName = ($("#search").val());
    searchPharmacy();
}
//UPDATE
function btnUpdateP() {
    var pharmaName = ($("#name").val());
    var location = ($("#location").val());
    var medicine = ($("#medicine").val());
    myPharmacy = new Medicine(pharmaName, location, medicine);
    createPharmacy(myMPharmacy);
}
//DELETE
function btnDeleteP() {
    pharmacyName = ($("#pharmacyNameField").val());
    deletePharmacy();
}