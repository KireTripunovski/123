import "../../App.css";
import "./Buttons.css";

export default function Buttons() {
  return (
    <>
      <section className="sandBackgroundColor">
        <div className="text-center d-flex justify-content-center">
          <button className="whiteButtonText greenColor fw-bold">
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
