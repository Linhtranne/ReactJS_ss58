import React, { useEffect, useState } from 'react';
import { getAllStudents, deleteStudentById, createStudent, updateStudentById } from './studentApi';
import StudentForm, { Student } from './Ex7';

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);
  const [studentToEdit, setStudentToEdit] = useState<Student | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDelete = async () => {
    if (studentToDelete) {
      try {
        await deleteStudentById(studentToDelete.id);
        setShowModal(false);
        setStudentToDelete(null);
        fetchStudents();
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    }
  };

  const handleAdd = async (student: Student) => {
    try {
      await createStudent(student);
      setShowForm(false);
      fetchStudents();
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  const handleUpdate = async (student: Student) => {
    try {
      await updateStudentById(student.id, student);
      setShowForm(false);
      fetchStudents();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div>
      <h1>Danh sách sinh viên</h1>
      <button onClick={() => { setStudentToEdit(null); setShowForm(true); }}>Thêm mới sinh viên</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Trạng thái</th>
            <th>Thời gian thêm</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.student_name}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td>{student.status ? 'Active' : 'Inactive'}</td>
              <td>{student.created_at}</td>
              <td>
                <button onClick={() => { setStudentToEdit(student); setShowForm(true); }}>Sửa</button>
                <button onClick={() => { setStudentToDelete(student); setShowModal(true); }}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && studentToDelete && (
        <div className="modal">
          <div className="modal-content">
            <h2>Xác nhận xóa</h2>
            <p>Bạn có chắc chắn muốn xóa sinh viên {studentToDelete.student_name}?</p>
            <button onClick={() => setShowModal(false)}>Hủy</button>
            <button onClick={handleDelete}>Xóa</button>
          </div>
        </div>
      )}

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>{studentToEdit ? 'Sửa thông tin sinh viên' : 'Thêm mới sinh viên'}</h2>
            <StudentForm addStudent={handleAdd} updateStudent={handleUpdate} student={studentToEdit} />
            <button onClick={() => setShowForm(false)}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;
