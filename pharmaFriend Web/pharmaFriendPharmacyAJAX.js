var listAllPharmarcy = [];
var wait = false;
// THIS IS MY AJAX TO GET ALL PHARMACY IN MY SQL TABLE
function searchAllPharmacy() {
    wait = true;

    return $.ajax({
        url: "http://localhost:8080/pharmafriend/api/pharmacies/consultall",
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },


        success: function (data) {
            listAllPharmarcy = data;
            this.wait = false;
        }
    })
}


setInterval(() => {
    searchAllPharmacy();
}, 1000 * 320);



// THIS IS MY AJAX TO CREATE A PHARMACY
$("#btnCreatePharmacy").click(function createPharmacy() {
    var newPharmacy = { "pharmacyName": $("#pharmaName").val(), "address": $("#location").val(), "lonLocation": $("#longitude").val(), "latLocation": $("#latitude").val() };


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
            searchAllPharmacy();
            getListPharmacies();
        }
    })
});



// THIS IS MY AJAX TO UPDATE A PHARMACY
function prepareToUpdatePharmacy(el) {

    $('#pharmacytoUpdate').empty();

    var id = $(el).parent().parent().attr('id');

    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/pharmacies/consultid/${id}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {

            var pharmacy = `<tr id="${data.id}"></tr>` +
                `<tr><td>` + `<input id="updatepharmaName" type="text" value="${data.pharmacyName}"/>` + "</td></tr>" +
                `<tr><td>` + `<input id="updateaddress" type="text" value="${data.address}"/>` + "</td></tr>" +
                `<tr><td>` + `<input id="updatelonLocation" type="text" value="${data.lonLocation}"/>` + "</td></tr>" +
                `<tr><td>` + `<input id="updatelatLocation" type="text" value="${data.latLocation}" />` + "</td></tr>";

            $('#pharmacytoUpdate').append(pharmacy);

        }
    })
}
$("#btnUpdatePharmacy").click(function updatePharmacy() {

    var id = $('#pharmacytoUpdate tr').attr('id');
    console.log("ver id " + id);

    var myPharmacy = { "id": id, "pharmacyName": $("#updatepharmaName").val(), "address": $("#updateaddress").val(), "lonLocation": $("#updatelonLocation").val(), "latLocation": $("#updatelatLocation").val() };
    console.log(myPharmacy);

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
            console.log("update:" + data);
        }
    })
    searchAllPharmacy()
    getListPharmacies();
});
//prepare to delete 
function prepareToDeleteP(el) {

    $('#pharmacyTableToDelete').empty();

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
    getListPharmacies();
}


var tpharmacy = $('#pharmacyTable').DataTable();

function getListPharmacies() {

    var promise = searchAllPharmacy();
    promise.then(() => {

        tpharmacy.clear().draw();
        for (i = 0; i < listAllPharmarcy.length; i++) {

            const element = listAllPharmarcy[i];

            tpharmacy.row.add([element.pharmacyName, element.address, element.lonLocation, element.latLocation, `<a href="#" id="btnUpdatePharmacy${element.id}" data-toggle="modal" data-target="#updatePharmacyModal" onclick="prepareToUpdatePharmacy(this)" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-refresh"></span> EDIT </a>` +
                ` <a href="#" id="btnDeletePharmacy${element.id}" data-toggle="modal" data-target="#deletePharmacyModal" onclick="prepareToDeleteP(this)" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> DELETE</a>`
            ]).node().id = element.id;
            tpharmacy.draw();
        }
        $("#pharmacyTable").show();



    });
}
