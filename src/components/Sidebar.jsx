import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useSettings } from "../contexts/settings-context";
import {
  imageCategories,
  refreshTimeOptions,
  textColorOptions,
} from "../utils/sidebar-filters.js";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const {
    settings: { imageCategory, imageRefreshTime, quoteRefreshTime },
    setSettings,
  } = useSettings();

  const setCategory = (event) => {
    setSettings((prev) => ({
      ...prev,
      imageCategory: event.target.value,
    }));
  };

  const setImageRefreshTime = (event) => {
    setSettings((prev) => ({
      ...prev,
      imageRefreshTime: Number(event.target.value),
    }));
  };
  const setQuoteRefreshTime = (event) => {
    setSettings((prev) => ({
      ...prev,
      quoteRefreshTime: Number(event.target.value),
    }));
  };

  const setTextColor = (event) => {
    setSettings((prev) => ({ ...prev, textColor: event.target.value }));
  };

  const resetHandler = () => {
    setSettings({
      imageCategory: "landscapes",
      imageRefreshTime: 1800000,
      quoteRefreshTime: 1800000,
      textColor: "",
    });
    localStorage.clear();
    window.location.reload();
  };

  return (
    <section className="sidebar-wrapper">
      <FiMenu
        size={25}
        className="text-light"
        onClick={() => setShowSidebar(!showSidebar)}
      />

      {showSidebar && (
        <aside className="sidebar-container br-m px-xs py-s">
          <div>
            <div className="flex justify-content-space-bet">
              <p className="text-light font-xbold mx-xs">Wallpaper</p>
              <button className="btn btn-outline" onClick={resetHandler}>
                Reset
              </button>
            </div>
            {/* Wallpaper settings */}
            <div>
              <p className="text-xs text-light m-xs">Choose Category</p>
              {imageCategories.map((cat) => (
                <button
                  className={`btn m-xs ${
                    imageCategory === cat.value
                      ? "btn-gradient"
                      : "btn-outline outline-white "
                  }`}
                  key={cat._id}
                  value={cat.value}
                  onClick={setCategory}
                >
                  {cat.text}
                </button>
              ))}
            </div>

            <div>
              <p className="text-xs text-light font-xbold mx-xs my-s">
                Refresh after
              </p>
              {refreshTimeOptions.map((option) => (
                <button
                  className={`btn m-xs ${
                    imageRefreshTime === option.value
                      ? "btn-gradient"
                      : "btn-outline outline-white "
                  }`}
                  key={option._id}
                  value={option.value}
                  onClick={setImageRefreshTime}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>

          {/* Quote Settings */}
          <div>
            <p className="text-light font-xbold mx-xs my-s">Quotes</p>
            <div>
              <p className="text-xs text-light m-xs">Refresh after</p>
              {refreshTimeOptions.map((option) => (
                <button
                  className={`btn m-xs ${
                    quoteRefreshTime === option.value
                      ? "btn-gradient"
                      : "btn-outline outline-white "
                  }`}
                  key={option._id}
                  value={option.value}
                  onClick={setQuoteRefreshTime}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>

          {/* Text Color Options */}
          <div>
            <p className="text-light font-xbold mx-xs my-s">Text Color</p>
            {textColorOptions.map((option) => (
              <button
                className={`btn btn-round ${option.className} mx-xs`}
                key={option._id}
                value={option.value}
                onClick={setTextColor}
              ></button>
            ))}
          </div>
        </aside>
      )}
    </section>
  );
};
export { Sidebar };
