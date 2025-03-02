import type React from "react";
import CourseCard from "./CourseCard";
import { EnhancedCourse } from "../types/userTypes";
import "./CoursesSection.css";
interface CourseSectionProps {
  title: string;
  courses: EnhancedCourse[];
  onBookmark: (courseId: number) => void;
}

const CourseSection: React.FC<CourseSectionProps> = ({
  title,
  courses,
  onBookmark,
}) => {
  return (
    <section className="course-section">
      <h2 className="section-title">{title}</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} onBookmark={onBookmark} />
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
