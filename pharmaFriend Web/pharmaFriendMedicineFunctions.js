//THIS IS MY JS FOR AJAX FUNCTIONS FOR ON CLICK EVENTS//

//THIS IS MY MEDICINE CLASS
class Medicine {
    constructor (name, type, pvp){
    this.name = name;
    this.type = type;
    this.pvp = pvp;
    }
}
//THIS ARE MINE AJAX FUNCTIONS
//CREATE
function btnCreateM() {
    var name = ($("#name").val());
    var type = ($("#type").val());
    var pvp = parseInt($("#pvp").val());
    newMedicine = new Medicine(name, type, pvp);
    createMedicine(newMedicine);
}
//SEARCH
function btnSearchM() {
    medicineName = ($("#search").val());
    searchMedicine();
}
//UPDATE
function btnUpdateM() {
    var name = ($("#name").val());
    var type = ($("#type").val());
    var pvp = parseInt($("#pvp").val());
    myMedicine = new Medicine(name, type, pvp);
    updateMedicine(myMedicine);
}
//DELETE
function btnDeleteM() {
        medicineName = ($("#medicineNameField").val());
        deleteMedicine();
}