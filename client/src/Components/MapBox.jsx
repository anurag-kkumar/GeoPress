import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapBox = ({ selectedLocation }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // Create map only once
  useEffect(() => {
    mapRef.current = L.map("mymap").setView([27.5, 77.6], 5);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  // Update marker when location changes
  useEffect(() => {
    if (!selectedLocation || !mapRef.current) return;

    // Remove previous marker
    if (markerRef.current) {
      mapRef.current.removeLayer(markerRef.current);
    }

    // Add new marker
    markerRef.current = L.marker([
      selectedLocation.lat,
      selectedLocation.lng,
    ])
      .addTo(mapRef.current)
      .bindPopup(selectedLocation.title)
      .openPopup();

    // Move map
    mapRef.current.flyTo(
      [selectedLocation.lat, selectedLocation.lng],
      13,
      {
        duration: 1.5,
      }
    );
  }, [selectedLocation]);

  return <div id="mymap" className="w-full h-full"></div>;
};

export default MapBox;