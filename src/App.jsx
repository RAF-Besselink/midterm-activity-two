import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import NavBar from './components/NavBar';
import StudentDetails from "./components/StudentDetails";

const App = () => { 
 
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <> 
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home students={students} />} />
        <Route path="/register" element={<Register addStudent={addStudent} />} />
        <Route path="/student/:id" element={<StudentDetails students={students} />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
