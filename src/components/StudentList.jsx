import { Link } from "react-router-dom";

export default function StudentList({ students }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Registered Students</h2>
<<<<<<< HEAD

      {students.length === 0 && <p>No registered students yet.</p>}

      {students.length === 0 && <p>No students yet.</p>}

=======
<<<<<<< HEAD
      {students.length === 0 && <p>No registered students yet.</p>}
=======
      {students.length === 0 && <p>No students yet.</p>}
>>>>>>> 73241fd092e3e3f025e40753b924853101906207
>>>>>>> 5476c0c37bf24bdbe6ae6947d25a832fd4be3068
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