import { useEffect, useState } from "react";
import { getCoverImage } from "../utils/api-requests";

const CoverImage = () => {
  const initialData = {
    url: "",
    location: "",
    description: "",
  };
  const [imageData, setImageData] = useState(initialData);
  const { url, location, description } = imageData;

  useEffect(() => {
    getCoverImage(setImageData);
    setInterval(() => getCoverImage(setImageData), 1800000);
  }, []);

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
