import { useNavigate } from "react-router-dom";
import "../../App.css";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <section className="sandBackgroundColor">
        <div className="banner">
          <div className="container-fluid text-center w-100">
            <h1 className="h1Heading darkBlueColor">
              <span className="fw-bold tightText">Expand</span>{" "}
              <span className="fw-light">Your Mind,</span>{" "}
              <span className="fw-lighter">Elevate</span>
              <span className="fst-italic fw-bold">Your Future.</span>
            </h1>
            <div className="text-end signUpContainer">
              <button onClick={() => navigate("/signup")} className="signUpBtn">
                Sign Up for Free
              </button>
              <p className="fs-3 fw-bold d-inline ms-4">and get started.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
