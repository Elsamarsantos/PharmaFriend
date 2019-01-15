// THIS IS MY JQUERY CODE FOR MY MAIN PAGE AND ITS USED FOR ITS MAIN FUNCTION//
$(document).ready(function () {
    $("#userLogo").hide();
    $("#results").hide();
    $("#mypharmaform1").hide();
    $("#medicineListBtn").hide();
    $("#pharmacyListBtn").hide();
    $("#homeBtn").hide();
    $("#benvindo").hide();
    $("#getDose").on("change", getVolume);
    $("#userListBtn").hide();
    $("#logoff").hide();
});

var points = [];
var arrayDistance = [];

$("#btnMainSearch").click(function mainSearch() {



    if (($("#medicineName").val() != "") && ($("#userdistance").val() != "")) {

        var output = document.getElementById("out");

        if (!navigator.geolocation) {
            output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
        }

        function success(position) {

            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var latlong = L.latLng(latitude, longitude);
            var medicineDose = $("#getDose").val();
            var medicineVolume = $("#getVolume").val();
            var inputmedicine = $("#medicineName").val();
            
            /*------ Buy Medicine Construtor------*/
            var buyMedNameOutput = document.getElementById("buyMedName");
            var buyMedDose = document.getElementById("buyMedDose");
            var buyMedVolume = document.getElementById("buyMedVolume");
            buyMedNameOutput.innerHTML = ("<p>" + inputmedicine + " </p>");
            buyMedDose.innerHTML = ("<p>" + medicineDose + " </p>");
            buyMedVolume.innerHTML = ("<p>" + medicineVolume + "</p>");

            var distance = $("#userdistance").val();
            $("#mypharmaform1").hide();
            $("#results").show();


            /*  ------------------------------------- MAP ----------------------------------------------- */

            var map = L.map('map', { center: [latitude, longitude], zoom: 17 });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            /* ------------------------------------ MARKERS --------------------------------------------*/

            /*---------- Person Marker ---------- */
            var personMarker = L.AwesomeMarkers.icon({
                icon: 'street-view',
                prefix: 'fa'
            });

            /*------------ Pharmacy Marker ------------ */
            var pharmacyMarker = L.AwesomeMarkers.icon({
                icon: 'plus-square',
                prefix: 'fa',
                spin: true
            });

            var pharmacyMarkeroff = L.AwesomeMarkers.icon({
                icon: 'plus-square',
                prefix: 'fa',

            });


            L.marker([latitude, longitude], { icon: personMarker }).addTo(map)
                .bindPopup('You ! ')
                .openPopup();

            $.ajax({

                url: `http://localhost:8080/pharmafriend/api/request?medicinename=${inputmedicine}&dose=${medicineDose}&volume=${medicineVolume}&lonlocation=${longitude}&latlocation=${latitude}&userdistance=${distance}`,
                type: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                    console.log(data);
                    

                    for (i = 0; i < data.length; i++) {

                        // Marcador das Farmacias com medicamento

                        var point = L.marker([data[i].latLocation, data[i].lonLocation], { icon: pharmacyMarker }).addTo(map)
                            .bindPopup(data[i].pharmacyName + ' <br> ' + data[i].address).openPopup();

                        // CALCULO DA DISTANCIA //

                        var p = 0.017453292519943295;    // Math.PI / 180
                        var c = Math.cos;
                        var a = 0.5 - c((data[i].latLocation - latitude) * p) / 2 +
                            c(latitude * p) * c(data[i].latLocation * p) *
                            (1 - c((data[i].lonLocation - longitude) * p)) / 2;

                        var distance = 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km                        
                        var dist = distance.toPrecision(3);
                        arrayDistance[i] = ("At "+dist+ " kilometres you have:" +"<p>" +data[i].pharmacyName +"<p>Adress: " +data[i].address+";");
                    }
                    
                    // Arranjar os valores undifined e variáveis que envia para o email
                    arrayDistance.sort();
                    var name = document.getElementById("pharmacy1");
                    name.innerHTML = ("<p>" +arrayDistance[0] + " </p>");
                    var name = document.getElementById("pharmacy2");
                    name.innerHTML = ("<p>" +arrayDistance[1] + " </p>");
                    var name = document.getElementById("pharmacy3");
                    name.innerHTML = ("<p>" +arrayDistance[2] + " </p>");
                }

            })
            map.setView({lat: latitude, lng:longitude}, 15);

            // Comandos Para o Mapa
            // getCenter()
            // map.flyTo([latitude, longitude], 17);
            // map.removeLayer(Layer)
            // map.flyTo(<LatLng> latlng, <Number> zoom?, <Zoom/pan options> options?)
            // map.distance(<latlong> latlng1, <LatLng> latlng2)
        }


        function error() {
            output.innerHTML = "Unable to retrieve your location, please check your internet connection";
        }


        navigator.geolocation.getCurrentPosition(success, error);

    }
    else {
        if ($("#medicineName").val() == "") {
            alert("Please insert a medicine in search field");
        }
        else {
            alert("Please insert some distance");
        }
    }

});





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
                    getDose();
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
        url: "http://localhost:8080/pharmafriend/api/medicines/consultallname",
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {

            for (i = 0; i < data.length; i++) {
                a.push(data[i]);
                var uniqueNames = [];

                //to delete equal names
                $.each(a, function (i, el) {
                    if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
                });

                autocomplete(document.getElementById("medicineName"), uniqueNames);
            }
        }
    })
};
searchByName();



function getDose() {

    var medicineName = $("#medicineName").val();

    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/medicines/listmedicine?medicineName=${medicineName}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {

            for (i = 0; i < data.length; i++) {

                $('#getDose').append("<option>" + data[i].dose + "</option>");
            }
        }
    })
};

function getVolume() {

    var medicineName = $("#medicineName").val();
    var medicineDose = $("#getDose").val();

    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/medicines/medicinebydose?medicineName=${medicineName}&dose=${medicineDose}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            console.log("ver data " + data);

            for (i = 0; i < data.length; i++) {


                $('#getVolume').append("<option>" + data[i].volumeUnit + "</option>");
            }

            console.log("ver blister " + data[0].volumeUnit);

        }
    })

};

// THIS IS MY FUNCTION TO SEND THE EMAIL;

function sendTheEmail () {
    console.log("Sending the Email to:" + $("#theEmail").val);
    var template_params = {
        "reply_to": $('#theEmail'),
        "pharmacy1": $("#pharmacy1").html().replace("<p>","").replace("</p>",""),
        "pharmacy2": $("#pharmacy2").html().replace("<p>","").replace("</p>",""),
        "pharmacy3": $("#pharmacy3").html().replace("<p>","").replace("</p>",""),
        "pharmacy1loc": $("#pharmacy1loc").html().replace("<p>","").replace("</p>",""),
        "pharmacy2loc": $("#pharmacy2loc").html().replace("<p>","").replace("</p>",""),
        "pharmacy3loc": $("#pharmacy3loc").html().replace("<p>","").replace("</p>",""),
        
     }
     
     var service_id = "default_service";
     var template_id = "template_QfB5vZLA";
     emailjs.send(service_id, template_id, template_params);    
}

