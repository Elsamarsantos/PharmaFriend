// THIS IS MY AJAX TO CREATE A MEDICINE
function createMedicine(newMedicine) {


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
};

// THIS IS MY AJAX TO GET A MEDICINE

function searchMedicine() {

    console.log("Preparing for sucess:");

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

                $('#medicineTablebyName').append(medicine);
            }
        }
    })
}




// THIS IS MY AJAX TO UPDATE A MEDICINE
function updateMedicine(p) {
    console.log("Preparing for sucess:" + p);
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/medicines/",
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

}

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
            
           listAllMedicines=data;  
 
        }
           
    })
    
    
}

searchAllMedicine();
setInterval(() => {
    searchAllMedicine();
    console.log('novo update')
}, 1000*120);

function getListMedicines() {

    console.log(listAllMedicines[1]);

    for (i = 0; i < listAllMedicines.length; i++) {

        const element = listAllMedicines[i];
        
    
        var medicine = `<tr id="${element.id}"><td>` + element.medicineName + '</td><td>' + element.dose +
            '</td><td>' + element.volumeUnit + '</td><td>' +
            element.pvp + '</td><td>' +
            element.reImbursementRate + '</td><td>' +
            '<a href="#" data-toggle="modal" data-target="#updateMedicineModal" id="btnUpdateMedicine" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-refresh"></span> UPDATE</a>' +
            ` <a data-toggle="modal" data-target="#deleteMedicineModal" id="btnDeleteMedicine${element.id}" onclick="prepareToDeleteM(this)"class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> DELETE</a>`
            + '</td></tr>';
        $("#medicineTable").append(medicine);
    }

    $('#medicineTable').DataTable();

}

function getMedicineName() {
    var a = [];

    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/medicines/consultall",
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {

            for (i = 0; i < data.length; i++) {
                console.log("ola");
                a.push(data[i].medicineName);
                var uniqueNames = [];
                $.each(a, function (i, el) {
                    if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
                });

                autocomplete(document.getElementById("myInput"), uniqueNames);
            }
        }
    })
}
getMedicineName();
