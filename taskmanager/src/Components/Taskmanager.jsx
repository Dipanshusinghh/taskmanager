import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2 } from 'lucide-react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    await axios.post('http://localhost:5000/api/tasks', { title: newTask });
    setNewTask('');
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const handleToggleComplete = async (id, completed) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed: !completed });
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-indigo-200 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">Task Manager</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleAddTask}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className={`rounded-xl shadow-md px-6 py-4 flex justify-between items-center transition-all duration-300 ${
                task.completed ? 'bg-green-100' : 'bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task._id, task.completed)}
                  className="h-5 w-5 accent-indigo-600"
                />
                <span
                  className={`text-lg font-medium ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                  }`}
                >
                  {task.title}
                </span>
              </div>
              <button
                onClick={() => handleDeleteTask(task._id)}
                className="p-2 rounded-full hover:bg-red-100 transition"
              >
                <Trash2 className="text-red-500 hover:text-red-700" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
