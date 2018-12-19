//THIS IS MY JS FOR AJAX FUNCTIONS FOR ON CLICK EVENTS//

//THIS IS MY MEDICINE CLASS
class Medicine {
    constructor (name, dose, units, pvp, rrate){
    this.name = name;
    this.dose = dose;
    this.units = units;
    this.pvp = pvp;
    this.rrate = rrate;
    }
}
//THIS ARE MINE AJAX FUNCTIONS
//CREATE
$("#btnCreateMedicine").click(function btnCreateM() {
console.log("Medicine Created.")
    var newMedicine = {"medicineName":$("#name").val(), "dose": $("#dose").val(),
    "units": $("#units").val(), "pvp":parseInt($("#pvp").val()), "rrate": parseInt($("#rrate").val())};
 
    createMedicine(newMedicine);
    
  $("#medicineTable").append('<tr><td>' + $("#name").val() + '</td><td>' + $("#dose").val() + 
                            '</td><td>' + $("#units").val() + '</td><td>' +
                            parseInt($("#pvp").val()) + '</td><td>' + 
                            parseInt($("#rrate").val()) + '</td></tr>'); 

})
//SEARCH
$("#btnSearchMedicine").click(function btnSearchM() {
    medicineName = ($("#searchMedicine").val());
    console.log("Medicine that you're searching for is:" + medicineName);
    searchMedicine();
    
})
//UPDATE
$("#btnUpdateMedicine").click(function btnUpdateM() {
    var myMedicine = {"medicineName":$("#name").val(), "dose": $("#dose").val(),"units": $("#units").val(), "pvp":parseInt($("#pvp").val()), "rRate": parseInt($("#rrate").val())};
    updateMedicine(myMedicine);

})
//DELETE
$("#btnDeleteMedicine").click(function btnDeleteM() {
        medicineName = ($("#searchMedicine").val());
        console.log("Medicine to delete is:" + medicineName);
        deleteMedicine();
})