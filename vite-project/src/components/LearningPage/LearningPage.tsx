import NavbarComponent from "../Navbar";
import InstructorHome from "./Home";

export default function LearningPage() {
  return (
    <>
      <NavbarComponent />
      <div className="p-6 rounded-lg greenColor sandBackgroundColor">
        <div className="container">
          <div className="border-2 p-5 rounded-lg border-[#024f40]">
            <h1 className="text-3xl fw-bold mb-4">What you will learn</h1>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="flex gap-3">
                  <span className="text-emerald-700 flex-shrink-0 mt-1">✓</span>
                  <p className="text-emerald-800">
                    Build beautifully designed web and mobile projects for your
                    customers using modern tools used by top companies in 2024.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-emerald-700 flex-shrink-0 mt-1">✓</span>
                  <p className="text-emerald-800">
                    Includes 100+ assets and premium design templates that you
                    can keep and use to customize for all your future projects.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-emerald-700 flex-shrink-0 mt-1">✓</span>
                  <p className="text-emerald-800">
                    Have an amazing design portfolio customized and
                    professionally completed by the end of the course (we
                    provide it for you!).
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-3">
                  <span className="text-emerald-700 flex-shrink-0 mt-1">✓</span>
                  <p className="text-emerald-800">
                    Get hired as a Designer or become a freelancer that can work
                    from anywhere and for anyone. Designers are in high demand!
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-emerald-700 flex-shrink-0 mt-1">✓</span>
                  <p className="text-emerald-800">
                    Master Figma for your design needs then learn to convert
                    your designs into a live HTML an CSS website
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-emerald-700 flex-shrink-0 mt-1">✓</span>
                  <p className="text-emerald-800">
                    Master both Web and Mobile design principles and how to go
                    from sketching to fully fledged high fidelity designs that
                    will wow customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center signUpContainer">
            <button className="signUpBtn">Sign Up for Free</button>
            <p className="fs-3 fw-bold d-inline ms-4">and get started.</p>
          </div>

          {/* <div className="mt-5">
          <h1 className="greenColor fw-bold">Course Content</h1>
        </div> */}

          <div className="greenColor mt-5">
            <h1 className="fw-bold text-3xl">Description</h1>
            <p className="fw-light fs-4">
              Just updated with all modern Design tools and best practices! Join
              a live online community of over 900,000+ students and a course
              taught by industry experts that have actually worked both in
              Silicon Valley and Toronto for top companies. A great Designer is
              becoming harder and harder to find and it isn't rare to find
              designers make $160,000+ salaries now because it is such a
              valuable skill. We will teach you how to get there!
            </p>
            <p className="fw-bold fs-4">
              Using the latest best practices in Web Design and Mobile Design as
              well as User Interface and User Experience Design (UI/UX), this
              course focuses on efficiently getting you from zero to a point
              where you can get hired or win freelance contracts. We will use in
              demand tools like Figma to show you a full workflow from start to
              finish. Graduates of Andrei's courses are now working at Google,
              Tesla, Amazon, Apple, IBM, JP Morgan, Facebook, + other top tech
              companies.
            </p>
          </div>

          <InstructorHome />
        </div>
      </div>
    </>
  );
}
