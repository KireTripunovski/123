import "../../App.css";

export default function LearningCard() {
  return (
    <section className="sandBackgroundColor p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="px-5 greenColor w-full md:w-1/3">
            <h1 className="font-bold text-2xl">Continue Learning</h1>

            <p>Resume your last lesson on Quantum Mechanics.</p>

            <div className="border-1 border-[#024f40]"></div>

            <p className="text-left my-3">
              The fundamental principles governing particles at the atomic and
              subatomic levels. This course covers key concepts such as
              wave-particle duality, superposition, quantum entanglement, and
              the uncertainty principle. You'll also learn about Schrödinger's
              equation, quantum states, and applications in modern technology
              like quantum computing.
            </p>
            <div className="border-1 border-[#024f40]"></div>

            <p className="font-bold text-lg mt-3">In this course</p>
            <div className="border-1 border-[#024f40]"></div>

            <p className="mb-1">
              Mathematical Foundations of Quantum Mechanics
            </p>
            <div className="border-1 border-[#024f40]"></div>

            <p className="mb-1">Wave-Particle Duality</p>
            <div className="border-1 border-[#024f40]"></div>

            <p className="mb-1">Quantum States and Superposition</p>
          </div>

          <div className="w-full md:w-2/3 mt-4 md:mt-0">
            <img
              src="/images/Achievments/studyImg.jpg"
              alt="study"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
