import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import TaskManager from './Components/Taskmanager';
import Navbar from './Components/Navbar';
import { LayoutDashboard } from 'lucide-react';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
      
        <Navbar />

    
        <div className="flex justify-center items-center mt-6">
          <LayoutDashboard className="text-indigo-600 w-6 h-6 mr-2" />
          <h2 className="text-xl font-semibold text-indigo-700">
            Your Personal Dashboard
          </h2>
        </div>

        {/* Page Content */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tasks" element={<TaskManager />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
