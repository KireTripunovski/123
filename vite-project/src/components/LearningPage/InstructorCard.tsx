import React from "react";
import { Card } from "./Card";

interface Instructor {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  students: number;
  bio: string;
}

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  const { name, image, rating, reviews, students, bio } = instructor;

  return (
    <Card className="p-4 border border-gray-200 rounded-lg greenColor overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative min-w-[250px] h-[250px]">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex flex-col md:flex-row md:items-start justify-between">
            <div className="space-y-1">
              <p className="text-green-700 font-semibold">
                {rating} Instructor rating
              </p>
              <p className="text-green-700 font-semibold">{reviews} Reviews</p>
              <p className="text-green-700 font-semibold">
                {students} Students
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-green-700 border-b border-gray-200 pb-2">
              {name}
            </h2>
            <p className="mt-2 text-gray-700">{bio}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InstructorCard;
