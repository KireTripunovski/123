import "../../App.css";
import "./Partners.css";

export default function Partners() {
  return (
    <>
      <section className="sandBackgroundColor py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center headingStyle mb-8">
            Our Partners
          </h1>
          <div className="flex justify-center space-x-8">
            <img
              src="/images/landingPage/google.png"
              alt="google"
              className="h-16 iconStyle"
            />
            <img
              src="/images/landingPage/microsoft.png"
              alt="microsoft"
              className="h-16 iconStyle"
            />
            <img
              src="/images/landingPage/facebook.png"
              alt="facebook"
              className="h-16 iconStyle"
            />
            <img
              src="/images/landingPage/spotify.png"
              alt="spotify"
              className="h-16 iconStyle"
            />
            <img
              src="/images/landingPage/amazon.png"
              alt="amazon"
              className="h-16 iconStyle"
            />
          </div>
        </div>
      </section>
    </>
  );
}
