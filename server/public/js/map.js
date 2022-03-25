mapboxgl.accessToken =
    'pk.eyJ1IjoiYXNoaWlpaWlpaWlpaWkiLCJhIjoiY2wxNjJlbzRwMDhxazNjcGY1c21zZm93OCJ9.H7hdG-ejMDpMRSNsKV93xA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 9,
    center: [73.473324, 18.947998]
});
console.log('here');


// Load map with stores
function loadMap(locs) {
    map.on('load', function () {
        map.addLayer({
            id: 'points',
            type: 'symbol',
            source: {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: locs
                }
            },
            layout: {
                'icon-image': '{icon}-15',
                'icon-size': 1.5,
                'text-field': '{stateCode}',
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 0.9],
                'text-anchor': 'top'
            }
        });
    });
}


// Fetch stores from API
async function getLocs() {
    try {
        const res = await fetch('/locs');
        // console.log(res.data);
        const data = await res.json();
        // console.log(data);
        console.log('fetched');
        const locs = data.data.map(loc => {
            console.log(loc.location.coordinates);
            return {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [
                        loc.location.coordinates[0],
                        loc.location.coordinates[1]
                    ]
                },
                properties: {
                    // stateCode: loc.stateCode,
                    icon: 'car'
                }
            };
        });
        loadMap(locs);

    }
    catch (e) {
        console.log(e);
    }

 

}


getLocs();




