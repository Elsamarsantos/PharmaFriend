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
            
        }
    })
});





// THIS IS MY AJAX TO UPDATE A MEDICINE
function prepareToUpdate(el) {


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
        success: function (myMedicine) {
            console.log(myMedicine);
        }
    });
});

function prepareToDeleteM(el) {

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
}

var listAllMedicines = [];

// THIS IS MY AJAX TO GET ALL MEDICINES IN MY SQL TABLE
function searchAllMedicine() {

    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/medicines/consultall",
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {

            listAllMedicines = data;

        }

    })


}

searchAllMedicine();
setInterval(() => {
    searchAllMedicine();
    console.log('novo update');
}, 1000 * 360);




function getListMedicines() {

   
    $("#medicineTable").show();
    
    

    for (i = 0; i < listAllMedicines.length; i++) {

        const element = listAllMedicines[i];


        var medicine = `<tr id="${element.id}"><td>` + element.medicineName + '</td><td>' + element.dose +
            '</td><td>' + element.volumeUnit + '</td><td>' +
            element.pvp + '</td><td>' +
            element.reImbursementRate + '</td><td>' +
            `<a href="#" data-toggle="modal" data-target="#updateMedicineModal" id="btnUpdateMedicine${element.id}" onclick= "prepareToUpdate(this)" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-refresh"></span> UPDATE</a>` +
            ` <a data-toggle="modal" data-target="#deleteMedicineModal" id="btnDeleteMedicine${element.id}" onclick="prepareToDeleteM(this)"class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> DELETE</a>`
            + '</td></tr>';
            $('#medicineTable').append(medicine);
    }

    $('#medicineTable').DataTable();

};





