// api.ts

import { ProfessorData } from "../../types/userTypes";

export const fetchProfessorData = async (
  professorId: string
): Promise<ProfessorData | null> => {
  try {
    const response = await fetch(
      `http://localhost:3002/professor_data/${professorId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: ProfessorData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching professor data:", error);
    return null;
  }
};
