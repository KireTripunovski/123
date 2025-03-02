import type React from "react";
import { Bookmark } from "lucide-react";
import "./CoursesCard.css";
import { EnhancedCourse } from "../types/userTypes";

interface CourseCardProps {
  course: EnhancedCourse;
  onBookmark?: (courseId: number) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onBookmark }) => {
  return (
    <div style={{ color: "#024F40" }} className="course-card">
      <div
        className="course-header"
        style={{ borderBottom: "1px solid #024F40" }}
      >
        <span className={`category-badge category-${course.category.id}`}>
          📚 {course.category.name}
        </span>
        <button
          style={{ color: "#024F40" }}
          className={`bookmark-button ${
            course.isBookmarked ? "bookmarked" : ""
          }`}
          onClick={() => onBookmark && onBookmark(course.id)}
        >
          <Bookmark className="bookmark-icon" />
        </button>
      </div>
      <h3 style={{ color: "#024F40" }} className="course-title">
        {course.title}
      </h3>
      <p style={{ color: "#024F40" }} className="course-description">
        {course.description}
      </p>
      <div style={{ color: "#024F40" }} className="course-stats">
        <div className="stats-row">
          <span>Total Duration: {course.duration} hours</span>
        </div>
        <div className="stats-row">
          <span>Number of Classes: {course.classes}</span>
        </div>
        <div className="stats-row resources">
          {course.resources.join(" • ")}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
