import { Settings } from "lucide-react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfessorProfileCard from "./Professor/ProfessorCard";
import ProfDashboard from "./Professor/ProfDashb";

export default function ProfessorDashboard() {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="max-w-7xl mx-auto p-4">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-green-800">
              Professor Dashboard
            </h1>
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-white bg-green-700 rounded-md">
              <span className="mr-1.5 h-2 w-2 rounded-full bg-green-100"></span>
              Active
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-1.5 text-sm font-medium text-white bg-green-800 rounded-md hover:bg-green-700 transition-colors">
              View Profile
            </button>
            <button className="p-1.5 text-green-800 bg-white rounded-md border border-green-200 hover:bg-green-50 transition-colors">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden bg-green-100">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Dr. Amelia Watson"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden bg-blue-100">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Professor"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden bg-amber-100">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Professor"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden bg-red-100">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Professor"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <span className="text-sm text-gray-700">
              Dr. Amelia Watson +12 others
            </span>
          </div>
        </div>

        <nav className="border-b border-green-800">
          <div className="flex">
            <Link
              to="#"
              className="px-4 py-2 text-sm font-medium text-green-800 border-b-2 border-green-800 link-green"
            >
              Dashboard
            </Link>
            <Link
              to="#"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-green-800 hover:border-b-2 hover:border-green-800/50 transition-colors link-green"
            >
              Courses
            </Link>
            <Link
              to="#"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-green-800 hover:border-b-2 hover:border-green-800/50 transition-colors link-green"
            >
              Messages
            </Link>
          </div>
        </nav>

        {/* Dashboard content would go here */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            gap: "2rem",
          }}
        >
          <ProfessorProfileCard />
          <ProfDashboard />
        </div>
      </div>
    </div>
  );
}
