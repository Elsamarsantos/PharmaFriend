var listAllMedicines = [];





// THIS IS MY AJAX TO CREATE A MEDICINE
$("#btnCreateMedicine").click(function createMedicine(newMedicine) {

    var newMedicine = {
        "medicineName": $("#name").val(), "dose": $("#dose").val(),
        "volumeUnit": $("#units").val(), "pvp": $("#pvp").val(), "reImbursementRate": $("#rrate").val()
    };
    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/medicines/create`,
        type: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',
        data: JSON.stringify(newMedicine),
        success: function (data) {
            console.log("Sucess:" + data);
            getPagination();
            getShortList(1);
        }
    })
});


// THIS IS MY AJAX TO UPDATE A MEDICINE
function prepareToUpdate(el) {
    $('#tableToUpdate').empty();
    var id = $(el).parent().parent().attr('id');

    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/medicines/consultid/${id}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {

            var medicine = `<tr id="${data.id}"></tr>` +
                `<tr><td>` + `<input id="updatename" type="text" value="${data.medicineName}"/>` + "</td></tr>" +
                `<tr><td>` + `<input id="updatedose" type="text" value="${data.dose}"/>` + "</td></tr>" +
                `<tr><td>` + `<input id="updateunits" type="text" value="${data.volumeUnit}"/>` + "</td></tr>" +
                `<tr><td>` + `<input id="updatepvp" type="text" value="${data.pvp}" />` + "</td><td>" +
                `<tr><td>` + `<input id="updaterrate" type="text" value="${data.reImbursementRate}" />` + '</td></tr>';

            $('#tableToUpdate').append(medicine);
        }
    })
}


$("#btnUpdateMedicine").click(function updateMedicine() {

    var id = $('#tableToUpdate tr').attr('id');
    console.log("ver id" + id);
    var myMedicine = {
        "id": id, "medicineName": $("#updatename").val(), "dose": $("#updatedose").val(),
        "volumeUnit": $("#updateunits").val(), "pvp": $("#updatepvp").val(), "reImbursementRate": $("#updaterrate").val()
    };
    console.log("ver medicine: " + myMedicine)
    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/medicines/update`,
        type: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        contentType: 'application/json',
        data: JSON.stringify(myMedicine),
        success: function (data) {
            console.log("medicine update");
        }
    });
    getPagination();
    getShortList(1);
});

function prepareToDeleteM(el) {
    $('#medicineTableToDelete').empty();
    var id = $(el).parent().parent().attr('id');

    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/medicines/consultid/${id}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            console.log("ver preparar", data)
            var medicine = `<tr id="${data.id}"><td>` + data.medicineName + '</td><td>' + data.dose +
                '</td><td>' + data.volumeUnit + '</td><tr>';

            $('#medicineTableToDelete').append(medicine);
        }
    })
};

// THIS IS MY AJAX TO DELETE A MEDICINE
function deleteMedicine() {
    var id = $('#medicineTableToDelete tr').attr('id');
    console.log("Preparing to delete:" + id);
    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/medicines/delete/${id}`,
        type: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',

    })
    getPagination();
    getShortList(1);
}



// ------------------------------------------- MEDICINE NAV  UNDERCONSTRUCTION---------------------------------//
var a = 11;
var y = 1;
var numberOfPages = 0;
var positionNav = 1;

function getPagination() {



    $("#paginationList").empty();



    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/medicines/numberrow`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            numberOfPages = 1 + Math.floor(data / 30);
            console.log(data + " texto");
            //nao esquecer de ver este botao ai botao filho
            // $(`#${parseInt(numberOfPages)}`).after('<li id="nextLi" class="page-item"><a class="page-link" href="#">Next</a></li>');
            a = 11;
            y = 1;
            fazNav();
        }

    })
    return (numberOfPages, a, y);
}


function cleanNav() {
    $("#paginationList").empty();

}

function fazNav() {

    $("#paginationList").append(`<li class="page-item" onclick="first()"><a>First</a></li>`);
    $("#paginationList").append(`<li class="page-item" onclick="previous()"><a>Previous</a></li>`);

    for (i = y; i < numberOfPages; i++) {
        if (y < a) {
            $("#paginationList").append(`<li id="${i}" class="page-item"><a  onclick="getShortList(this)" class="page-link">${i}</a></li>`);
            y++;
        }
        console.log(y);
        console.log(a + " A");
    }

    $("#paginationList").append(`<li class="page-item"><a onclick="next()" >Next</a></li>`);
    $("#paginationList").append(`<li class="page-item"><a onclick="last()" >Last</a></li>`);
}

function next() {
    if (a != numberOfPages) {
        cleanNav();
        a = y + 11;
        fazNav();
    };
    return (a)
}

function previous() {

    if (a != 11) {
        cleanNav();
        y = a - 21;
        a = a - 10;
        fazNav();
    }
    return (y, a);
}

