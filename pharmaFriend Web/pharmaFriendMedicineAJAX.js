// THIS IS MY AJAX TO CREATE A MEDICINE
function createMedicine(p) {
    console.log(p);
    $.ajax({
        url: "http://localhost:8080/pharmaFriend/api/createMedicine",
        type: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(p),
        success: function (n) {
            console.log(n);
        }
    })
}

// THIS IS MY AJAX TO GET A MEDICINE
function searchMedicine(p) {
    $.ajax({
        url: "http://localhost:8080/pharmaFriend/api/" + medicineName,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',
        data: JSON.stringify(p),
        success: function (data) {
            console.log(data);
            $("#name").val(data.name);
            $("#type").val(data.type);
            $("#pvp").val(data.pvp);
        }
    })
}

// THIS IS MY AJAX TO UPDATE A MEDICINE
function updateMedicine(p) {
    $.ajax({
        url: "http://localhost:8080/pharmaFriend/api/updateMedicine",
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
    $.ajax({
        url: "http://localhost:8080/pharmaFriend/api/" + medicineName,
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

