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
$("#btnCreateMedicine").click(function btnCreateM() {
    console.log("click");
    var newMedicine = {"medicineName":$("#name").val(), "medicineType": $("#type").val(), "pvp":parseInt($("#pvp").val())};
 
    createMedicine(newMedicine);

})
//SEARCH
$("#btnSearchMedicine").click(function btnSearchM() {
    medicineName = ($("#name").val());
    console.log("Medicine that you're searching for is:" + medicineName);
    searchMedicine();
    
})
//UPDATE
$("#btnUpdateMedicine").click(function btnUpdateM() {
    var name = ($("#name").val());
    var type = ($("#type").val());
    var pvp = parseInt($("#pvp").val());
    console.log("Your new medicine is like:" + name + type + pvp);
    myMedicine = new Medicine(name, type, pvp);
    updateMedicine(myMedicine);

})
//DELETE
$("#btnDeleteMedicine").click(function btnDeleteM() {
        medicineName = ($("#medicineName").val());
        console.log("Medicine to delete is:" + medicineName);
        deleteMedicine();
})