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

$("#btnLogin").click(function searchUser() {
    console.log("esta funcao esta a funcionar");

    var email = $("#emailUserinput").val()

    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/user/consultbylogin?login=${email}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            console.log(data);
            if (data.login !== null) {
                getpassword();
            }

        }, error: function (err) {
            $('#createUserModal').modal('toggle');
            $('#createUserModal').modal('show');
            // $('#createUserModal').modal('hide');

        }
    })
});

function getpassword() {
    var email = $("#emailUserinput").val();
    var pass = $("#passUserinput").val();
    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/user/consulttologin?login=${email}&pass=${pass}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            home();
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
    searchAllUser();

}, 1000 * 360);

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


