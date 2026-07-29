const locationCache = {};

const getCoordinates = async (req, res) => {
  try {

    const { place } = req.query;


    if(!place){
      return res.status(400).json({
        message:"Place is required"
      });
    }


    const key = place.trim().toLowerCase();


    // Cache check
    if(locationCache[key]){
      console.log("✅ From Cache:", place);
      return res.json(locationCache[key]);
    }


    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        place
      )}&format=json&limit=1`,
      {
        headers:{
          "User-Agent":"GeoPress/1.0",
          "Accept":"application/json"
        }
      }
    );


    // Check response type
    const contentType = response.headers.get("content-type");


    if(!contentType.includes("application/json")){

      const text = await response.text();

      console.log("Nominatim Response:",text);

      return res.status(500).json({
        message:"Invalid geocoding response"
      });
    }


    const data = await response.json();


    if(!data.length){

      return res.status(404).json({
        message:"Location not found"
      });

    }


    const coordinates={
      lat:Number(data[0].lat),
      lng:Number(data[0].lon)
    };


    locationCache[key]=coordinates;


    console.log("💾 Saved:",place);


    res.json(coordinates);


  } catch(error){

    console.error("Geocode Error:",error);

    res.status(500).json({
      message:"Server Error"
    });

  }
};


module.exports={getCoordinates};