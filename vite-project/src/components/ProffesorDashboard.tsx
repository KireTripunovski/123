// import { useEffect } from "react";
// import { useUserProgressStore } from "../store/progresStore";

// export default function ProfessorDashboard() {
//   const { userProgress, fetchUserProgress } = useUserProgressStore();
//   const userId = 1966; // Replace with the actual user ID

//   useEffect(() => {
//     fetchUserProgress(userId);
//   }, [fetchUserProgress, userId]);

//   return (
//     <div>
//       <h1>User Progress</h1>
//       <ul>
//         {userProgress.map((progress) => (
//           <li key={`${progress.user_id}-${progress.lesson_id}`}>
//             <p>Lesson ID: {progress.lesson_id}</p>
//             <p>Completed: {progress.completed ? "Yes" : "No"}</p>
//             <p>Progress: {progress.progress_percentage}%</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
