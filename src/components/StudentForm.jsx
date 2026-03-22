import { useState } from "react";

export default function StudentForm({ addStudent }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let err = "";

    if (name === "name" && !value.trim()) err = "Name is required.";
    if (name === "email") {
      if (!value.trim()) err = "Email is required.";
      else if (!/^\S+@\S+\.\S+$/.test(value)) err = "Invalid email format.";
    }
    if (name === "course" && !value.trim()) err = "Course is required.";

    setErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validate(name, value);
    setForm({ ...form, [name]: value });
  };

  const isInvalid = Object.values(errors).some(err => err !== "") ||
                    !form.name || !form.email || !form.course;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isInvalid) {
      addStudent(form);
      setForm({ name: "", email: "", course: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Student Registration</h2>

      <label>Name:</label>
      <input name="name" value={form.name} onChange={handleChange} />
      {errors.name && <p style={styles.error}>{errors.name}</p>}

      <label>Email:</label>
      <input name="email" value={form.email} onChange={handleChange} />
      {errors.email && <p style={styles.error}>{errors.email}</p>}

      <label>Course:</label>
      <input name="course" value={form.course} onChange={handleChange} />
      {errors.course && <p style={styles.error}>{errors.course}</p>}

      <button disabled={isInvalid}>Submit</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "350px",
    margin: "20px auto",
    gap: "10px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px"
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "-5px"
  }
};