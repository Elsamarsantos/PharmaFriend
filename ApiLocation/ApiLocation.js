$(document).ready(function () {
  console.log("Ready for Google Location!");
});


function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    //Google maps API initialisation
    var element = document.getElementById("map");

    var map = new google.maps.Map(element, {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 17,
      mapTypeId: "OSM",
      mapTypeControl: false,
      streetViewControl: false
    });

    //------------------------------- MAPA -------------------------------------------------
    map.mapTypes.set("OSM", new google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        var tilesPerGlobe = 1 << zoom;
        var x = coord.x % tilesPerGlobe;
        if (x < 0) {
          x = tilesPerGlobe + x;
        }
        return "https://tile.openstreetmap.org/" + zoom + "/" + x + "/" + coord.y + ".png";
      },
      tileSize: new google.maps.Size(256, 256),
      name: "OpenStreetMap",
      maxZoom: 18
    }));
   /* function add_map_point (latitude, longitude) {
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
            src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg"
          })
        })
      });
      map.addLayer(vectorLayer);
    }*/
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);




  // ****************** ShowPosition ***************************



  /* Retrieve longitude and latitude from Position 

  /* Calculate the OpenStreetMap position 
  var osmPosition = new OpenLayers.LonLat(longitude, latitude).transform(this.fromProjection, this.toProjection);

  /* Set the center of the map 
  this.map.setCenter(osmPosition, this.defaultZoom);

  if (this.currentPosition === null) { // if this is the first time this method is invoked

      /* Add a marker to the center 
      this.markers.addMarker(new OpenLayers.Marker(osmPosition));

      /* Show POIs only the first time this method is called 
      this.showPOIs(new OpenLayers.LonLat(plon, plat));

      /* Keep track of the current position 
      this.currentPosition = osmPosition;
  } */
}
