import StudentForm from "../components/StudentForm";

const Register = ({addStudent}) => {

return (
    <>
       <h1>Register a new student</h1>
       <h2>Please fill up the forms correctly.</h2>
       <div>
      <StudentForm addStudent={addStudent} />
       </div>
    </>
    );

};

export default Register;