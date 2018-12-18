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
    console.log("Your medicine is like:" + name + type + pvp);
    createMedicine(newMedicine);
    console.log("Medicine Created");
}
//SEARCH
function btnSearchM() {
    medicineName = ($("#search").val());
    searchMedicine();
    console.log("Medicine that you're searching for is:" + medicineName);
}
//UPDATE
function btnUpdateM() {
    var name = ($("#name").val());
    var type = ($("#type").val());
    var pvp = parseInt($("#pvp").val());
    console.log("Your new medicine is like:" + name + type + pvp);
    myMedicine = new Medicine(name, type, pvp);
    updateMedicine(myMedicine);

}
//DELETE
function btnDeleteM() {
        medicineName = ($("#medicineNameField").val());
        console.log("Medicine to delete is:" + medicineName);
        deleteMedicine();
}