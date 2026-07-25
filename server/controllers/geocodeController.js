const locationCache = {};

const getCoordinates = async (req, res) => {
  try {
    const { place } = req.query;

    const key = place.trim().toLowerCase();

    // Check cache
    if (locationCache[key]) {
      console.log("✅ From Cache:", place);
      return res.json(locationCache[key]);
    }

    // Fetch from OpenStreetMap
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        place
      )}&format=json&limit=1`,
      {
        headers: {
          "User-Agent": "GeoPress/1.0",
        },
      }
    );

    const data = await response.json();

    if (!data.length) {
      return res.status(404).json({
        message: "Location not found",
      });
    }

    const coordinates = {
      lat: Number(data[0].lat),
      lng: Number(data[0].lon),
    };

    // Save to cache
    locationCache[key] = coordinates;

    console.log("💾 Saved:", place);

    res.json(coordinates);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = { getCoordinates };