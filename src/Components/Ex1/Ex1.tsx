
import axios from 'axios' 

export default function Ex1() {
    const API_URL = 'https://localhost/3000/students'
    const getStudent = async () =>{
        try{
            const response = await axios.get(API_URL);
            console.log("danh sach sinh vien:", response.data);
        }catch(error){
            console.log("Loi roi", error); 
        }
    }
    const addStudent = async () => {
        try {
          const newStudent = {
            id:3,
            student_name:" Le Dan",
            email: "ledanvcl@gmail.com",
            address: "Sao Hoa",
            phone:"0999922221",
            status: false,
            created:"02-02-2024",
          };
          const response = await axios.post(API_URL, newStudent);
          console.log('Them sinh vien:', response.data);
        } catch (error) {
          console.error('Loi roi:', error);
        }
      };
    getStudent();
    addStudent();
  return (
    <div>Ex1</div>
  )
}
