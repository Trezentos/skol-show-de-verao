mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VzdGF2b2ZnZHMiLCJhIjoiY2x1MzBoeTVtMHY3MzJpcnA4dGdpbWI2ZiJ9.YDTQ9jUn6AcZZw5WAA0zIw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-48.457457, -27.436289],
        zoom: 13
    });


const marker1 = new mapboxgl.Marker({color: '#AF0039'})
    .setLngLat([-48.457457, -27.436289])
    .addTo(map);