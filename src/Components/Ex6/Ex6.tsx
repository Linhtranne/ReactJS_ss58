import React, { useEffect } from 'react';
import { getAllStudents, updateStudentById } from './studentApi';

const App: React.FC = () => {
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const students = await getAllStudents();
        console.log('Danh sách sinh viên:', students);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sinh viên:', error);
      }
    };

    const updateStudent = async () => {
      try {
        const updatedStudent = {
          student_name: "Linhtranneeee",
          email: "linhtranne1@gmail.com",
          address: "Tuyen Quang",
          phone: "0123456789",
          status: false,
          created_at: "10-10-2024"
        };
        const result = await updateStudentById(1, updatedStudent);
        console.log('Kết quả cập nhật sinh viên:', result);
      } catch (error) {
        console.error('Lỗi khi cập nhật sinh viên:', error);
      }
    };

    fetchStudents();
    updateStudent();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Danh sách sinh viên</h1>
      </header>
    </div>
  );
};

export default App;
