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

    var newMedicine = {"id": 1, "medicineName":$("#name").val(), "dose": $("#dose").val(),
    "volumeUnit": $("#units").val(), "pvp": $("#pvp").val(), "reImbursementRate": $("#rrate").val()};

    // { DEFAULT
    //     "id": 1,
    //     "medicineName": "Acarbose Bluepharma",
    //     "dose": "50 mg",
    //     "volumeUnit": "Blister - 20 unidade(s)",
    //     "pvp": 3.27,
    //     "reImbursementRate": "90%"
    // }
    createMedicine(newMedicine);
    
  $("#medicineTable").append('<tr><td>' + $("#name").val() + '</td><td>' + $("#dose").val() + 
                            '</td><td>' + $("#units").val() + '</td><td>' +
                            $("#pvp").val() + '</td><td>' + 
                            $("#rrate").val() + '</td></tr>'); 

})
//SEARCH
$("#btnSearchMedicine").click(function btnSearchM() {
    medicineName = $("#myInput").val();
    searchMedicine(medicineName);
    
})

//UPDATE
$("#btnUpdateMedicine").click(function btnUpdateM() {
    var myMedicine = {"id": 1, "medicineName":$("#name").val(), "dose": $("#dose").val(),
    "volumeUnit": $("#units").val(), "pvp": $("#pvp").val(), "reImbursementRate": $("#rrate").val()};
    updateMedicine(myMedicine);

})
//DELETE
$("#btnDeleteMedicine").click(function btnDeleteM() {
        medicineName = ($("#medicineName").val());
        deleteMedicine(medicineName);
      
})