// import { create } from "zustand";

// interface UserProgress {
//   user_id: number;
//   lesson_id: number;
//   completed: boolean;
//   progress_percentage: number;
// }

// interface UserProgressState {
//   userProgress: UserProgress[];
//   loading: boolean;
//   error: string | null;
//   fetchUserProgress: (userId: number) => Promise<void>;
// }

// export const useUserProgressStore = create<UserProgressState>((set) => ({
//   userProgress: [],
//   loading: false,
//   error: null,

//   fetchUserProgress: async (userId: number) => {
//     set({ loading: true, error: null });
//     try {
//       const response = await fetch(
//         `http://localhost:3002/user_progress?user_id=${userId}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch user progress");
//       }
//       const data = await response.json();
//       set({ userProgress: data, loading: false });
//     } catch (error) {
//       set({
//         error: error instanceof Error ? error.message : "An error occurred",
//         loading: false,
//       });
//     }
//   },
// }));
