import "../../App.css";
import "./Partners.css";

export default function Partners() {
  return (
    <>
      <section className="sandBackgroundColor">
        <div className="container">
          <h1 className="headingStyle greenColor text-center">Our Partners</h1>
          <div className="iconStyle">
            <img src="/images/landingPage/google.png" alt="google" />
            <img
              src="/images/landingPage/microsoft.png"
              alt="microsoft"
              className="px-5"
            />
            <img src="/images/landingPage/facebook.png" alt="facebook" />
            <img
              src="/images/landingPage/spotify.png"
              alt="spotify"
              className="px-4"
            />
            <img src="/images/landingPage/amazon.png" alt="amazon" />
          </div>
        </div>
      </section>
    </>
  );
}
