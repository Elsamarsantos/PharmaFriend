var listAllPharmarcy = [];

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
            getPaginationPharmacy();
            getShortListPharmacy(1);

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
            getPaginationPharmacy();
            getShortListPharmacy(1);
        }
    })

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
            var pharmacy = `<tr class="mySearchModal" id="${data.id}"><td>` + data.pharmacyName + '</td><td>' + data.address + '</td><tr>';

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
        success: function (data) {
            getPaginationPharmacy();
            getShortListPharmacy(1);

        }
    })

}

// ------------------------------------------- Pharmacy NAV  UNDERCONSTRUCTION---------------------------------//
var aP = 11;
var yP = 1;
var numberOfPagesP = 0;
var positionNavP = 1;

function getPaginationPharmacy() {
    $("#paginationListPharmacy").empty();

    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/pharmacies/numberrow`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            numberOfPagesP = 1 + Math.floor(data / 10);
            console.log(data + " Farmacias get OK");

            aP = 11;
            yP = 1;
            fazNavPharmacy();
        }
    })
    return (numberOfPagesP, aP, yP);
}


function cleanNavPharmacy() {
    $("#paginationListPharmacy").empty();

}

function fazNavPharmacy() {

    $("#paginationListPharmacy").append(`<li class= "page-item" onclick="firstPharmacy()" > <a>First</a></li> `);
    $("#paginationListPharmacy").append(`<li class= "page-item" onclick="previousPharmacy()" > <a>Previous</a></li> `);

    for (i = yP; i <= numberOfPagesP; i++) {
        if (yP < aP) {
            $("#paginationListPharmacy").append(`<li id="${i}" class="page-item"><a  onclick="getShortListPharmacy(this)" class="page-link">${i}</a></li>`);
            yP++;
        }
        console.log(numberOfPagesP +"Paginas" +yP+" Y" +aP +" A");
    }
    
    $("#paginationListPharmacy").append(`<li class= "page-item" > <a onclick="nextPharmacy()" >Next</a></li > `);
    $("#paginationListPharmacy").append(`<li class= "page-item" > <a onclick="lastPharmacy()" >Last</a></li > `);
}

function nextPharmacy() {
    if (aP+ 11 < numberOfPagesP) {
        cleanNavPharmacy();
        aP = yP + 11;
        fazNavPharmacy();
    } else lastPharmacy();
    return (aP);
}

function previousPharmacy() {

    if (aP != 11 && (aP- 11 >10)) {
        cleanNavPharmacy();
        yP = aP - 21;
        aP = aP - 10;
        fazNavPharmacy();
    } else {firstPharmacy();}
    return (yP, aP);
}

function lastPharmacy() {

    cleanNavPharmacy();
    aP = numberOfPagesP;
    yP = numberOfPagesP - 11;
    fazNavPharmacy();
    return (aP, yP);
}

function firstPharmacy() {
    cleanNavPharmacy();
    aP = 11;
    yP = 1;
    fazNavPharmacy();
    return (aP, yP);
}


//--------------------------------------------------------------------------------------------------



function getShortListPharmacy(el) {
    $('#pharmacyTable').empty();
    console.log("ver el:", el);

    if (el == 1) {


        var numberId = 1
        var numberOffset = 1 + 10 * (numberId - 1);

        $('#pharmacyTable').append("<thead>" +
            "<tr>" +
            '<th scope="col">NAME</th>' +
            '<th scope="col">ADDRESS</th>' +
            '<th scope="col">LONGITUDE</th>' +
            '<th scope="col">LATITUDE</th>' +
            '<th scope="col">STOCK</th>' +
            '<th scope="col">ACTION</th>' +
            +"</tr>" +
            "</thead>")
        $.ajax({
            url: `http://localhost:8080/pharmafriend/api/pharmacies/consultshort?max=10&offset=${numberOffset}`,
            type: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (data) {
                console.log(data);
                for (i = 0; i < data.length; i++) {
                    const element = data[i];

                    var pharmacy = `<tr id="${element.id}"><td>` + element.pharmacyName + '</td><td>' + element.address +
                        '</td><td>' + element.lonLocation + '</td><td>' +
                        element.latLocation + '</td><td>' +
                        `<a href="#" id="btnStockPharmacy${element.id}" data-toggle="modal" data-target="#stockPharmacyModal" onclick="showPharmacyStock(this)" class="btn btn-info btn-sm"><span class="glyphicon glyphicon-search"></span> SHOW </a>` + '</td><td>' +
                        `<a href="#" id="btnUpdatePharmacy${element.id}" data-toggle="modal" data-target="#updatePharmacyModal" onclick="prepareToUpdatePharmacy(this)" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-refresh"></span></a>` +
                        ` <a href="#" id="btnDeletePharmacy${element.id}" data-toggle="modal" data-target="#deletePharmacyModal" onclick="prepareToDeleteP(this)" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span></a>`
                        + '</td></tr>';



                    $('#pharmacyTable').append(pharmacy);
                }

            }
        });
    }
    else {
        console.log("saida");
        var numberId = $(el).parent().attr('id');
        var numberOffset = 1 + 10 * (numberId - 1);

        $('#pharmacyTable').append("<thead>" +
            "<tr>" +
            '<th scope="col">NAME</th>' +
            '<th scope="col">ADDRESS</th>' +
            '<th scope="col">LONGITUDE</th>' +
            '<th scope="col">LATITUDE</th>' +
            '<th scope="col">STOCK</th>' +
            '<th scope="col">ACTION</th>' +
            +"</tr>" +
            "</thead>")

        $.ajax({
            url: `http://localhost:8080/pharmafriend/api/pharmacies/consultshort?max=10&offset=${numberOffset}`,
            type: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (data) {
                for (i = 0; i < data.length; i++) {
                    const element = data[i];

                    var pharmacy = `<tr id="${element.id}"><td>` + element.pharmacyName + '</td><td>' + element.address +
                        '</td><td>' + element.lonLocation + '</td><td>' +
                        element.latLocation + '</td><td>' +
                        `<a href="#" id="btnStockPharmacy${element.id}" data-toggle="modal" data-target="#stockPharmacyModal" onclick="showPharmacyStock(this)" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-search"></span> SHOW </a>` + '</td><td>' +
                        `<a href="#" id="btnUpdatePharmacy${element.id}" data-toggle="modal" data-target="#updatePharmacyModal" onclick="prepareToUpdatePharmacy(this)" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-refresh"></span></a>` +
                        ` <a href="#" id="btnDeletePharmacy${element.id}" data-toggle="modal" data-target="#deletePharmacyModal" onclick="prepareToDeleteP(this)" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span></a>`
                        + '</td></tr>';

                    $('#pharmacyTable').append(pharmacy);
                }

            }


        });
    }



}

