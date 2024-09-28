import { IMedico, IMedicoProps } from "@/interfaces/IMedico";
import axios from "axios";


export async function getMedicos(): Promise<IMedico[]> {
  try {
    const response = await axios.get<IMedico[]>(
      "https://localhost:7040/api/Medico"
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching medics: ${error.message}`);
    throw new Error(error.message);
  }
}

export async function addMedico(medico: IMedicoProps): Promise<IMedicoProps> {
  try {
    const response = await axios.post<IMedico>(
      "https://localhost:7040/api/Medico",
      medico
    );
    return response.data;
  } catch (error) {
    console.error(`Error adding medics: ${error.message}`);
    throw new Error(error.message);
  }
}

export async function getMedicoById(id: string): Promise<IMedico | null> {
  try {
    const response = await axios.get<IMedico>(`https://localhost:7040/api/Medico/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching medic by id: ${error.message}`);
    return null; // Retorna null en caso de error o si no se encuentra el médico
  }
}

export async function updateMedico(
  id: string,
  medico: IMedicoProps
): Promise<IMedicoProps> {
  try {
    const response = await axios.put<IMedico>(
      `https://localhost:7040/api/Medico/${id}`,
      medico
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating medics: ${error.message}`);
    throw new Error(error.message);
   
  }
}

export async function deleteMedico(id: string): Promise<void> {
  try {
    await axios.delete(`https://localhost:7040/api/Medico/${id}`);
  } catch (error) {
    console.error(`Error deleting medics: ${error.message}`);
    
    throw new Error(error.message);
  }
}
