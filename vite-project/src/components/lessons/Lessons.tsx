import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { Lesson, UserProgress } from "../../types/userTypes";
import useAuth from "../../hooks/useAuth";
import CourseProgress from "./CourseProgress";
import NavbarComponent from "../Navbar";
import { useNavigate } from "react-router-dom";

export interface CourseProgressProps {
  userProgress: UserProgress[];
  lessons: Lesson[];
  overallProgress: number;
}

const CoursePreview: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Use the useAuth hook to access the current user
  const { currentUser, loading: authLoading } = useAuth();

  // Fetch lessons and user progress from JSON Server
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch lessons
        const lessonsResponse = await axios.get<Lesson[]>(
          "http://localhost:3002/lessons"
        );
        setLessons(lessonsResponse.data);

        // Fetch user progress
        const progressResponse = await axios.get<UserProgress[]>(
          "http://localhost:3002/user_progress"
        );
        setUserProgress(progressResponse.data);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || authLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // If the user is not logged in, show a message
  if (!currentUser) {
    return <div>Please log in to view your course progress.</div>;
  }

  const filteredProgress = userProgress.filter(
    (progress) => progress.user_id === Number(currentUser.id) // Ensure types match
  );

  const totalLessons = lessons.length;
  const totalProgress = filteredProgress.reduce(
    (sum, progress) => sum + progress.progress_percentage,
    0
  );
  const overallProgress = totalProgress / totalLessons;

  const currentLesson = lessons[0];

  return (
    <>
      <NavbarComponent />
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {/* Left Column: Course Video Preview */}
        <div style={{ flex: 2 }}>
          <div style={{ borderRadius: "8px", overflow: "hidden" }}>
            {/* Replace the <video> element with ReactPlayer */}
            <ReactPlayer
              url={currentLesson.video_url}
              controls
              width="100%"
              height="500px"
            />
          </div>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
              {currentLesson.title}
            </h1>
            <button
              style={{
                padding: "10px 20px",
                margin: "5px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#024f40",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Subscribe
            </button>

            <button
              style={{
                padding: "10px 20px",
                margin: "5px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#024f40",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Add to Wish List
            </button>
          </div>
        </div>

        {/* Right Column: Next Lessons */}
        <div style={{ flex: 1 }}>
          <h2>Next Lessons</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {lessons.slice(1, 7).map((lesson) => (
              <div
                key={lesson.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {/* Replace the image with ReactPlayer for video preview */}
                <div
                  style={{
                    width: "80px",
                    height: "45px",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <ReactPlayer
                    url={lesson.video_url} // Use the lesson's video URL
                    width="80px"
                    height="45px"
                    controls={false} // Disable controls for a cleaner look
                    light={true} // Show a light thumbnail (optional)
                    playing={false} // Don't autoplay
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: "16px", margin: "0" }}>
                    {lesson.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                    5:30
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Progress Section (Visible only if logged in) */}
      {currentUser && (
        <div style={{ marginTop: "20px", padding: "20px" }}>
          <CourseProgress
            userProgress={filteredProgress}
            lessons={lessons}
            overallProgress={overallProgress} // Pass overall progress as a prop
          />
        </div>
      )}
      <div
        style={{
          borderTop: "1px solid #024f40",
          backgroundColor: "lightgray",
          textAlign: "center",
          padding: "60px",
        }}
      >
        <h3>Stay updated with the latest quantum Physics</h3>
        <input
          style={{
            backgroundColor: "white",
            color: "#024f40",
            padding: "5px 10px",
          }}
          type="email"
          placeholder="Enter email"
        />
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            backgroundColor: "#024f40",
            color: "white",
            padding: "5px 15px",
          }}
        >
          Go To Profile
        </button>
      </div>
    </>
  );
};

export default CoursePreview;
