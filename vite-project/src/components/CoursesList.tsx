"use client";

import type React from "react";
import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import "./CoursesList.css";
import { Category, Course, EnhancedCourse } from "../types/userTypes";

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<EnhancedCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesResponse, categoriesResponse] = await Promise.all([
          fetch("http://localhost:3002/courses"),
          fetch("http://localhost:3002/categories"),
        ]);
        const coursesData: Course[] = await coursesResponse.json();
        const categoriesData: Category[] = await categoriesResponse.json();

        const enhancedData: EnhancedCourse[] = coursesData.map((course) => {
          const category = categoriesData.find(
            (cat) => cat.id === course.category_id
          ) || { id: 0, name: course.title };
          return {
            ...course,
            category,
            duration: Math.floor(Math.random() * 5 + 8) * 2,
            classes: Math.floor(Math.random() * 5 + 6),
            resources: getRandomResources(),
          };
        });

        const shuffled = [...enhancedData].sort(() => 0.5 - Math.random());
        const randomCourses = shuffled.slice(0, 6);

        setCourses(randomCourses);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getRandomResources = (): string[] => {
    const allResources = [
      "Quizzes",
      "Projects",
      "Downloadable Resources",
      "Video Lectures",
      "Assignments",
      "Discussion Forums",
    ];
    const shuffled = [...allResources].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  return (
    <div className="course-list">
      <h1>Recommended Courses</h1>
      {loading ? (
        <div className="loading">Loading courses...</div>
      ) : (
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
