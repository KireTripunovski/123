import React, { useState } from "react";
import { Lesson, UserProgress } from "../../types/userTypes";

interface CourseProgressProps {
  userProgress: UserProgress[];
  lessons: Lesson[];
  overallProgress: number;
}

const CourseProgress: React.FC<CourseProgressProps> = ({
  userProgress,
  lessons,
  overallProgress,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="course-progress" style={{ width: "100%", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Course Progress</h2>
      <p style={{ textAlign: "center" }}>
        {overallProgress.toFixed(2)}% completed ({userProgress.length}/
        {lessons.length} lessons)
      </p>

      <button
        className="toggle-button"
        onClick={() => setExpanded(!expanded)}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {expanded ? "Hide Details" : "Show Details"}
      </button>

      {expanded && (
        <div className="lesson-details" style={{ marginTop: "20px" }}>
          <h3 style={{ textAlign: "center" }}>Lesson Details</h3>
          <table
            className="lesson-table"
            style={{
              width: "100%",
              backgroundColor: "#fff",
              color: "#000",
              borderCollapse: "collapse",
              margin: "20px 0",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid #ddd" }}>
                <th style={{ padding: "10px", textAlign: "left" }}>Title</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Status</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Progress</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson) => {
                const progress = userProgress.find(
                  (p) => p.lesson_id === lesson.id
                );
                return (
                  <tr
                    key={lesson.id}
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td style={{ padding: "10px" }}>{lesson.title}</td>
                    <td style={{ padding: "10px" }}>
                      {progress?.completed ? "Completed" : "In Progress"}
                    </td>
                    <td style={{ padding: "10px" }}>
                      {progress?.progress_percentage || 0}%
                    </td>
                    <td style={{ padding: "10px" }}>
                      <a
                        href={lesson.video_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#007bff",
                          textDecoration: "none",
                        }}
                      >
                        Watch Video
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CourseProgress;
