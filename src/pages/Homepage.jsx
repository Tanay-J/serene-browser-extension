import { CoverImage, CurrentTime, MainFocus, UserDetails } from "../components";

const Homepage = () => {
  return (
    <div>
      <CoverImage />
      <div className="main-container br-m">
        <section className="onboarding-container">
          <CurrentTime />
          <UserDetails />
        </section>
      </div>
    </div>
  );
};
export { Homepage };
