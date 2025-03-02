import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LeaderboardUserData } from "../../../users.json";
import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const displayedUsers = expanded
    ? LeaderboardUserData
    : LeaderboardUserData.slice(0, 3);
  const highestAchiever = LeaderboardUserData.reduce((prev, current) =>
    prev.totalPoints > current.totalPoints ? prev : current
  );

  const pointsToPass =
    highestAchiever.totalPoints -
    LeaderboardUserData[LeaderboardUserData.length - 1].totalPoints;

  return (
    <section className="bg-[#F1F0E8]">
      <div className="p-6 container">
        <h1 className="text-3xl font-bold greenColor mb-6">Leaderboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg border border-[#024F40] overflow-hidden">
            <div className="grid grid-cols-12 bg-[#FBFBF8] text-[#024F40] font-medium p-4 border-b border-[#024F40]/20">
              <div className="col-span-4 font-bold">Name & Surname</div>
              <div className="col-span-2 text-center font-bold">
                Total Points
              </div>
              <div className="col-span-2 text-center font-bold">Lectures</div>
              <div className="col-span-2 text-center font-bold">
                Achievements
              </div>
              <div className="col-span-2 text-center font-bold">
                Awards
                <ChevronDown className="inline-block ml-1 h-4 w-4 font-bold" />
              </div>
            </div>

            {displayedUsers.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-12 p-4 border-b border-[#024F40]/10 hover:bg-[#FBFBF8]/50"
              >
                <div className="col-span-4 text-[#024F40]">{user.name}</div>
                <div className="col-span-2 text-center text-[#024F40]">
                  {user.totalPoints}/200
                </div>
                <div className="col-span-2 text-center">{user.lectures}/52</div>
                <div className="col-span-2 text-center text-[#024F40]">
                  {user.achievements}/23
                </div>
                <div className="col-span-2 text-center text-[#024F40]">
                  {user.awards}
                  <ChevronDown className="inline-block ml-1 h-4 w-4 text-[#024F40]" />
                </div>
              </div>
            ))}

            <button
              className="w-full p-3 text-center text-[#024F40] hover:bg-[#FBFBF8]/50"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <span className="flex items-center justify-center">
                  Collapse <ChevronUp className="ml-1 h-4 w-4" />
                </span>
              ) : (
                <span className="flex items-center justify-center font-bold">
                  Expand <ChevronDown className="ml-1 h-4 w-4 font-bold" />
                </span>
              )}
            </button>
          </div>

          <div className="bg-white rounded-lg border border-[#024F40]/20 overflow-hidden">
            <div className="font-bold bg-[#FBFBF8] text-[#024F40] font-medium p-4 border-b border-[#024F40]/20">
              Highest Achiever
              <span className="float-right font-bold">
                {highestAchiever.name}
              </span>
            </div>

            <div className="p-4 space-y-4 border-b border-[#024F40]/10">
              <div className="flex justify-between">
                <span className="text-[#024F40]">Total points:</span>
                <span className="font-medium">
                  {highestAchiever.totalPoints}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#024F40]">Total badges:</span>
                <span className="font-medium">{highestAchiever.badges}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#024F40]">
                  Number of completed courses:
                </span>
                <span className="font-medium">
                  {highestAchiever.completedCourses}
                </span>
              </div>
            </div>

            <div className="p-4 text-center">
              <p className="mb-4 font-bold text-[#024F40]">
                You need {pointsToPass} points to pass {highestAchiever.name}!
              </p>
              <button
                onClick={() => navigate("/courses")}
                className="w-full font-bold bg-[#024F40] text-white py-3 px-4 rounded hover:bg-[#024F40]/90 transition-colors"
              >
                Explore courses and take the throne!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
