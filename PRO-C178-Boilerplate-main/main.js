var latitude = 20.880543, longitude=84.6863685
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
var map = new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longitude,latitude],
    zoom:32,
})

map.addControl(new mapboxgl.GeolocateControl({
    positionOtions:{
        enableHighAccuracy:true

    },
    trackUserLocation:true
}))
map.addControl(new MapboxDirections({
    accessToken:mapboxgl.accessToken
}),
"top-left"
)
