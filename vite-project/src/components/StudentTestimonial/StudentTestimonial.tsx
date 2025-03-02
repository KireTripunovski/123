import "../../App.css";
import "./StudentTestimonial.css";

export default function StudentTestimonial() {
  return (
    <>
      <section className="sandBackgroundColor greenColor backgroundImgStudent">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center py-5 my-5">
            <div className="col-8">
              <h2 className="fw-bold headingStyle">
                Trusted by Learners Worldwide!
              </h2>
              <img
                src="/images/landingPage/studentTestimonial.png"
                alt="testimonial1"
                className="w-75 my-5"
              />
              <p className="textStyle">
                500,000+ learners | 10,000+ Courses | 95% Satisfaction Rate
              </p>
            </div>
            <div className="col-4">
              <img
                src="/images/landingPage/Testemonial.png"
                alt="testimonial2"
              />
            </div>
          </div>

          <div className="borderDiv"></div>
        </div>
      </section>
    </>
  );
}
