function geoFindMe() {
    var output = document.getElementById("out");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var mapDefaultZoom = 17;

        output.innerHTML = '<p>Latitude: ' + latitude + '° <br>Longitude: ' + longitude + '°</p>';

        /* -------------- MAPA --------------------*/
            var mapCenter = {lat: latitude, lng: longitude};
            var map = new google.maps.Map(document.getElementById('map'), {zoom: 17, center: mapCenter});

        /* -------------MArcador-----------------------*/        

            var marker = new google.maps.Marker({position: mapCenter, map: map});       
    }

    function error() {
        output.innerHTML = "Unable to retrieve your location, chek your internet connection";
    }

    output.innerHTML = "<p>A Localizar…</p>";
    navigator.geolocation.getCurrentPosition(success, error);
}