import React, { useEffect } from 'react';
import { getAllStudents } from './studentApi';

const Ex2: React.FC = () => {
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const students = await getAllStudents();
        console.log('Danh sách sinh viên:', students);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sinh viên:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Danh sách sinh viên</h1>
      </header>
    </div>
  );
};

export default Ex2;
