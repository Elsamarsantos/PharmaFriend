// THIS IS MY JQUERY CODE FOR MY MAIN PAGE AND ITS USED FOR ITS MAIN FUNCTION//

$("#btnMainSearch").click(function mainSearch() {

    if ($("#medicineName").val() != "") {


        let element = document.getElementById("btnMainSearch");
        element.setAttribute('data-toggle', "modal");

        var output = document.getElementById("out");

        if (!navigator.geolocation) {
            output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
        }

        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            output.innerHTML = '<p>Latitude: ' + latitude + '° <br>Longitude: ' + longitude + '°</p>';
            var inputmedicine = $("#medicineName").val();
            var distance = $("#userdistance").val();




            /*  ------------------------------------- MAP ----------------------------------------------- */

            var map = L.map('map').setView([latitude, longitude], 17);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            /* ------------------------------------ MARKER --------------------------------------------*/



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

            /* TESTE PHARMACY DOMUS MASSAMA */
            L.marker([38.7540326, -9.2799262], { icon: pharmacyMarker }).addTo(map)
                .bindPopup('Pharmacy ! <br> Nome: Domus ')
            //  .openPopup();

            /* TESTE PHARMACY ONEILL */
            L.marker([38.7548488, -9.2754248], { icon: pharmacyMarker }).addTo(map)
                .bindPopup('Pharmacy Oneill<br><br>Dispõe do medicamento pesquisado! ')
            // .openPopup();

            /* TESTE PHARMACY  PINTO LEAL*/
            L.marker([38.7528643, -9.2843015], { icon: pharmacyMarker }).addTo(map)
                .bindPopup('Pharmacy ! <br> Nome: Pinto Leal ')
            // .openPopup();

            /* TESTE PHARMACY QUINTA DAS FLORES*/
            L.marker([38.7575282, -9.2804767], { icon: pharmacyMarkeroff }).addTo(map)
                .bindPopup('Pharmacy ! <br> Nome: Quinta das Flores <br>Horário: Fechado')
            //.openPopup();
            /* ------------------------------- ADD PHARMACY -------------------------------------- 
         
                                Construtor de localização e MArcadores                            */

            /* var nrPharmacy=x;
             for (i=0, i==x, i++){
             var pharmacylat = 
           
             L.marker([latitude, longitude]).addTo(map)
             .bindPopup('Nome farmacia <br> TEXTO etc ')
             .openPopup();
             }
             */
            
            /* ------------------------------- search medicine in pharmacies ------------------     */
            $.ajax({

                url: `http://localhost:8080/pharmafriend/api/request?medicinename=${inputmedicine}&lonlocation=${longitude}&latlocation=${latitude}&userdistance=${distance}`,
                type: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                    console.log("show" + data);

                    for (i = 0; i < data.lenght; i++) {
                        L.marker([data[i].latLocation, data[i].lonLocation], { icon: pharmacyMarker }).addTo(map)
                            .bindPopup(data[i].pharmacyName + ' <br> ' + data[i].address)
                    }

                }
            })

        }

        function error() {
            output.innerHTML = "Unable to retrieve your location, please chek your internet connection";
        }

        output.innerHTML = "<p>Getting Location...</p>";
        navigator.geolocation.getCurrentPosition(success, error);
    }
    else {

        alert("Please insert a medicine in search field");
        let element = document.getElementById("btnMainSearch");
        element.setAttribute('data-toggle', "");
    }
});

// HERE I WILL WIRTE THE CODE FOR MY GEOLOC API COMBINE MY LOC WITH THE LOC OF MY SURROUUNDING PHARMACIES



//ONCE I HAVE MY LOC I WILL USE THE CLASS NEAR LOCATION TO FIND THE 3 MOST CLOSE PHARMACIES

