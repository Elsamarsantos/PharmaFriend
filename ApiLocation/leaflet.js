/* ------------------------------------------- LOCALIZATION -------------------------------------- */
function geoFindMe() {
    var output = document.getElementById("out");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        output.innerHTML = '<p>Latitude: ' + latitude + '° <br>Longitude: ' + longitude + '°</p>';

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


        L.marker([latitude, longitude], {icon: personMarker}).addTo(map)
            .bindPopup('You ! ')
            .openPopup();

            /* TESTE PHARMACY DOMUS MASSAMA */
        L.marker([38.7540326, -9.2799262], {icon: pharmacyMarker}).addTo(map)
            .bindPopup('Pharmacy ! <br> Nome: Domus ')
          //  .openPopup();

            /* TESTE PHARMACY ONEILL */
            L.marker([38.7548488, -9.2754248], {icon: pharmacyMarker}).addTo(map)
            .bindPopup('Pharmacy Oneill<br><br>Dispõe do medicamento pesquisado! ')
           // .openPopup();

            /* TESTE PHARMACY  PINTO LEAL*/
            L.marker([38.7528643, -9.2843015], {icon: pharmacyMarker}).addTo(map)
            .bindPopup('Pharmacy ! <br> Nome: Pinto Leal ')
           // .openPopup();

            /* TESTE PHARMACY QUINTA DAS FLORES*/
            L.marker([38.7575282, -9.2804767], {icon: pharmacyMarkeroff}).addTo(map)
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


    }

    function error() {
        output.innerHTML = "Unable to retrieve your location, please chek your internet connection";
    }

    output.innerHTML = "<p>Getting Location...</p>";
    navigator.geolocation.getCurrentPosition(success, error);
}