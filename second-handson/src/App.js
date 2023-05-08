import React, { useState } from 'react';
import './App.css';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [rating, setRating] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEntries([...entries, { name, department, rating }]);
    setName('');
    setDepartment('');
    setRating('');
  };

  return (
    <div className="App">
      <h1>Employee Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Department:
          <input type="text" value={department} onChange={(event) => setDepartment(event.target.value)} />
        </label>
        <br />
        <label>
          Rating:
          <input type="number" min="1" max="5" value={rating} onChange={(event) => setRating(event.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div className="entries">
        {entries.map((entry, index) => (
          <div key={index}>
            <p>Name: {entry.name}</p>
            <p>Department: {entry.department}</p>
            <p>Rating: {entry.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
