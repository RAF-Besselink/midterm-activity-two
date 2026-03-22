import { Link } from "react-router-dom";

export default function StudentList({ students }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Registered Students</h2>

      {students.length === 0 && <p>No registered students yet.</p>}

      <ul>
        {students.map((student, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {student.name} — <Link to={`/student/${index}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}