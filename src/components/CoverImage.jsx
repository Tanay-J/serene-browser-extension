import { useEffect, useState } from "react";
import { useSettings } from "../contexts/settings-context";
import { getCoverImage } from "../utils/api-requests";

const CoverImage = () => {
  const initialData = {
    url: "",
    location: "",
    description: "",
  };
  const [imageData, setImageData] = useState(initialData);
  const { url, location, description } = imageData;
  const {
    settings: { imageCategory, imageRefreshTime },
  } = useSettings();

  useEffect(() => {
    getCoverImage(imageCategory, setImageData);
    const timer = setInterval(
      () => getCoverImage(imageCategory, setImageData),
      imageRefreshTime
    );
    return () => clearInterval(timer);
  }, [imageCategory, imageRefreshTime]);

  return (
    <div>
      <img className="cover-img" src={url} alt={description} />
      <div className="img-details text-light">
        <small>{location}</small>
      </div>
    </div>
  );
};
export { CoverImage };
