import type React from "react";
import { useState, useEffect } from "react";
import { Category, Course, EnhancedCourse } from "../types/userTypes";
import CourseSection from "./CourseSection";
import "./CoursesBoard.css";
import NavbarComponent from "./Navbar";
import logo from "../../public/Hero Section - Illustration.png";
import { useNavigate } from "react-router-dom";
import SectionThree from "./CoursesPage/SectionThree/SectionThree";

const CoursesBoard: React.FC = () => {
  const [courses, setCourses] = useState<EnhancedCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
          ) || {
            id: 0,
            name: course.title,
          };
          return {
            ...course,
            category,
            duration: Math.floor(Math.random() * 5 + 8) * 2,
            classes: Math.floor(Math.random() * 5 + 6),
            resources: getRandomResources(),
            isBookmarked: false,
          };
        });

        setCourses(enhancedData);
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
      "Video Lectures",
      "Practice Exercises",
      "Study Notes",
      "Quizzes",
      "Projects",
      "Discussion Forums",
    ];
    const shuffled = [...allResources].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const handleBookmark = (courseId: number) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? { ...course, isBookmarked: !course.isBookmarked }
          : course
      )
    );
  };

  const getMostViewed = () => courses.slice(0, 3);
  const getInFocus = () => courses.slice(3, 6);
  const getNewAndNoteworthy = () => courses.slice(6, 9);

  if (loading) {
    return <div className="loading">Loading courses...</div>;
  }

  return (
    <div className="courses-board ">
      <NavbarComponent />

      <main className="board-content ">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "20px",
            margin: "0 auto",
            width: "80%",
            gap: "50px",
          }}
        >
          <div style={{ width: "80%", margin: "0 auto", marginRight: "50px" }}>
            <img
              src={`${logo}`}
              alt=""
              style={{ maxWidth: "100%", width: "233px" }}
            />
          </div>
          <div>
            <h1>Unlock Your Learning Potential</h1>
            <p>
              Explore a wide range of beginner-friendly courses designed to
              build your skills and knowledge. Whether you're starting fresh or
              looking to strengthen your foundation, our expertly crafted
              lessons will guide you every step of the way. Start learning
              today!
            </p>
          </div>
        </div>
        <CourseSection
          title="Most viewed"
          courses={getMostViewed()}
          onBookmark={handleBookmark}
        />

        <CourseSection
          title="In Focus"
          courses={getInFocus()}
          onBookmark={handleBookmark}
        />

        <CourseSection
          title="New & Noteworthy"
          courses={getNewAndNoteworthy()}
          onBookmark={handleBookmark}
        />

        <div
          className="courseBgOne"
          style={{ display: "flex", padding: "20px" }}
        >
          <div>
            <div>
              <img src="../../public/Vector.png" alt="" />
            </div>
            <div>
              <h1>Beginner Algebra: Foundations for Problem Solving</h1>
            </div>
            <div style={{ color: "#024F40" }}>
              Learn the fundamentals of algebra, including equations, variables,
              and problem-solving techniques.
            </div>
            <button
              style={{
                color: "#024F40",
                border: "1px solid #024F40",
                backgroundColor: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Details
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              style={{
                backgroundColor: "#024F40",
                color: "white",
                width: "50%",
                marginLeft: "20px",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Go To Profile
            </button>
          </div>
          <div
            style={{
              border: "1px solid #024F40",
              borderRadius: "5px",
              width: "30%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                color: "#024F40",
              }}
            >
              <img
                style={{ objectFit: "cover", width: "300px", height: "300px" }}
                src="../../public/teacher.png"
                alt=""
              />
              <h2 style={{ borderBottom: "1px solid 024F40" }}>
                Jackie Von Berger
              </h2>
              <p>
                "Passionate about making complex mathematical concepts easy to
                understand. Specializes in Algebra, Calculus, and Mathematical
                Logic. Dedicated to helping students develop problem-solving
                skills and logical thinking."
              </p>
              <p>
                Professor at XYZ University, 10+ years of teaching experience
              </p>
              <p>PhD in Mathematics, Harvard University</p>
              <button
                style={{
                  backgroundColor: "#024F40",
                  color: "white",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                Go To Profile
              </button>{" "}
            </div>
          </div>
        </div>
        <SectionThree />
      </main>
    </div>
  );
};

export default CoursesBoard;
