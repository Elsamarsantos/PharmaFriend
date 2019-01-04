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

    var newMedicine = {"medicineName":$("#name").val(),"dose":$("#dose").val(),
    "volumeUnit":$("#units").val(),"pvp":$("#pvp").val(),"reImbursementRate":$("#rrate").val()};

    
    createMedicine(newMedicine);
    
})
//SEARCH
$("#btnSearchMedicine").click(function btnSearchM() {
    medicineName = $("#myInput").val();
    searchMedicine(medicineName);
    
})

//UPDATE
$("#btnUpdateMedicine").click(function btnUpdateM() {
    var myMedicine = {"medicineName":$("#name").val(), "dose": $("#dose").val(),
    "volumeUnit": $("#units").val(), "pvp": $("#pvp").val(), "reImbursementRate": $("#rrate").val()};
    updateMedicine(myMedicine);

})

