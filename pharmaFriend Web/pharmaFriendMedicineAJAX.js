// THIS IS MY AJAX TO CREATE A MEDICINE
function createMedicine(p) {
    console.log("Preparing for sucess:" + p);
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/medicines/create",
        type: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(p),
        success: function (data) {
            console.log("Sucess:" + data);
        }
    })
}

// THIS IS MY AJAX TO GET A MEDICINE
function searchMedicine(p) {
    console.log("Preparing for sucess:" + p);
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/medicines/consultbyname?medicineName=" + medicineName,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            $("#searchMedicineModalDiv").append("Name: " + data.medicineName + '<br>' + "Dose: " + data.dose + '<br>' +
                "Volume Units: " + data.volumeUnit + '<br>' + "PVP: " + data.pvp + '<br>' + "Reiumbursement: " + data.reImbursementRate);
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

// THIS IS MY AJAX TO DELETE A MEDICINE
function deleteMedicine(p) {
    console.log("Preparing for sucess:" + p);
    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/medicine/delete" + medicineId,
        type: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',
        data: JSON.stringify(p),
        success: function (n) {
            console.log(n);

        }
    })
}

// THIS IS MY AJAX TO GET ALL MEDICINES IN MY SQL TABLE
function searchAllMedicine(p) {

    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/medicines/consultall",
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            console.log("Medicine total number is " + data.length + " but I'm showing only 50");
            for (i = 0; i < 50; i++) {
                const element = data[i];
                var medicine = '<tr><td>' + element.medicineName + '</td><td>' + element.dose +
                    '</td><td>' + element.volumeUnit + '</td><td>' +
                    element.pvp + '</td><td>' +
                    element.reImbursementRate + '</td><td>' +
                    '<a href="#" data-toggle="modal" data-target="#updateMedicineModal" id="btnUpdateMedicine" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-refresh"></span> UPDATE</a>' +
                    ' <a href="#" data-toggle="modal" data-target="#deleteMedicineModal" id="btnDeleteMedicine" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> DELETE</a>'
                    + '</td></tr>'
                $("#medicineTable").append(medicine);
            };

        }
    })
}

$(document).ready(function () {
    $("#myInput").keyup(function () {
        $("#result").html("");
        var input, filter, a;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
       
        $.ajax({
            url: "http://localhost:8080/pharmafriend/api/medicines/consultall",
            type: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (data) {

                for (i = 0; i < 10; i++) {

                    a = data[i].medicineName.charAt(0);
    
                    console.log("show:" + a);

                    
                    if (a.toUpperCase().localeCompare(filter)==0) {
                        //if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            $("#result").append('<li class= "list-group-item>' + data[i].medicineName + '</li>');

                            //b.style.display = "";
                    }

                    }
                }
            })
    })
})


// $(document).ready(function () {
//     $("#myInput").keyup(function () {
//         $("#result").html("");
//         var searchField = $("#search").val();
//         var expression = new RegExp(searchField, "i");
//         $.ajax({
//             url: "http://localhost:8080/pharmafriend/api/medicines/consultall",
//             type: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             success: function (data) {


//                 $.each(data, function () {
//                     console.log(data.medicineName.search(expression))
//                     if (data.medicineName.search(expression) != -1) {
//                         $("#result").append('<li class= "list-group-item>' + data.medicineName + '</li>');
//                     }


//                 });
//             }
//         });




//     })
// })