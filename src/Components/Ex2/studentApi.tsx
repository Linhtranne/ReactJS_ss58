import axios from 'axios';

const API_URL = 'http://localhost:3000/students';

export const getAllStudents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Loi roiii:', error);
        throw error;
    }
};
