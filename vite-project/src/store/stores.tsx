import { create } from "zustand";
import type { StudentData } from "../types/userTypes";

interface StudentDataStore {
  studentData: StudentData | null;
  fetchStudentData: (userId: number | undefined) => Promise<StudentData>;
  updateStudentData: (
    userId: number | undefined,
    data: Partial<StudentData>
  ) => Promise<void>;
}

export const useStudentDataStore = create<StudentDataStore>((set) => ({
  studentData: null,

  // Fetch Student Data
  fetchStudentData: async (userId: number | undefined) => {
    if (userId === undefined) {
      throw new Error("User ID is undefined");
    }

    const response = await fetch(
      `http://localhost:3002/students_data/${userId}`
    );
    if (!response.ok) {
      console.warn(`No student data found for user ID: ${userId}`);
      // Return an empty object or default data
      return {
        id: userId,
        gender: "",
        birth_date: "",
        school_year: "",
        field_of_study: "",
        current_school: "",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
    }

    const studentData = await response.json();
    set({ studentData }); // Update state with fetched student data
    return studentData;
  },

  // Update Student Data
  updateStudentData: async (
    userId: number | undefined,
    data: Partial<StudentData>
  ) => {
    if (userId === undefined) {
      throw new Error("User ID is undefined");
    }

    // First, check if student data exists
    const checkResponse = await fetch(
      `http://localhost:3002/students_data/${userId}`
    );

    if (!checkResponse.ok) {
      // If student data doesn't exist, create it
      const createResponse = await fetch(
        "http://localhost:3002/students_data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userId, // Set the id to match the user_id
            ...data,
            user_id: userId, // Associate student data with the user
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }),
        }
      );

      if (!createResponse.ok) {
        throw new Error("Failed to create student data");
      }

      const createdData = await createResponse.json();
      set({ studentData: createdData }); // Update state with newly created student data
      return createdData;
    } else {
      // If student data exists, update it
      const updateResponse = await fetch(
        `http://localhost:3002/students_data/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!updateResponse.ok) {
        throw new Error("Failed to update student data");
      }

      const updatedData = await updateResponse.json();
      set({ studentData: updatedData }); // Update state with updated student data
      return updatedData;
    }
  },
  // Create Student Data
  createStudentData: async (
    userId: number | undefined,
    studentData: Partial<StudentData>
  ) => {
    if (userId === undefined) {
      throw new Error("User ID is undefined");
    }

    const response = await fetch("http://localhost:3002/students_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...studentData,
        user_id: userId, // Associate student data with the user
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create student data");
    }

    const createdData = await response.json();
    set({ studentData: createdData }); // Update state with newly created student data
    return createdData;
  },
}));
