import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  const addTask = () => {
    if (taskText.trim() === '' || dueDate === '') {
      return;
    }

    const newTask = {
      text: taskText,
      date: dueDate,
      priority: priority,
    };

    setTasks([...tasks, newTask]);
    setTaskText('');
    setDueDate('');
    setPriority('low');
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>My React To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
      {tasks.map((task, index) => (
          <li
            key={index}
            className={`${
              task.priority === 'low'
                ? 'low-priority'
                : task.priority === 'medium'
                ? 'medium-priority'
                : 'high-priority'
            }`}
          >
            <div className="task-info">
              <p>{task.text}</p>
              <p>Due Date: {task.date}</p>
              <p>Priority: {task.priority}</p>
            </div>
            <button
              className="delete-btn"
              onClick={() => removeTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
