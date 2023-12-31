## leaflet-challenge
**Module 15 Challenge - Mapping**

In this scenario, I built two interactive maps to show Earthquakes in different locations on Earth over the last 7 days. This was achieved by using Javascript, CSS and HTML coding.

The Earthquake data was sourced from the United States Geological Survey (USGS) API: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

**Repository Folders and Contents:**
- Leaflet-Part-1:
  - static:
    - css:
      - style_part1.css
    - js:
      - logic_part1.js
    - index_part1.html
- Leaflet-Part-2:
  - static:
    - css:
      - style_part2.css
    - js:
      - logic_part2.js
    - index_part2.html



## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Contributing](#contributing)

## About
### Part 1: Create Earthquake Visualisation

I completed the following steps to create the webpage:

1. HTML Structure (index_part1.html):
    - Developed an HTML page with placeholders for the map and its heading.
    - Linked external CSS and JavaScript files for styling and functionality.
  
2. Map Initialization (logic_part1.js):
    - Defined a queryUrl to fetch earthquake data from the USGS API.
    - Created a Leaflet map (myMap) centered on India with an initial zoom level.

3. Tile Layer (logic_part1.js):
    - Added an OpenStreetMap tile layer as the map's base with proper attribution.

4. Sequential Colors (logic_part1.js):
    - Set up an array, sequentialColors, for representing earthquake depth levels.

5. Data Retrieval (logic_part1.js):
    - Fetched earthquake data from the USGS API (queryUrl) using D3.js.
    - Logged the retrieved data to the console.

6. Create Features (logic_part1.js):
    - Defined the createFeatures function to process earthquake data and display it as map features.
    - Created a legend for earthquake depth and incorporated it into the map.
    - Developed functions to generate circle markers for earthquake locations based on magnitude and depth.
    - Created a GeoJSON layer (earthquakes) with these markers and added it to the map.

7. CSS Styling (style_part1.css):
    - Styled map elements with CSS for improved visual appeal and layout.
  
The result is an interactive webpage displaying earthquake data on a map. Circle markers represent earthquake locations, with size and color indicating magnitude and depth. A legend provides depth information, and the map is initially centered around India with OpenStreetMap as the base layer:
![Part 1 Map](https://github.com/KTamas03/leaflet-challenge/assets/132874272/18617086-5aae-4c2d-a21f-5a33f116aeaa)

**My Working Files:**
  - style_part1.css
  - logic_part1.js
  - index_part1.html

### Part 2: Add Tectonic Plates to Visualisation

I completed the following steps to create the webpage:

1. HTML Structure (index_part2.html):
    - Developed an HTML page with placeholders for the map and its heading.
    - Linked external CSS and JavaScript files for styling and functionality.
  
2. Map Initialization (logic_part2.js):
    - Defined a queryUrl to fetch earthquake data from the USGS API.
    - Created a Leaflet map (myMap) centered on India with an initial zoom level.

3. Tile Layers (logic_part2.js):
    - Defined two tiles layers (Street and Topography) using OpenStreetMap and OpenTopoMap.

4. Sequential Colors (logic_part2.js):
    - Set up an array, sequentialColors, for representing earthquake depth levels.

5. Data Retrieval and display(logic_part2.js):
    - Fetched earthquake data from the USGS API (queryUrl) using D3.js.
    - Processed and displayed earthquake data as GeoJSON features on the map.
    - Added interactivity by creating popups for each earthquake feature.

6. Tectonic Plate Data (logic_part2.js):
    - Retrieved tectonic plate data from a GeoJSON URL.
    - Created a GeoJSON layer (tectonicPlates) for displaying tectonic plate boundaries.

7. Layer Control (logic_part2.js):
    - Implemented a layer control allowing users to toggle earthquake and tectonic plate layers.

8. CSS Styling (style_part1.css):
    - Styled map elements with CSS for improved visual appeal and layout.
  
The result is an interactive webpage displaying earthquake data and tectonic plate boundaries. Users can switch between different map styles and layers using the layer control:
![Part 2 Map](https://github.com/KTamas03/leaflet-challenge/assets/132874272/bedc7346-c7b6-4ce4-8299-7a1067cfb777)


**My Working Files:**
  - style_part2.css
  - logic_part2.js
  - index_part2.html

Tectonic plates json: https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json


## Getting Started

**Programs/software I used:**
 - Visual Studio: used for coding javascript, css and html
 - Google Chrome: used for displaying, interacting and troubleshooting the webpage

## Contributing

- Plotly charts (https://plotly.com/javascript/basic-charts/)
- AskBCS Learning Assistant:
  -  adding 'float: left' to .info.legend i - for styling the colour boxes in the legend
  -  adjusting the height down from 20px to 15px so that the colour boxes in the legend sit in a perfect list instead of staggered.
