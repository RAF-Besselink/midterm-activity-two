import { useParams } from "react-router-dom";

export default function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students[id];

  if (!student) return <h2 style={{ textAlign: "center" }}>Student not found.</h2>;

  return (
    <div style={styles.card}>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    background: "#f9f9f9"
  }
};