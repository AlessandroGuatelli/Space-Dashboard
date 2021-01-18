function test() {
    alert("Funziona");
  }
function iss_finder()
{
    var obj, long, lat;
    try {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                obj = JSON.parse(this.responseText);
                long = obj.iss_position.longitude;
                lat = obj.iss_position.latitude;
                clear_screen();
            document.getElementById("long").innerHTML = "La longitudine è: " + long;
            document.getElementById("lat").innerHTML = "La latitudine è: " + lat;
            mapboxgl.accessToken = 'pk.eyJ1IjoiYWxsZWd1YXQiLCJhIjoiY2tpaG1wM2w5MHFrNzJxbXFqc2dvanUwMSJ9.Bhi6vN5OQWAtxYNfVfLfGw';
            var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [long, lat],
        zoom: 3
        });
        var marker = new mapboxgl.Marker()
          .setLngLat([long, lat])
          .addTo(map);
          }
        };
        xmlhttp.open("GET", "http://api.open-notify.org/iss-now.json", true);
        xmlhttp.send();
        console.log("corretto");
      }
      catch(err) {
          alert("ERRORE NELL APERTURA DEL FILE JSON");
      }
}
function people_in_space()
{
  var obj, ppl, render = "<table id='tab'><tr><td>Nome</td><td>Veicolo</td></tr>";
  try {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
              obj = JSON.parse(this.responseText);
              ppl = obj.people;
              ppl.forEach(element => render += "<tr><td>" + element.name + "</td><td>" + element.craft + "</td></tr>");
              render += "</table>";
              clear_screen();
              document.getElementById("ppl").innerHTML = render;
        }
      };
      xmlhttp.open("GET", "http://api.open-notify.org/astros.json", true);
      xmlhttp.send();
      console.log("corretto");
    }
    catch(err) {
        alert("ERRORE NELL APERTURA DEL FILE JSON");
    }
}
function meteor_report()
{
  var mtr, render = "<table id='tab'><tr><td>Nome</td><td>ID</td><td>Recclass</td><td>Massa</td><td>Anno</td><td>Latitudine</td><td>Longitudine</td></tr>";
  try {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
              mtr = JSON.parse(this.responseText);
              mtr.forEach(element => render += "<tr><td>" + element.name + "</td><td>" + element.id + "</td><td>" + element.recclass + "</td><td>" + element.mass + "</td><td>" + element.year + "</td><td>" + element.reclat + "</td><td>" + element.reclong + " </td></tr>");
              render += "</table>";
              clear_screen();
              document.getElementById("mtr").innerHTML = render;
        }
      };
      xmlhttp.open("GET", "https://data.nasa.gov/resource/y77d-th95.json", true);
      xmlhttp.send();
      console.log("corretto");
    }
    catch(err) {
        alert("ERRORE NELL APERTURA DEL FILE JSON");
    }
}
function near_earth()
{
    var nrs, render = "<table id='tab'><tr><td>Designazione</td><td>Data della Scoperta</td><td>Magnetismo Assoluto</td><td>Periodo in anni</td><td>Asteroidi potenzialmente pericolosi</td><td>Distanza minima di intersezione orbitale</td><td>Classe di orbita</td></tr>";
    try {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                nrs = JSON.parse(this.responseText);
                nrs.forEach(element => render += "<tr><td>" + element.designation + "</td><td>" + element.discovery_date + "</td><td>" + element.h_mag + "</td><td>" + element.period_yr + "</td><td>" + element.pha + "</td><td>" + element.moid_au + "</td><td>" + element.orbit_class + " </td></tr>");
                render += "</table>";
                clear_screen();
                document.getElementById("nsp").innerHTML = render;
          }
        };
        xmlhttp.open("GET", "https://data.nasa.gov/resource/2vr3-k9wn.json", true);
        xmlhttp.send();
        console.log("corretto");
      }
      catch(err) {
          alert("ERRORE NELL APERTURA DEL FILE JSON");
      }
}
function clear_screen()
{
  document.getElementById("long").innerHTML = "";
  document.getElementById("lat").innerHTML = "";
  document.getElementById("mtr").innerHTML = "";
  document.getElementById("ppl").innerHTML = "";
  document.getElementById("nsp").innerHTML = "";
  document.getElementById("map").innerHTML = "";
}
