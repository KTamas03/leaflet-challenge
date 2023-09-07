// Store our API endpoint as queryUrl.
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a map object.
let myMap = L.map("map", {
  center: [19.07283, 72.88261], // Centre the map around India
  zoom: 3,
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define a variable to store sequential colors
let sequentialColors = ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#b10026"];
console.log("Sequential Colors:", sequentialColors); // Log the sequentialColors array

// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
  console.log("Data from API:", data); // Log the data

  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);

  // Set up the legend using the sequentialColors array
  let legend = L.control({ position: "bottomright" });
  legend.onAdd = function(map) {
    let div = L.DomUtil.create("div", "info legend");
    let depthRanges = [-10, 10, 30, 50, 70, 90]; // Define depth ranges


    // Add the legend title
    div.innerHTML = "<h1>Earthquake Depth (kms)</h1>";

    // Loop through depth ranges and create labels with colors
    for (let i = 0; i < depthRanges.length; i++) {
      div.innerHTML +=
        '<i style="background:' + sequentialColors[i] + '"></i> ' +
        depthRanges[i] + (depthRanges[i + 1] ? '&ndash;' + depthRanges[i + 1] + "<br>" : "+");
    }

    return div;
  };

  // Add the legend to the map
  legend.addTo(myMap);
});

function createFeatures(earthquakeData) {
  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3><span style="text-decoration: underline;">Location</span>: ${feature.properties.place}</h3><hr><p><span style="text-decoration: underline;">Magnitude</span>: ${feature.properties.mag}</p><p><span style="text-decoration: underline;">Depth</span>: ${feature.geometry.coordinates[2]} km</p><p><span style="text-decoration: underline;">Date & Time</span>: ${new Date(feature.properties.time)}</p>`);
}

  // Define a function to determine the size of the circle based on earthquake magnitude.
  function radiusSize(magnitude) {
    return magnitude * 4;
  }

  // Define the getColor function
  function getColor(depth) {
    // Determine the step size based on the depth range
    let stepSize = 100 / (sequentialColors.length - 1);
  
    // Calculate the index of the color based on the depth
    let colorIndex = Math.floor(depth / stepSize);
  
    // Ensure that colorIndex is within bounds
    colorIndex = Math.min(colorIndex, sequentialColors.length - 1);
  
    return sequentialColors[colorIndex];
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  let earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      // Create a circle marker for each earthquake.
      return L.circleMarker(latlng, {
        radius: radiusSize(feature.properties.mag),
        fillColor: getColor(feature.geometry.coordinates[2]), // Use depth for color
        color: "grey",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.75
      });
    }
  });

  // Add the earthquakes layer to the map.
  earthquakes.addTo(myMap);
}