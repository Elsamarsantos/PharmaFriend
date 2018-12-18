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
    
  $("#medicineTable").append('<tr><td>' + $("#name").val() + 
      '</td><td>' + $("#type").val() + '</td><td>' + parseInt($("#pvp").val()) + '</td></tr>'); 

})
//SEARCH
$("#btnSearchMedicine").click(function btnSearchM() {
    medicineName = ($("#searchMedicine").val());
    console.log("Medicine that you're searching for is:" + medicineName);
    searchMedicine();
    
})
//UPDATE
$("#btnUpdateMedicine").click(function btnUpdateM() {
    var myMedicine = {"medicineName":$("#name").val(), "medicineType": $("#type").val(), "pvp":parseInt($("#pvp").val())};
    updateMedicine(myMedicine);

})
//DELETE
$("#btnDeleteMedicine").click(function btnDeleteM() {
        medicineName = ($("#searchMedicine").val());
        console.log("Medicine to delete is:" + medicineName);
        deleteMedicine();
})