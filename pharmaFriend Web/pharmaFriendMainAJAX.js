// THIS IS MY AJAX TO CREATE A MEDICINE
function requestPharmacies(p) {  
   
    console.log("Preparing for sucess:" + p);
   
    $.ajax({
       
        url: "http://localhost:8080/pharmafriend/api/pharmacies/consultnear/" + long + "/" + lat + "/" + '10', 
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',
        data: JSON.stringify(p),
        success: function (data) {
            console.log("Sucess:" + data.address); 
            for(i=0; i<3; i++) {
                const element = data[i];
                var pharmacy = element.pharmacyName + '<br>' + element.address +  '<br>' + '<br>';
                $("#myResults").append(pharmacy);
                } 
        }
    })
}

//THIS ARE MINE AJAX FUNCTIONS
//CREATE
$("#btnMainSearch").click(function showPharmacies() {
    

    long = $("#longNumber").val();
    lat = $("#latNumber").val();

    requestPharmacies();
})