function last() {

    cleanNav();
    a = numberOfPages;
    y = numberOfPages - 11;
    fazNav();
    return (a, y)
}

function first() {
    cleanNav();
    a = 11;
    y = 1;
    fazNav();
    return (a, y)
}


//--------------------------------------------------------------------------------------------------



function getShortList(el) {
    $('#medicineTable').empty();
    console.log("ver el:", el);

    if (el == 1) {


        var numberId = 1
        var numberOffset = 1 + 30 * (numberId - 1);

        $('#medicineTable').append("<thead>" +
            "<tr>" +
            '<th scope="col">NAME</th>' +
            '<th scope="col">DOSE</th>' +
            '<th scope="col">UNITS</th>' +
            '<th scope="col">PVP</th>' +
            '<th scope="col">REIMBURSEMENT</th>' +
            '<th scope="col">ACTION</th>' +
            +"</tr>" +
            "</thead>")
        $.ajax({
            url: `http://localhost:8080/pharmafriend/api/medicines/consultshort?max=30&offset=${numberOffset}`,
            type: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (data) {
                console.log(data);
                for (i = 0; i < data.length; i++) {
                    const element = data[i];

                    var medicine = `<tr id="${element.id}"><td>` + element.medicineName + '</td><td>' + element.dose +
                        '</td><td>' + element.volumeUnit + '</td><td>' +
                        element.pvp + '</td><td>' +
                        element.reImbursementRate + '</td><td>' +
                        `<a href="#" data-toggle="modal" data-target="#updateMedicineModal" id="btnUpdateMedicine${element.id}" onclick= "prepareToUpdate(this)" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-refresh"></span> EDIT</a>` +
                        ` <a data-toggle="modal" data-target="#deleteMedicineModal" id="btnDeleteMedicine${element.id}" onclick="prepareToDeleteM(this)"class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> DELETE</a>`
                        + '</td></tr>';
                    $('#medicineTable').append(medicine);
                }

            }
        });
    }
    else {
        console.log("saida");


        var numberId = $(el).parent().attr('id');



        var numberOffset = 1 + 30 * (numberId - 1);

        $('#medicineTable').append("<thead>" +
            "<tr>" +
            '<th scope="col">NAME</th>' +
            '<th scope="col">DOSE</th>' +
            '<th scope="col">UNITS</th>' +
            '<th scope="col">PVP</th>' +
            '<th scope="col">REIMBURSEMENT</th>' +
            '<th scope="col">ACTION</th>' +
            +"</tr>" +
            "</thead>")
        $.ajax({
            url: `http://localhost:8080/pharmafriend/api/medicines/consultshort?max=30&offset=${numberOffset}`,
            type: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (data) {
                for (i = 0; i < data.length; i++) {
                    const element = data[i];

                    var medicine = `<tr id="${element.id}"><td>` + element.medicineName + '</td><td>' + element.dose +
                        '</td><td>' + element.volumeUnit + '</td><td>' +
                        element.pvp + '</td><td>' +
                        element.reImbursementRate + '</td><td>' +
                        `<a href="#" data-toggle="modal" data-target="#updateMedicineModal" id="btnUpdateMedicine${element.id}" onclick= "prepareToUpdate(this)" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-refresh"></span> EDIT</a>` +
                        ` <a data-toggle="modal" data-target="#deleteMedicineModal" id="btnDeleteMedicine${element.id}" onclick="prepareToDeleteM(this)"class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> DELETE</a>`
                        + '</td></tr>';
                    $('#medicineTable').append(medicine);
                }

            }


        });
    }



}

function getMedicineName() {
    var a = [];

    var letter = $("#inputSearchMedicine").val();


    if (letter !== '') {
        $.ajax({
            url: `http://localhost:8080/pharmafriend/api/medicines/consultallname?letter=${letter}`,
            type: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (data) {
                console.log(data.length);

                for (i = 0; i < data.length; i++) {
                    a.push(data[i].medicineName);
                    var uniqueNames = [];

                    //to delete equal names
                    $.each(a, function (i, el) {
                        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
                    });

                    autocomplete(document.getElementById("inputSearchMedicine"), uniqueNames.slice(0, 10));
                }
            }
        })

    };
}
$("#inputSearchMedicine").on('input', function () {
    getMedicineName()
});

//THIS IS MY AJAX TO GET A MEDICINE --

function searchMedicine() {

    console.log("Preparing for sucess:");

    var medicineName = $("#inputSearchMedicine").val();
    console.log(medicineName);
    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/medicines/listmedicine?medicineName=${medicineName}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            for (i = 0; i < data.length; i++) {

                var medicine = '<tr><td>' + data[i].medicineName + '</td><td>' + data[i].dose +
                    '</td><td>' + data[i].volumeUnit + '</td><td>' +
                    data[i].pvp + '</td><td>' +
                    data[i].reImbursementRate + '</td><tr>';
                $("#medicineTablebyName").append(medicine);
            }
        }
    })
}  
