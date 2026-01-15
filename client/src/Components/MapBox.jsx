import React, { useEffect } from "react";
import L from "leaflet";

const MapBox = ({ selectedLocation }) => {
  useEffect(() => {
    const map = L.map("mymap").setView([27.5, 77.6], 8);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    // Update marker whenever selectedLocation changes
    if (selectedLocation) {
      L.marker([selectedLocation.lat, selectedLocation.lng])
        .addTo(map)
        .bindPopup(selectedLocation.title)
        .openPopup();

      map.setView([selectedLocation.lat, selectedLocation.lng], 13);
    }

    return () => map.remove();
  }, [selectedLocation]);

  return <div id="mymap" className="h-full w-full"></div>;
};

export default MapBox;
