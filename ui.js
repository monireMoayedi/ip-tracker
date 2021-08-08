class UI {
  show(results) {
    const map = document.getElementById("map");

    if (map != undefined) {
      map.remove();
    }

    const body = document.getElementsByTagName("body")[0];
    const attribution = document.querySelector(".attribution");
    const div = document.createElement("div");
    div.id = "map";
    body.insertBefore(div, attribution);

    const ipAdd = document.getElementById("ip-address");
    const location = document.getElementById("location");
    const timezone = document.getElementById("timezone");
    const isp = document.getElementById("isp");
    ipAdd.textContent = results.ip;
    location.textContent =
      results.location.city +
      ", " +
      results.location.region +
      " " +
      results.location.country;
    timezone.textContent = "UTC " + results.location.timezone;
    isp.textContent = results.isp;

    // map
    // document.getElementById("map").remove();

    let mymap = L.map("map").setView(
      [results.location.lat, results.location.lng],
      13
    );

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZHN0dWRlbnQyMDIwIiwiYSI6ImNrZzlwMnFmMDAxcDgyeWxvb2tvZzliZ2MifQ.RjwlAlDvhad_VujpU1T1NA",
      }
    ).addTo(mymap);

    var myIcon = L.icon({
      iconUrl: "images/icon-location.svg",
    });
    L.marker([results.location.lat, results.location.lng], {
      icon: myIcon,
    }).addTo(mymap);
  }
}
