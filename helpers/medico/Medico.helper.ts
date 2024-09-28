import { IMedico, IMedicoProps } from '@/interfaces/IMedico';
import axios from 'axios';

export async function getMedicos(): Promise<IMedico[]> {
    try {
        const response = await axios.get<IMedico[]>("https://localhost:7040/api/Medico");
        return response.data;
    } catch (error) {
        console.error(`Error fetching medics: ${error.message}`);
        throw new Error(error.message);
    }
}

export async function addMedico(medico: IMedicoProps): Promise<IMedicoProps> {
    try {
        const response = await axios.post<IMedico>("https://localhost:7040/api/Medico", medico);
        return response.data;
    } catch (error) {
        console.error(`Error adding medics: ${error.message}`);
        throw new Error(error.message);
    }
}


  
