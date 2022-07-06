import { GrFirefox } from "react-icons/gr";
import {
  CoverImage,
  CurrentTime,
  Quote,
  Sidebar,
  Todo,
  UserDetails,
  Weather,
} from "../components";
import { useSettings } from "../contexts/settings-context";

const Homepage = () => {
  const {
    settings: { textColor },
  } = useSettings();

  
  return (
    <div className={textColor}>
      <a
        href="https://addons.mozilla.org/en-US/firefox/addon/serene-new-tab"
        target="_blank"
        className="link download-container br-s"
      >
        <GrFirefox className="text-m" />
        <div>
          <p className="text-xxs">Download</p>
          <p className="text-xs">Firefox Add-on</p>
        </div>
      </a>
      <CoverImage />
      <div className="main-container br-m">
        <section className="onboarding-container">
          <CurrentTime />
          <UserDetails />
        </section>
        <Weather />
        <Todo />
        <Quote />
        <Sidebar />
      </div>
    </div>
  );
};
export { Homepage };
