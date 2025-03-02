import { useNavigate } from "react-router-dom";
import "../../App.css";
import "./Course.css";

export default function Course() {
  const navigate = useNavigate();
  return (
    <>
      <section className="sandBackgroundColor backgroundImg">
        <div className="d-flex justify-content-center py-5">
          <img src="/images/landingPage/Frame1.png" alt="" className="me-5" />
          <div className="ms-5">
            <h3 className="greenColor headingSize tightText">
              Discover a World of
              <br />
              Learning - No Signup
              <br />
              Required!
            </h3>
            <p className="greenColor textSize">
              Get a glimpse of our platform's features,
              <br />
              explore courses, and preview real lessons
              <br />
              before you enroll. See how you can learn,
              <br />
              track progress, and earn certificates!
            </p>
            <button
              onClick={() => navigate("/courses")}
              className="browseButton greenColor mt-5"
            >
              Browse Courses
            </button>
            <button className="lessonButton greenColor mt-5 ms-5">
              Try a Free Lesson{" "}
              <i className="fa-solid fa-chevron-right ms-5"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
