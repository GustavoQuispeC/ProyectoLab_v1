import { IMedico } from '@/interfaces/IMedico';
import axios from 'axios';

export async function getMedicos() {
    try {
        const response = await axios.get("https://localhost:7040/api/Medico");
        return response.data;
    } catch (error) {
        console.error(`Error fetching medics: ${error.message}`);
        throw new Error(error.message);
    }
}
  
