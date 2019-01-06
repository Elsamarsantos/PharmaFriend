
// THIS IS MY AJAX TO CREATE A PHARMACY
$("#btnCreatePharmacy").click(function createPharmacy() {
    var newPharmacy = {"pharmacyName": $("#pharmaName").val(), "address": $("#location").val(), "lonLocation":$("#longitude").val(), "latLocation": $("#latitude").val()};
    
    
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/pharmacies/create",
        type: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(newPharmacy),
        success: function (data) {
            console.log(data);
        }
    })
});

// THIS IS MY AJAX TO GET A PHARMACY
// function searchPharmacy() {
//     console.log("Preparing for sucess: Pharmacy ");
//     $.ajax({
//         url: "http://localhost:8080/pharmafriend/api/pharmacies/consult/" + pharmacyName,
//         type: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },

//         success: function (data) {


//             $("#searchPharmacyModalDiv").append("Name: " + data.pharmacyName + '<br>' + "Address: " + data.address + '<br>' +
//                 "Longitude: " + data.lonLocation + '<br>' + "Latitude: " + data.latLocation);
//         }
//     })
// }

// THIS IS MY AJAX TO UPDATE A PHARMACY
$("#btnUpdatePharmacy").click(function updatePharmacy() {
    
    var id = $(el).parent().parent().attr('id');
    var myPharmacy = {"id": id, "updatepharmacyName": $("#updatepharmaName").val(), "address": $("#updatelocation").val(), "lonLocation":$("#updatelongitude").val(), "latLocation": $("#updatelatitude").val()};
   
    
    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/pharmacies/update`,
        type: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        contentType: 'application/json',
        data: JSON.stringify(myPharmacy),
        success: function (data) {
            console.log("Sucess:" + data);
        }
    })
});
//prepare to delete 
function prepareToDeleteP(el) {

    var id = $(el).parent().parent().attr('id');

    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/pharmacies/consultid/${id}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            console.log("ver preparar", data)
            var pharmacy = `<tr id="${data.id}"><td>` + data.pharmacyName + '</td><td>' + data.address + '</td><tr>';

            $('#pharmacyTableToDelete').append(pharmacy);

        }
    })

}
// THIS IS MY AJAX TO DELETE A PHARMACY
function deletePharmacy() {
    var id = $('#pharmacyTableToDelete tr').attr('id');
    console.log("ver id", id);

    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/pharmacies/delete/${id}`,
        type: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',

    })
}

var listAllPharmarcy = [];
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
            listAllPharmarcy = data;

        }
    })
}searchAllPharmacy();

setInterval(() => {
    searchAllPharmacy();
}, 1000*120);


function getListPharmacies() {

    $("#pharmacyTable").show();
    
    for (i = 0; i < listAllPharmarcy.length; i++) {

        const element = listAllPharmarcy[i];
        var pharmacy = `<tr id="${element.id}"><td>` + element.pharmacyName +
            '</td><td>' + element.address +
            '</td><td>' + element.lonLocation +
            '</td><td>' + element.latLocation + '</td><td>' +
            '<a href="#" id="btnUpdatePharmacy" data-toggle="modal" data-target="#updatePharmacyModal" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-refresh"></span> UPDATE</a>' +
            ` <a href="#" id="btnDeletePharmacy${element.id}" data-toggle="modal" data-target="#deletePharmacyModal" onclick="prepareToDeleteP(this)" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> DELETE</a>`
            + '</td></tr>'
        $("#pharmacyTable").append(pharmacy);
    }
    $('#pharmacyTable').DataTable();

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

