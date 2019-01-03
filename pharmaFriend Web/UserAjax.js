// THIS IS MY AJAX TO CREATE A USER
// function createMedicine(newMedicine) {


//     $.ajax({
//         url: `http://localhost:8080/pharmafriend/api/medicines/create`,
//         type: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         contentType: 'application/json',
//         data: JSON.stringify(newMedicine),
//         success: function (data) {
//             console.log("Sucess:" + data);
//         }
//     })
// };

// THIS IS MY AJAX TO GET A USER

// function searchMedicine() {

//     console.log("Preparing for sucess:");

//     $.ajax({
//         url: `http://localhost:8080/pharmafriend/api/medicines/listmedicine?medicineName=${medicineName}`,
//         type: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         success: function (data) {
//             for (i = 0; i < data.length; i++) {

//                 var medicine = '<tr><td>' + data[i].medicineName + '</td><td>' + data[i].dose +
//                     '</td><td>' + data[i].volumeUnit + '</td><td>' +
//                     data[i].pvp + '</td><td>' +
//                     data[i].reImbursementRate + '</td><tr>';

//                 $('#medicineTablebyName').append(medicine);
//             }
//         }
//     })
// }




// THIS IS MY AJAX TO UPDATE A MEDICINE
// function updateMedicine(p) {
//     console.log("Preparing for sucess:" + p);
//     $.ajax({
//         url: "http://localhost:8080/pharmafriend/api/medicines/",
//         type: 'PUT',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         contentType: 'application/json',
//         data: JSON.stringify(p),
//         success: function (data) {
//             console.log(data);
//         }
//     })
// }

// THIS IS MY AJAX TO DELETE A USER
// function deleteMedicine(p) {
//     console.log("Preparing for sucess:" + p);
//     $.ajax({
//         url: "http://localhost:8080/pharmafriend/api/medicine/delete" + medicineId,
//         type: 'DELETE',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         contentType: 'application/json',
//         data: JSON.stringify(p),
//         success: function (n) {
//             console.log(n);

//         }
//     })
// }

// THIS IS MY AJAX TO GET ALL USER IN MY SQL TABLE
function searchAllUser() {
    console.log("entrou no funcao");

    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/user/consultall",
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            
            for (i = 0; i < data.length; i++) {
                console.log("entrou no for");
                const element = data[i];
                var user = '<tr><td>' + element.userName + '</td><td>' + element.login +
                    '</td><td>' + element.passWord + '</td><td>' +
                    element.userAccess + '</td><td>' +
                    element.address + '</td><td>' +
                    '<a href="#" data-toggle="modal" data-target="#updateMedicineModal" id="btnUpdateMedicine" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-refresh"></span> UPDATE</a>' +
                    ' <a data-toggle="modal" data-target="#deleteMedicineModal" id="btnDeleteMedicine" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> DELETE</a>'
                    + '</td></tr>'
                $("#userTable").append(user);

            };
            $('#userTable').DataTable();
        }


    })

};

// function getMedicineName() {
//     var a = [];

//     $.ajax({
//         url: "http://localhost:8080/pharmafriend/api/medicines/consultall",
//         type: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         success: function (data) {

//             for (i = 0; i < data.length; i++) {
//                 console.log("ola");
//                 a.push(data[i].medicineName);
//                 var uniqueNames = [];
//                 $.each(a, function (i, el) {
//                     if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
//                 });

//                 autocomplete(document.getElementById("myInput"), uniqueNames);
//             }
//         }
//     })
// }
// getMedicineName();