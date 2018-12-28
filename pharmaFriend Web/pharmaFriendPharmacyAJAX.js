
// THIS IS MY AJAX TO CREATE A PHARMACY
function createPharmacy(p) {
    console.log("Preparing for sucess:" + p);
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/pharmacies/create",
        type: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(p),
        success: function (data) {
            console.log(data);
        }
    })
}

// THIS IS MY AJAX TO GET A PHARMACY
function searchPharmacy() {
    console.log("Preparing for sucess: Pharmacy ");
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/pharmacies/consult/" + pharmacyName,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
       
        success: function (data) {
                     
           
            $("#searchPharmacyModalDiv").append("Name: " + data.pharmacyName + '<br>' + "Address: " + data.address + '<br>' + 
            "Longitude: " + data.lonLocation + '<br>'+ "Latitude: " + data.latLocation); 
        }
    })
}

// THIS IS MY AJAX TO UPDATE A PHARMACY
function updatePharmacy(p) {
    console.log("Preparing for sucess:" + p);
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/pharmacies/",
        type: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        contentType: 'application/json',
        data: JSON.stringify(p),
        success: function (data) {
            console.log("Sucess:" + data);
        }
    })
}

// THIS IS MY AJAX TO DELETE A PHARMACY
function deletePharmacy(p) {
    console.log("Preparing for sucess:" + p);
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/pharmacies/delete/" + pharmacyName,
        type: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',
        data: JSON.stringify(p),
        success: function (data) {
            console.log("Sucess:" + data);
            
        }
    })
}

// THIS IS MY AJAX TO GET ALL PHARMACY IN MY SQL TABLE
function searchAllPharmacy() {
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/pharmacies/consultall",
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
       
       
        success: function (data) {
            console.log("Pharmacy total number is " + data.length);
            for(i=0; i<data.length; i++){
            const element = data[i];
            var pharmacy = '<tr><td>' + element.pharmacyName + 
            '</td><td>' + element.address + 
            '</td><td>' + element.lonLocation + 
            '</td><td>' + element.latLocation +  '</td><td>' +
             '<a href="#" id="btnUpdatePharmacy" data-toggle="modal" data-target="#updatePharmacyModal" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-refresh"></span> UPDATE</a>' +
            ' <a href="#" id="btnDeletePharmacy" data-toggle="modal" data-target="#deletePharmacyModal" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> DELETE</a>' 
            + '</td></tr>'
            $("#pharmacyTable").append(pharmacy);
            }

    
        }
    })
}
function getPharmacyName() {
    var a = [];

    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/pharmacies/consultall",
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {

            for (i = 0; i < data.length; i++) {
                a.push(data[i].pharmacyName);
                autocomplete(document.getElementById("searchPharma"), a);
            }
        }
    })
}
getPharmacyName();

