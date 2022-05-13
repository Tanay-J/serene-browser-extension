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
