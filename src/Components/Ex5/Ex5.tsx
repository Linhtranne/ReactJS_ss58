import React, { useEffect } from 'react';
import { getAllStudents, createStudent } from './studentApi';

const Ex5: React.FC = () => {
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const students = await getAllStudents();
        console.log('Danh sách sinh viên:', students);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sinh viên:', error);
      }
    };

    const addStudent = async () => {
      try {
        const newStudent = {
          id: 3,
          student_name: "Hieu",
          email: "hieunguyen@example.com",
          address: "Ho Chi Minh",
          phone: "0912345678",
          status: true,
          created_at: new Date().toISOString()
        };
        const result = await createStudent(newStudent);
        console.log('Kết quả thêm sinh viên:', result);
      } catch (error) {
        console.error('Lỗi khi thêm sinh viên:', error);
      }
    };

    fetchStudents();
    addStudent();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Danh sách sinh viên</h1>
      </header>
    </div>
  );
};

export default Ex5;
