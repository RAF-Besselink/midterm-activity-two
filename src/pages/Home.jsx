import {useState, useEffect} from "react";
import StudentList from "../components/StudentList";


export default function Home ({ students }) {
  
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <StudentList students={students} />
    </div>
  );
}
