import { useNavigate } from "react-router-dom";
import "../../App.css";
import "./Buttons.css";

export default function Buttons() {
  const navigate = useNavigate();
  return (
    <>
      <section className="sandBackgroundColor">
        <div className="text-center d-flex justify-content-center">
          <button
            onClick={() => navigate("/lessons")}
            className="whiteButtonText greenColor fw-bold"
          >
            Start Learning Today - Your First Lesson is Free!
          </button>
          <button className="greenButtonText text-uppercase">
            Unlock Your First
            <br /> Lesson for Free!
          </button>
        </div>
      </section>
    </>
  );
}
