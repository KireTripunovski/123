import React from "react";
import InstructorCard from "./InstructorCard";

const InstructorHome: React.FC = () => {
  const instructors = [
    {
      id: 1,
      name: "Jackie Von Berger",
      image: "/images/Achievments/Male-professor.png",
      rating: 4.6,
      reviews: 257,
      students: 3200,
      bio: "Jackie is the instructor of some of the highest rated programming and technical courses online. He no longer teaches on Udemy. Instead, he is now the founder of ZTM Academy which is one of the fastest growing education platforms in the world",
      badge: "Marija Koteska",
    },
    {
      id: 2,
      name: "Jackie Von Berger",
      image: "/images/Achievments/female -professor.png",
      rating: 4.6,
      reviews: 257,
      students: 3200,
      bio: "Jackie is the instructor of some of the highest rated programming and technical courses online. He no longer teaches on Udemy. Instead, he is now the founder of ZTM Academy which is one of the fastest growing education platforms in the world",
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Instructors</h1>
      <div className="space-y-6">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </main>
  );
};

export default InstructorHome;
