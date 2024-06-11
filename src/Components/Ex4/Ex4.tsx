import React, { useEffect } from 'react';
import { getAllStudents, removeById } from './studentApi';

const Ex4: React.FC = () => {
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const students = await getAllStudents();
        console.log('Danh sách sinh viên:', students);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sinh viên:', error);
      }
    };

    const deleteStudent = async () => {
      try {
        const result = await removeById(1);
        console.log('Kết quả xóa sinh viên:', result);
      } catch (error) {
        console.error('Lỗi khi xóa sinh viên:', error);
      }
    };

    fetchStudents();
    deleteStudent();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Danh sách sinh viên</h1>
      </header>
    </div>
  );
};

export default Ex4;
