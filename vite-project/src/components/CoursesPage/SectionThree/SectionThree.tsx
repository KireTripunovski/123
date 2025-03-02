import "../../../App.css";
import "./SectionThree.css";

export default function SectionThree() {
  return (
    <>
      <section className="courseBgTwo">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center gap-5 mb-5">
            <img
              src="/images/CoursesPage/chair.png"
              alt="chair"
              className="courseImgStyle"
            />
            <div className="px-5">
              <h1 className="greenColor fw-bold fs-50">
                Explore over 1000 lectures and learning videos.
              </h1>
              <img
                src="/images/CoursesPage/users.png"
                alt="users"
                className="usersImg my-5"
              />
              <p className="greenColor fw-bold fs-39">
                10,000+ Courses, 1M+ Students, 500+ Instructors
              </p>
            </div>
          </div>

          <div className="text-center mt-5">
            <h1 className="greenColor fw-bold">
              Go on a Deep Dive to Find <br /> what you need
            </h1>
            <input
              type="text"
              className="searchInput mt-3"
              placeholder="Search"
            />
          </div>
        </div>
      </section>
    </>
  );
}
