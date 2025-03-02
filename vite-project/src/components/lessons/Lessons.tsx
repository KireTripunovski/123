import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseProgress from "./CourseProgress";
import { Lesson, UserProgress } from "../../types/userTypes";
import useAuth from "../../hooks/useAuth";
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

  // Filter progress data for the logged-in user
  const filteredProgress = userProgress.filter(
    (progress) => progress.user_id === Number(currentUser.id) // Ensure types match
  );

  // Log filtered progress for debugging
  console.log("Filtered Progress:", filteredProgress);

  // Calculate overall progress
  const totalLessons = lessons.length;
  const totalProgress = filteredProgress.reduce(
    (sum, progress) => sum + progress.progress_percentage,
    0
  );
  const overallProgress = totalProgress / totalLessons;

  // Log overall progress for debugging
  console.log("Overall Progress:", overallProgress);

  // Assuming the first lesson is the current one
  const currentLesson = lessons[0];

  return (
    <>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {/* Left Column: Course Video Preview */}
        <div style={{ flex: 2 }}>
          <div style={{ borderRadius: "8px", overflow: "hidden" }}>
            <video controls style={{ width: "100%" }}>
              <source src={currentLesson.video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
              Course Title
            </h1>
            <button
              style={{
                padding: "10px 20px",
                margin: "5px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#007bff",
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
                backgroundColor: "#28a745",
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
                <img
                  src="thumbnail-placeholder.jpg" // Replace with actual thumbnail URL
                  alt="Lesson Thumbnail"
                  style={{
                    width: "80px",
                    height: "45px",
                    borderRadius: "4px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h3 style={{ fontSize: "16px", margin: "0" }}>
                    {lesson.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                    5:30
                  </p>{" "}
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
    </>
  );
};

export default CoursePreview;
