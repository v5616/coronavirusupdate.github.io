function updateMap() {
    console.log("updating map with realtime data")
  fetch("data.json")
    .then((response) => response.json())
    .then((rsp) => {
      console.log(rsp.data);
      rsp.data.forEach(element => {
        latitude = element.latitude;
        longitude = element.longitude;
        
        // var color = "colors";
        cases = element.infected;
        if (cases > 205) {
          color: "rgb(255, 0, 0)";
        } else {
          color: "rgb(${cases}, 0, 0)";
        }

        // mark on Map
        new mapboxgl.Marker({
          draggable: false,
          color:"rgb(255, 0, 0)"
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
let interval = 2000;
setInterval(updateMap, interval);