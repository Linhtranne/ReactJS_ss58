import axios from 'axios';

const API_URL = 'http://localhost:3000/students';

export const getAllStudents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
};

export const createStudent = async (student: any) => {
    try {
        const response = await axios.post(API_URL, student);
        return response.data;
    } catch (error) {
        console.error('Error creating student:', error);
        throw error;
    }
};
