import "../../App.css";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section className="backgroundBlueColor text-light py-4">
        <hr className="border-white border-3 mt-5 pb-2 opacity-100" />

        <div className="container">
          <div className="row">
            <div className="col-4 fs-sm">
              <img
                src="/images/landingPage/whiteLogo.png"
                alt="logo"
                className=""
              />

              <div className="d-flex gap-2 mt-5">
                <a href="https://www.instagram.com" target="_blank">
                  <i className="fa-brands fa-instagram text-light text-decoration-none"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <i className="fa-brands fa-facebook-f text-light text-decoration-none"></i>
                </a>
                <a href="https://www.tiktok.com" target="_blank">
                  <i className="fa-brands fa-tiktok text-light text-decoration-none"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <i className="fa-brands fa-x-twitter text-light text-decoration-none"></i>
                </a>
              </div>
            </div>

            <div className="col-8">
              <div className="row d-flex justify-content-end">
                <div className="col-3">
                  <h6 className="fw-bold">Resources</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-light text-decoration-none">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-light text-decoration-none">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-light text-decoration-none">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-3">
                  <h6 className="fw-bold">Company</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-light text-decoration-none">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-light text-decoration-none">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-light text-decoration-none">
                        Press
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-3">
                  <h6 className="fw-bold">Community</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-light text-decoration-none">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-light text-decoration-none">
                        Forums
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-light text-decoration-none">
                        Events
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-3">
                  <h6 className="fw-bold">Social</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-light text-decoration-none">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com"
                        className="text-light text-decoration-none"
                        target="_blank"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com"
                        className="text-light text-decoration-none"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
