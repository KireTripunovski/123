import "../../App.css";
import "./Certificates.css";

export default function Certificates() {
  return (
    <>
      <section className="sandBackgroundColor greenColor pt-5 backgroundImgCertificates">
        <div className="container">
          <div className="text-center py-5">
            <h1 className="h1FontSize">Earn Certificates & Stand Out!</h1>
            <p className="fs-3">
              Complete courses, take quizzes, and receive certificates to
              showcase your achievements!
            </p>
          </div>

          <div className="row d-flex justify-content-center align-items-center py-5 my-5">
            <div className="col-8">
              <h3 className="fw-bold">Celebrate Your Progress!</h3>
              <p className="textStyle">
                Every step forward is a milestone! Earn badges and achievements
                as you complete lessons, master new skills, and reach learning
                goals. Stay motivated and showcase your progress with pride!
              </p>
            </div>
            <div className="col-4">
              <img src="/images/landingPage/achivments.png" alt="achivments" />
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center py-5">
            <div className="col-4">
              <img src="/images/landingPage/diploma.png" alt="diploma" />
            </div>
            <div className="col-8">
              <h3 className="fw-bold">Earn Recognized Certificates!</h3>
              <p className="textStyle">
                Turn your learning into credentials! Complete courses, pass
                quizzes, and receive official certificates to showcase your
                expertise. Boost your resume, share your success, and stand out
                in your field!
              </p>
            </div>
          </div>

          <div className="text-center py-4">
            <button className="btnStyle">
              Unlock Your First Certificate - Join Now!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
