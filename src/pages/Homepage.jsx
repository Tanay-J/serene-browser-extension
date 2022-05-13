import { CoverImage, CurrentTime, Quote, UserDetails, Weather } from "../components";

const Homepage = () => {
  return (
    <div>
      <CoverImage />
      <div className="main-container br-m">
        <section className="onboarding-container">
          <CurrentTime />
          <UserDetails />
        </section>
        <Weather />
        <Quote />
      </div>
    </div>
  );
};
export { Homepage };