function getPharmacyName() {
    var a = [];

    var letter = $("#inputSearchPharmacy").val();


    if (letter !== '') {
        $.ajax({
            url: `http://localhost:8080/pharmafriend/api/pharmacies/consultallname?letter=${letter}`,
            type: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (data) {
                console.log(data.length);

                for (i = 0; i < data.length; i++) {
                    a.push(data[i].pharmacyName);
                    var uniqueNames = [];

                    //to delete equal names
                    $.each(a, function (i, el) {
                        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
                    });

                    autocomplete(document.getElementById("inputSearchPharmacy"), uniqueNames.slice(0, 10));
                }
            }
        })

    };
}
$("#inputSearchPharmacy").on('input', function () {
    getPharmacyName()
});

//THIS IS MY AJAX TO GET A PHARMACY --

function searchPharmacy() {
    $("#pharmacyTablebyName").empty();
    var pharmacyName = $("#inputSearchPharmacy").val();

    if (pharmacyName == "") {
        alert("Please enter a valid input in the search field.");
        console.log("Not a valid input.")
    }

    else {
        $.ajax({
            url: `http://localhost:8080/pharmafriend/api/pharmacies/consult/${pharmacyName}`,
            type: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (data) {

                var pharmacy = '<tr class="mySearchModal"><td>' + data.pharmacyName + '</td><td>' + data.address +
                    '</td><td>' + data.lonLocation + '</td><td>' +
                    data.latLocation + '</td><tr>';
                $("#pharmacyTablebyName").append(pharmacy);

            }
        })
        $('#pharmacyTablebyName').append("<thead>" +
            "<tr>" +
            '<th scope="col">NAME</th>' +
            '<th scope="col">ADDRESS</th>' +
            '<th scope="col">LONGITUDE</th>' +
            '<th scope="col">LATITUDE</th>' +

            +"</tr>" +
            "</thead>");

        $("#searchPharmacyModal").modal();
    }




}










function showPharmacyStock(el) {
    $("#pharmacyStockTable").empty();
    $("#createButton").empty();

    var id = $(el).parent().parent().attr('id');

    var maxResult = $("#inputStockMax").val();
    var numberOffset = $("#inputStockOffSet").val();


    $("#pharmacyStockTable").append("<thead>" +
        "<tr>" +
        "<th scope='col'>NAME</th>" +
        "<th scope='col'>DOSE</th>" +
        "<th scope='col'>UNIT</th>" +
        "</tr>" +
        "</thead>");

    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/pharmacies/consultstock/${id}?max=${maxResult}&offset=${numberOffset}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            console.log(data);
            for (i = 0; i < data.length; i++) {

                var pharmacy = '<tr><td>' + data[i].medicineName +
                    '</td><td>' + data[i].dose + '</td><td>' +
                    data[i].volumeUnit + '</td><tr>';
                $("#pharmacyStockTable").append(pharmacy);
            }
        }
    })

    $("#createButton").append(`<a id=${id}>`+`<p>`+"<button onclick='showPharmacyStock(this)' class='btn btn-info glyphicon glyphicon-search'>" +"</button>"+"</p>"+"</a>")

}



