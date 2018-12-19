// THIS IS MY JQUERY CODE FOR MY MAIN PAGE //


$("#btnMainSearch").click(function mainSearch() {
    console.log("SEARCHING MEDICINE...")
    $('#homeOutput').modal('show');
    $("#homeOutput").html("Based in your location " + $("#myLocation").val() + "<br> The medicine " +
    $("#medicineName").val() + " is in those nearby pharmacies: <br>" + 
    "Pharmacy Castelo [0.2KM] <br>" +  "Pharmacy Areias [4KM] <br>" +  "Pharmacy Varandas [23KM]");
    
});