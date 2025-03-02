import "../../../App.css";
import "./SectionTwo.css";

export default function SectionTwo() {
  return (
    <>
      <section className="sandBackgroundColor courseBgOne">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="greenColor fw-bold">New & Noteworthy</h1>
            <i className="fa-solid fa-chevron-down fs-3 me-3"></i>
          </div>

          <div className="greenBorder"></div>

          <div className="d-flex align-items-center justify-content-center row mt-5">
            <div className="col-7 greenColor">
              <img
                src="/images/CoursesPage/symbols.png"
                alt="Hero Img"
                className="courseImgStyle"
              />
              <h2 className="fs-50 fw-bold mt-5">
                Beginner Algebra: Foundations for Problem Solving
              </h2>
              <p className="fw-bold fs-30 mt-4">
                Learn the fundamentals of algebra, including equations,
                variables, and problem-solving techniques.
              </p>

              <div className="d-flex align-items-center mt-5">
                <button className="whiteButtonCourse fw-bold">Details</button>
                <button className="greenButtonCourse fw-bold ms-5">
                  JOIN NOW!
                  <i className="fa-solid fa-chevron-right ms-5"></i>
                </button>
              </div>
            </div>

            <div className="col-5">
              <img src="/images/CoursesPage/professorFrame.png" alt="frame3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
