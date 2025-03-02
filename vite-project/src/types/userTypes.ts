// src/types/user.ts
export interface User {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  role_id: number;
  profile_picture: string;
  created_at: string;
  updated_at: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  profile_picture: string;
}
export interface UserProfile extends AuthUser, StudentData {
  username?: string;
  role_id: number;
  grade_level?: string;
  rank?: number;
  total_learners?: number;
  badges_won?: number;
  courses_completed?: number;
  total_points?: number;
  learning_streak?: number;
  subjects_of_interest?: string[];
  phone?: string;
  school?: string;
}

export interface Category {
  id: number;
  name: string;
}
export interface StudentData {
  id: number;
  gender: string;
  birth_date: string;
  school_year: string;
  field_of_study: string;
  current_school: string;
  interests: string[];
  created_at: string;
  updated_at: string;
}

export interface UserProgress {
  user_id: number;
  lesson_id: number;
  completed: boolean;
  progress_percentage: number;
}
export interface Course {
  id: number;
  title: string;
  description: string;
  instructor_id: number;
  category_id: number;
  created_at: string;
}

export interface EnhancedCourse extends Course {
  category: Category;
  duration: number;
  classes: number;
  resources: string[];
  isBookmarked?: boolean;
}
export interface Lesson {
  id: number;
  module_id: number;
  title: string;
  content: string;
  video_url: string;
  order_number: number;
  created_at: string;
}
export interface Modules {
  id: number;
  course_id: number;
  name: string;
  order: number;
  created_at: string;
  updated_at: string;
}
export interface Testimonial {
  index: number;
  image: string;
  name: string;
  comment: string;
}
export interface Task {
  image: string;
  title: string;
  description: string;
}
export interface ProfessorData {
  id: number; // Changed from `id: 6` to `id: number` for flexibility
  position: string;
  company: string;
  gender: string;
  birth_date: string;
  work_experience_years: number;
  created_at: string;
  updated_at: string;
  profile_picture: string; // Added this property
}
export interface Professor extends ProfessorData {
  name: string;
  email: string;
  role_id: number;
  profile_picture: string;
}
export interface LeaderboardUser {
  id: number;
  name: string;
  totalPoints: number;
  lectures: number;
  achievements: number;
  awards: number;
  badges: number;
  completedCourses: number;
}
