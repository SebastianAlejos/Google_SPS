// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var labels = '123456789';
var labelIndex = 0;

function start(){
    createMap();
    getComments();
}
function addRandomFacts() {
  const facts =
      ['My dogs name is Kyra', 'I study Computer Science', 'I love playing soccer', 'Im from México', 'This is my first website ever!', 'I started coding two years ago!'];

  // Pick a random greeting.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}
function getComments() {
  fetch('/data').then(response => response.json()).then((comments) =>{
      const statsListElement = document.getElementById('comments-container');
      statsListElement.innerHTML = '';
      for (x in comments) {
         statsListElement.appendChild(createListElement(comments[x]));
      }
  });
}
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
function createMap() {
    var celaya = {lat:20.552989,  lng: -100.901004};
    var lanc = {lat: 40.024609, lng: -76.2250707};
    var col = {lat:19.260947, lng:  -103.702926};
    var gdl = {lat: 20.736947, lng: -103.454616};
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 29.974290,lng:  -94.528486},
    zoom: 4,
    mapTypeId: 'hybrid'
  });

   var strCel = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Celaya</h1>'+
            '<div id="bodyContent">'+
            '<p> I was born here and I lived here until I was 16 years old.</p>'+
            '</div>'+
            '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: strCel,
        });


    var strLanc = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Lancaster</h1>'+
            '<div id="bodyContent">'+
            '<p>I lived here during my sophmore year of highschool.</p>'+
            '</div>'+
            '</div>';

    var infowindow1 = new google.maps.InfoWindow({
        content: strLanc,
        });


    var strCol = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Colima</h1>'+
            '<div id="bodyContent">'+
            '<p>I lived here for 2 years while finishing highschool</p>'+
            '</div>'+
            '</div>';

    var infowindow2 = new google.maps.InfoWindow({
        content: strCol,
        });


    var strGdl = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Guadalajara</h1>'+
            '<div id="bodyContent">'+
            '<p>I currently liive here while attending to college at Tec de Monterrey</p>'+
            '</div>'+
            '</div>';

    var infowindow3 = new google.maps.InfoWindow({
        content: strGdl,
        });




    var marker = new google.maps.Marker({
    position: celaya,
    title: 'Celaya',
    label: labels[labelIndex++ % labels.length],
    map: map
  });
    marker.addListener('click', function() {
          infowindow.open(map, marker);
        });



    var marker1 = new google.maps.Marker({
    position: lanc,
    title: 'Lancaster',
    label: labels[labelIndex++ % labels.length],
    map: map
    });
    marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
    });



  var marker2 = new google.maps.Marker({
    position: col,
    title: 'Colima',
    label: labels[labelIndex++ % labels.length],
    map: map
    });
    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);  
    });
    
  var marker3 = new google.maps.Marker({
    position: gdl,
    title: 'Guadalajara',
    label: labels[labelIndex++ % labels.length],
    map: map
    });
    marker3.addListener('click', function() {
        infowindow3.open(map, marker3);  
    });

}


