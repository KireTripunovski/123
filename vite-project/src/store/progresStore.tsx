import { create } from "zustand";

interface UserProgress {
  user_id: number;
  lesson_id: number;
  completed: boolean;
  progress_percentage: number;
}

interface UserProgressStore {
  userProgress: UserProgress[];
  fetchUserProgress: (userId: number) => Promise<void>;
  currentUserProgress: (userId: number) => UserProgress[];
  completedLessons: (userId: number) => number;
  averageProgress: (userId: number) => number;
}

export const useUserProgressStore = create<UserProgressStore>((set, get) => ({
  userProgress: [],

  // Fetch user progress from the backend
  fetchUserProgress: async (userId: number) => {
    try {
      const response = await fetch(
        `http://localhost:3002/user_progress?user_id=${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user progress");
      }
      const data = await response.json();
      set({ userProgress: data });
    } catch (error) {
      console.error("Error fetching user progress:", error);
    }
  },

  // Get progress for the current user
  currentUserProgress: (userId: number) => {
    return get().userProgress.filter((progress) => progress.user_id === userId);
  },

  // Calculate completed lessons for the current user
  completedLessons: (userId: number) => {
    const progress = get().currentUserProgress(userId);
    return progress.filter((p) => p.completed).length;
  },

  // Calculate average progress percentage for the current user
  averageProgress: (userId: number) => {
    const progress = get().currentUserProgress(userId);
    if (progress.length === 0) return 0;
    const total = progress.reduce((sum, p) => sum + p.progress_percentage, 0);
    return total / progress.length;
  },
}));
