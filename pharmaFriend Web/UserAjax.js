// THIS IS MY AJAX TO CREATE A USER
function createUser() {
    var newUser = {
        "userName": $("#username"), "login": $("#login"), "passWord": $("#passWord"), "userAccess": $("#userAccess"), "address": $("#address")
        , "lonLocation": $("#userlonLocation"), "latLocation": $("#userlatLocation")
    };


    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/user/create`,
        type: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',
        data: JSON.stringify(newUser),
        success: function (data) {
            console.log(data);
        }
    })
    home();
};

// THIS IS MY AJAX TO GET A USER and Password

// $("btnLogin").click(function searchUser() {


//     $.ajax({
//         url: `http://localhost:8080/pharmafriend/api/user/consultuser?login=${emailUserinput}`,
//         type: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         success: function (data) {

//             if (data == null) {
//                 $("#createUserModal").show();
//             }
//             else {
//                 getpassword();

//             }
//         }
//     })
// });

function getpassword() {
    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/user/consulttologin?login=${emailUserinput}&pass=${passUserinput}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {

        }
    })
};





var listAllUsers = [];
// THIS IS MY AJAX TO GET ALL USER IN MY SQL TABLE
function searchAllUser() {

    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/user/consultall",
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            listAllUsers = data;



        }

    });
} searchAllUser();
setInterval(() => {
    searchAllMedicine();

}, 1000 * 120);

function getListUser() {

    $("#userTable").show();

    for (i = 0; i < listAllUsers.length; i++) {

        const element = listAllUsers[i];
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


