import { CoverImage, CurrentTime } from "../components";

const Homepage = () => {
  return (
    <div>
      <CoverImage />
      <div className="main-container br-m">
        <section className="onboarding-container">
          <CurrentTime />
        </section>
      </div>
    </div>
  );
};
export { Homepage };
