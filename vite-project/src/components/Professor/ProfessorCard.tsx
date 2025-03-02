import { Heart, BarChart2, Star, User } from "lucide-react";

export default function ProfessorProfileCard() {
  return (
    <div className="max-w-md mx-auto bg-[#f5f5f0] p-6">
      {/* Profile Info Card */}
      <div className="border border-teal-800/20 rounded-lg p-6 mb-4 flex flex-col items-center">
        <div className="relative w-24 h-24 mb-4 rounded-full border-2 border-teal-800 overflow-hidden">
          <img
            src="/placeholder.svg?height=96&width=96"
            alt="Professor profile picture"
            className="object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-[#2d3748] mb-1">
          Marko Vatsanovski
        </h1>
        <p className="text-[#4a5568] mb-4">Science Professor</p>
        <div className="w-full max-w-xs h-px bg-gray-300 mb-2"></div>
        <p className="text-[#4a5568]">DSU Orce Nikolov</p>
      </div>

      {/* Menu Card */}
      <div className="border border-teal-800/20 rounded-lg overflow-hidden">
        <ul>
          <li className="border-b border-gray-200">
            <button className="w-full py-4 px-6 flex items-center text-left hover:bg-gray-50">
              <Heart className="w-5 h-5 text-teal-800 mr-3" />
              <span className="text-[#2d3748] font-medium">My Courses</span>
            </button>
          </li>
          <li className="border-b border-gray-200">
            <button className="w-full py-4 px-6 flex items-center text-left hover:bg-gray-50">
              <BarChart2 className="w-5 h-5 text-teal-800 mr-3" />
              <span className="text-[#2d3748] font-medium">Statistics</span>
            </button>
          </li>
          <li className="border-b border-gray-200">
            <button className="w-full py-4 px-6 flex items-center text-left hover:bg-gray-50">
              <Star className="w-5 h-5 text-teal-800 mr-3" />
              <span className="text-[#2d3748] font-medium">
                Recommendations
              </span>
            </button>
          </li>
          <li>
            <button className="w-full py-4 px-6 flex items-center text-left hover:bg-gray-50">
              <User className="w-5 h-5 text-teal-800 mr-3" />
              <span className="text-[#2d3748] font-medium">Testimonials</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
