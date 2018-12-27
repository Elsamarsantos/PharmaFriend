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

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                /*insert the value for the autocomplete text field:*/a
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }


    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });

    

    

}

function searchByName() {
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

                a.push(data[i].medicineName);
               

            autocomplete(document.getElementById("myInput"), a);

            }


        }

    })
    
}
searchByName();
