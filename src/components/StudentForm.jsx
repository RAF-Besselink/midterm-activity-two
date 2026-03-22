import { useState } from "react";
import { useForm } from "react-hook-form";


export default function StudentForm({ addStudent }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    addStudent(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <h2>Student Registration</h2>

      <label>Name:</label>
      <input
        {...register("name", { required: "Name is required." })}
      />
      {errors.name && <p style={styles.error}>{errors.name.message}</p>}

      <label>Email:</label>
      <input
        {...register("email", {
          required: "Email is required.",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Invalid email format."
          }
        })}
      />
      {errors.email && <p style={styles.error}>{errors.email.message}</p>}

      <label>Course:</label>
      <input
        {...register("course", { required: "Course is required." })}
      />
      {errors.course && <p style={styles.error}>{errors.course.message}</p>}

      <button disabled={!isValid}>Submit</button>
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