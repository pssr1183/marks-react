import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [studentData, setStudentData] = useState(null);

  const fetchStudentMarks = async () => {
    try {
      const response = await axios.get(`https://node-server-oey3.onrender.com/students/${rollNumber}`);
      setStudentData(response.data);
    } catch (error) {
      console.error(error);
      setStudentData(null);
      alert('Student not found or an error occurred.');
    }
  };

  return (
    <div>
      <h1>Student Marks Application</h1>
      <div>
        <h2>Retrieve Student Marks</h2>
        <input
          type="text"
          placeholder="Enter Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <button onClick={fetchStudentMarks}>Get Marks</button>
        {studentData && (
          <div>
            <p>Name: {studentData.name}</p>
            <p>Marks: {studentData.marks}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
