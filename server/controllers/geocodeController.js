const getCoordinates = async (req, res) => {
  try {
    const { place } = req.query;

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
    console.log(data);

    if (!data.length) {
      return res.status(404).json({
        message: "Location not found",
      });
    }

    res.json({
      lat: Number(data[0].lat),
      lng: Number(data[0].lon),
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = { getCoordinates };