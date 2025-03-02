import type React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Edit,
  Settings,
  MoreHorizontal,
  Trophy,
  BookOpen,
  Award,
  Save,
} from "lucide-react";
import type {
  UserProfile,
  Category,
  StudentData,
  UserProgress,
} from "../types/userTypes";
import "./dashboard.css";
import useAuth from "../hooks/useAuth";
import NavbarComponent from "./Navbar";
import { useStudentDataStore } from "../store/stores";
import CourseList from "./CoursesList";

const Dashboard: React.FC = () => {
  const { currentUser, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState<Partial<StudentData>>({});
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);

  const { fetchStudentData, updateStudentData } = useStudentDataStore();

  useEffect(() => {
    if (!loading) {
      if (!currentUser) {
        navigate("/login");
        return;
      }

      const fetchData = async () => {
        try {
          // Fetch user profile data
          const userResponse = await fetch(
            `http://localhost:3002/users/${currentUser.id}`
          );
          if (!userResponse.ok) {
            throw new Error("Failed to fetch user data");
          }
          const userData = await userResponse.json();

          // Fetch student data
          const studentData = await fetchStudentData(currentUser.id);
          // If no student data is found, studentData will be an empty object or default data

          // Fetch categories
          const interestsResponse = await fetch(
            "http://localhost:3002/interests"
          );
          if (!interestsResponse.ok) {
            throw new Error("Failed to fetch categories");
          }
          const interestsData = await interestsResponse.json();

          // Fetch user progress
          const progressResponse = await fetch(
            `http://localhost:3002/user_progress?user_id=${currentUser.id}`
          );
          if (!progressResponse.ok) {
            throw new Error("Failed to fetch user progress");
          }
          const progressData = await progressResponse.json();

          // Set state with fetched data
          setUserProfile({ ...userData, ...studentData });
          setCategories(interestsData);
          setUserProgress(progressData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [currentUser, navigate, loading, fetchStudentData]);

  const handleEdit = () => {
    setEditMode(true);
    setEditedData({
      gender: userProfile?.gender || "",
      birth_date: userProfile?.birth_date || "",
      school_year: userProfile?.school_year || "",
      field_of_study: userProfile?.field_of_study || "",
      current_school: userProfile?.current_school || "",
    });
  };

  const handleSave = async () => {
    if (userProfile && userProfile.id) {
      try {
        await updateStudentData(userProfile.id, editedData);
        setUserProfile({ ...userProfile, ...editedData });
        setEditMode(false);
      } catch (error) {
        console.error("Error updating student data:", error);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!currentUser) {
    return <div>Redirecting to login...</div>;
  }

  if (!userProfile) {
    return (
      <div className="error">
        Unable to load user profile. Please try again later.
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  // Helper function to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <NavbarComponent />
      <div className="dashboard-container">
        {/* Header/Navigation */}

        {/* Main Dashboard Content */}
        <main className="dashboard-content">
          {/* Welcome Section */}
          <section className="welcome-section">
            <div className="welcome-text">
              <h1>Welcome back, {userProfile.name}!</h1>
              <div className="friends-list">
                <div className="friend-avatars">
                  {/* Friend avatars would go here */}
                  <span className="friend-avatar"></span>
                  <span className="friend-avatar"></span>
                  <span className="friend-avatar"></span>
                  <span className="friend-avatar"></span>
                </div>
                <span className="friends-text">Luiza, Kane +12 others</span>
              </div>
            </div>
            <div className="welcome-actions">
              <div className="learning-streak">
                <Trophy size={16} />
                <span>Active Learning Streak: 10 days</span>
              </div>
              <button className="logout-button" onClick={logout}>
                Log Out
              </button>
              <button className="view-profile-btn">View Profile</button>
            </div>
          </section>

          {/* Dashboard Tabs */}
          <div className="dashboard-tabs">
            <button
              className={`tab-btn ${activeTab === "dashboard" ? "active" : ""}`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`tab-btn ${
                activeTab === "my-courses" ? "active" : ""
              }`}
              onClick={() => setActiveTab("my-courses")}
            >
              My Courses
            </button>
            <button
              className={`tab-btn ${activeTab === "community" ? "active" : ""}`}
              onClick={() => setActiveTab("community")}
            >
              Community
            </button>
            <button
              className={`tab-btn ${
                activeTab === "leaderboard" ? "active" : ""
              }`}
              onClick={() => setActiveTab("leaderboard")}
            >
              Leaderboard
            </button>
            <button
              className={`tab-btn ${
                activeTab === "achievements" ? "active" : ""
              }`}
              onClick={() => setActiveTab("achievements")}
            >
              Achievements
            </button>
          </div>

          {/* User Profile and Info Sections */}
          <div className="profile-sections">
            {/* Left Section - User Profile */}
            <section className="profile-section">
              <div className="profile-image-container">
                <img
                  src={
                    userProfile.profile_picture ||
                    "/placeholder.svg?height=150&width=150"
                  }
                  alt="Profile"
                  className="profile-image"
                />
              </div>
              <div className="profile-details">
                <h2 className="profile-name">
                  {userProfile.name} <span className="verified-badge">✓</span>
                </h2>
                <p className="profile-username">
                  @{userProfile.name.toLowerCase().replace(/\s+/g, "")}
                </p>
                <p className="profile-rank">Role ID: {userProfile.role_id}</p>
                <p className="profile-badges">
                  Member since: {formatDate(userProfile.created_at)}
                </p>
              </div>
            </section>

            {/* Middle Section - Personal Info */}
            <section className="info-section">
              <h3 className="section-title">Personal Info</h3>
              <div className="info-fields">
                <div className="info-field">
                  <label>Email Address</label>
                  <p>{userProfile.email}</p>
                </div>
                <div className="info-field">
                  <label>Gender</label>
                  {editMode ? (
                    <input
                      type="text"
                      name="gender"
                      value={editedData.gender || ""}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{userProfile.gender}</p>
                  )}
                </div>
                <div className="info-field">
                  <label>Birth Date</label>
                  {editMode ? (
                    <input
                      type="date"
                      name="birth_date"
                      value={editedData.birth_date || ""}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{formatDate(userProfile.birth_date)}</p>
                  )}
                </div>
                <div className="info-field">
                  <label>School Year</label>
                  {editMode ? (
                    <input
                      type="text"
                      name="school_year"
                      value={editedData.school_year || ""}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{userProfile.school_year}</p>
                  )}
                </div>
                <div className="info-field">
                  <label>Field of Study</label>
                  {editMode ? (
                    <input
                      type="text"
                      name="field_of_study"
                      value={editedData.field_of_study || ""}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{userProfile.field_of_study}</p>
                  )}
                </div>
                <div className="info-field">
                  <label>Current School</label>
                  {editMode ? (
                    <input
                      type="text"
                      name="current_school"
                      value={editedData.current_school || ""}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{userProfile.current_school}</p>
                  )}
                </div>
              </div>
              {editMode ? (
                <button className="save-profile-btn" onClick={handleSave}>
                  <Save size={16} />
                  Save Changes
                </button>
              ) : (
                <button className="edit-profile-btn" onClick={handleEdit}>
                  <Edit size={16} />
                  Edit Profile
                </button>
              )}
            </section>

            {/* Right Section - Categories */}
            <section className="subjects-section">
              <h3 className="section-title">Available Categories</h3>
              <div className="subjects-grid">
                {categories.map((category) => (
                  <div key={category.id} className="subject-tag">
                    {category.name}
                  </div>
                ))}
              </div>
              <button className="edit-preferences-btn">
                <Settings size={16} />
                Edit Preferences
              </button>
            </section>
          </div>

          {/* Stats Cards */}
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-title">
                  <BookOpen size={20} />
                  <h3>Courses Completed</h3>
                </div>
                <span className="stat-value">7</span>
              </div>
              <div className="stat-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "10%" }}></div>
                </div>
                <div className="progress-info">
                  <span className="progress-percentage">
                    {userProgress.map((user) => user.progress_percentage)}
                  </span>
                  <button className="more-info-btn">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-title">
                  <Trophy size={20} />
                  <h3>Points</h3>
                </div>
                <span className="stat-value">150</span>
              </div>
              <div className="stat-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "5%" }}></div>
                </div>
                <div className="progress-info">
                  <span className="progress-percentage">5%</span>
                  <button className="more-info-btn">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-title">
                  <Award size={20} />
                  <h3>Badges Won</h3>
                </div>
                <span className="stat-value">20</span>
              </div>
              <div className="stat-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "13%" }}></div>
                </div>
                <div className="progress-info">
                  <span className="progress-percentage">13%</span>
                  <button className="more-info-btn">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div>
        <CourseList />
      </div>
    </>
  );
};

export default Dashboard;
