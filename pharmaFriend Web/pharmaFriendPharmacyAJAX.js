
// THIS IS MY AJAX TO CREATE A MEDICINE
function createPharmacy(p) {
    console.log(p);
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

// THIS IS MY AJAX TO GET A MEDICINE
function searchPharmacy(p) {
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/pharmacies/" + pharmacyName,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',
        data: JSON.stringify(p),
        success: function (data) {
            console.log(data);
            $("#name").val(data.pharmaName);
            $("#location").val(data.location);
       
        }
    })
}

// THIS IS MY AJAX TO UPDATE A MEDICINE
function updatePharmacy(p) {
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
            console.log(data);
        }
    })
}

// THIS IS MY AJAX TO DELETE A MEDICINE
function deletePharmacy(p) {
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/pharmacies" + pharmacyName,
        type: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',
        data: JSON.stringify(p),
        success: function (data) {
            console.log(data);
            
        }
    })
}