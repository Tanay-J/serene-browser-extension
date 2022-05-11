import axios from "axios";

export const getCoverImage = async (setImageData) => {
  try {
    const {
      data: { urls, location, description },
    } = await axios.get(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`,
      { params: { orientation: "landscape" } }
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
