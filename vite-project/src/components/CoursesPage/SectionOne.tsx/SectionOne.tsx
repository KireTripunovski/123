import "../../../App.css";
import "./SectionOne.css";

export default function SectionOne() {
  return (
    <>
      <section className="sandBackgroundColor">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center gap-5">
            <img
              src="/images/CoursesPage/Hero Section - Illustration.png"
              alt="Hero Img"
              className="courseImgStyle"
            />
            <div className="px-5">
              <h1 className="greenColor fw-bold fs-50">
                Unlock Your Learning Potential
              </h1>
              <p className="mt-4 fs-30 greenColor mt-5">
                Explore a wide range of beginner-friendly courses designed to
                build your skills and knowledge. Whether you're starting fresh
                or looking to strengthen your foundation, our expertly crafted
                lessons will guide you every step of the way. Start learning
                today!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
