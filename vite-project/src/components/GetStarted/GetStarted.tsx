import { useNavigate } from "react-router-dom";
import "../../App.css";
import "./GetStarted.css";

export default function GetStarted() {
  const navigate = useNavigate();
  return (
    <>
      <section className="sandBackgroundColor">
        <div className="container text-center">
          <div>
            <h1 className="blueColor fw-bold headingSize">
              Get Started for Free!
            </h1>
            <p className="greenColor textSize mt-5 fw-bold">
              Complete courses, take quizzes, and receive certificates to
              showcase your achievements!
            </p>
          </div>

          <div className="d-flex justify-content-between mt-5">
            <button className="getStartedBtn fw-bold">Try a Free Lesson</button>
            <button className="getStartedBtn mx-4 fw-bold">
              Browse Courses
            </button>
            <button className="getStartedBtn fw-bold">
              Join the Community
            </button>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <button
              onClick={() => navigate("/courses")}
              className="whiteButton fw-bold me-5"
            >
              Start Learning for Free!
            </button>
            <button className="greenButton fw-bold">
              Sign Up & Personalize Your Journey!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
