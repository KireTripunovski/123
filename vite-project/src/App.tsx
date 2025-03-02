// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import "./App.css";
import LoginPage from "./components/login";
import CoursesBoard from "./components/CourseBoard";
import SignUpPage from "./components/SignUp";
import Onbaording from "./components/Onboarding";
import OnboardedPage from "./components/OnBoardingPage";
import CoursePreview from "./components/lessons/Lessons";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer/Footer";
import ProfessorDashboard from "./components/ProffesorDashboard";
import LearningPage from "./components/LearningPage/LearningPage";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<CoursesBoard />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="onboarding" element={<Onbaording />} />
          <Route path="onboarded" element={<OnboardedPage />} />
          <Route path="lessons" element={<CoursePreview />} />
          <Route path="professor" element={<ProfessorDashboard />} />
          <Route path="learnigmode" element={<LearningPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
