
/* ----------------------------- LOCALIZACAO -------------------------------------- */
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

/*  ------------------------------ MAPA ------------------------------------ */

        map = new ol.Map({
            target: "map",
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM({
                        url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    })
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([longitude, latitude]),
                zoom: mapDefaultZoom
            })
        });

/* ------------------------------------ MARCADOR --------------------------------------------*/
        var vectorLayer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.transform([parseFloat(longitude), parseFloat(latitude)], 'EPSG:4326', 'EPSG:3857')),
                })]
            }),
            style: new ol.style.Style({
                image: new ol.style.Icon({
                    anchor: [0.5, 0.5],
                    anchorXUnits: "fraction",
                    anchorYUnits: "fraction",
                    src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg",

         //############################## Tentar mudar o icone ##########################################33            
                   // height:"200",
                   // width:"200"
                   // https://image.flaticon.com/icons/svg/34/34343.svg
                   // icons: https://www.flaticon.com/free-icon/map-marker_33942
                })
            })
        });
        map.addLayer(vectorLayer);
    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }

    output.innerHTML = "<p>A Localizar...</p>";

    navigator.geolocation.getCurrentPosition(success, error);
}
