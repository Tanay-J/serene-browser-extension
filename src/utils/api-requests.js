import axios from "axios";

export const getCoverImage = async (category, setImageData) => {
  try {
    const {
      data: { urls, location, description },
    } = await axios.get(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`,
      { params: { query: { category }, orientation: "landscape" } }
    );

    setImageData({
      url: urls.regular,
      location: location.name,
      description: description,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherUpdate = (setWeather) => {
  const success = async (pos) => {
    try {
      let coordinates = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };
      let apiURL = `https://fcc-weather-api.glitch.me/api/current?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
      let { data } = await axios.get(apiURL);
      setWeather({
        city: data.name,
        temp: data.main.temp + "°C",
        icon: data.weather[0].icon,
        desc: data.weather[0].description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const error = async (err) => {
    try {
      let coordinates = { latitude: "28.6139", longitude: "77.2090" };
      let apiURL = `https://fcc-weather-api.glitch.me/api/current?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
      let { data } = await axios.get(apiURL);

      setWeather({
        city: data.name,
        temp: data.main.temp + "°C",
        icon: data.weather[0].icon,
        desc: data.weather[0].description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

export const getRandomQuote = async (setQuote) => {
  try {
    const { data } = await axios.get("https://api.quotable.io/random");
    setQuote({ text: data.content, author: data.author });
  } catch (error) {
    console.log(error);
  }
};
