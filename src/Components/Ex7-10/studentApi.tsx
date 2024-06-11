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

export const updateStudentById = async (id: number, student: any) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, student);
        return response.data;
    } catch (error) {
        console.error('Error updating student:', error);
        throw error;
    }
};

export const deleteStudentById = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting student:', error);
        throw error;
    }
};
