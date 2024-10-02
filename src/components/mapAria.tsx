"use client";
import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  AttributionControl,
  FullscreenControl,
  Marker,
} from "react-map-gl";

function MapAria() {
  const accessToken = process.env.NEXT_PUBLIC_YOUR_MAPBOX_ACCESS_TOKEN;

  return (
    <Map
      mapboxAccessToken={accessToken}
      initialViewState={{
        longitude: 0.066788,
        latitude: 35.586337,
        zoom: 13.5,
      }}
      attributionControl={false}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      maxBounds={[
        [-0.070418, 34.588402], // Southwest corner (longitude, latitude)
        [1.069397, 36.562674], // Northeast corner (longitude, latitude)
      ]}
      minZoom={13.5}
    >
      <AttributionControl customAttribution="Map design by AliAkrem" />
      <FullscreenControl />

      <Marker latitude={35.574618252586994} longitude={0.07071504315690866} />
    </Map>
  );
}

export default MapAria;
