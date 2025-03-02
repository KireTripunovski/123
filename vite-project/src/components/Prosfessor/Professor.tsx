import "../../App.css";
import "./Professor.css";

export default function Professor() {
  return (
    <section className="sandBackgroundColor greenColor">
      <div className="container">
        <h1 className="headingStyle text-center">
          <span className="opacity">Unlock your potential </span>
          <br />
          <span className="greenColor">with our professors.</span>
        </h1>
        {/* Bootstrap Carousel */}
        <div id="professorCarousel" className="carousel slide">
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="/images/professors/professor1.png"
                    className="d-block w-100 imgStyle"
                    alt="Professor 1"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src="/images/professors/professor2.png"
                    className="d-block w-100 imgStyle"
                    alt="Professor 2"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src="/images/professors/professor3.png"
                    className="d-block w-100 imgStyle"
                    alt="Professor 3"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src="/images/professors/professor4.png"
                    className="d-block w-100 imgStyle"
                    alt="Professor 4"
                  />
                </div>
              </div>
            </div>
            {/* Second Slide */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="/images/professors/professor5.png"
                    className="d-block w-100 imgStyle"
                    alt="Professor 5"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src="/images/professors/professor6.png"
                    className="d-block w-100 imgStyle"
                    alt="Professor 6"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src="/images/professors/professor7.png"
                    className="d-block w-100 imgStyle"
                    alt="Professor 7"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src="/images/professors/professor8.png"
                    className="d-block w-100 imgStyle"
                    alt="Professor 8"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#professorCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#professorCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="borderDiv my-5"></div>
      </div>
    </section>
  );
}
