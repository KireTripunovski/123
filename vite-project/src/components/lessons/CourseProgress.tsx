import React, { useState } from "react";
import { Lesson, UserProgress } from "../../types/userTypes";

interface CourseProgressProps {
  userProgress: UserProgress[];
  lessons: Lesson[];
  overallProgress: number; // Add overallProgress to the interface
}

const CourseProgress: React.FC<CourseProgressProps> = ({
  userProgress,
  lessons,
  overallProgress, // Destructure overallProgress from props
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h2>Course Progress</h2>
      <p>
        {overallProgress.toFixed(2)}% completed ({userProgress.length}/
        {lessons.length} lessons)
      </p>

      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Hide Details" : "Show Details"}
      </button>

      {expanded && (
        <div>
          <h3>Lesson Details</h3>
          <ul>
            {lessons.map((lesson) => {
              const progress = userProgress.find(
                (p) => p.lesson_id === lesson.id
              );
              return (
                <li key={lesson.id}>
                  <strong>{lesson.title}</strong>
                  <p>
                    Status: {progress?.completed ? "Completed" : "In Progress"}
                  </p>
                  <p>Progress: {progress?.progress_percentage || 0}%</p>
                  <a
                    href={lesson.video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Video
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseProgress;
