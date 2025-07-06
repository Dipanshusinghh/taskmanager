import React from 'react';
import { LayoutDashboard } from 'lucide-react';

const DashboardIntro = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center gap-3 mb-6">
        <LayoutDashboard className="text-indigo-600 w-7 h-7" />
        <h2 className="text-3xl font-bold text-gray-900">Your Personal Dashboard</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">To-Do List</h3>
          <p className="text-sm text-gray-600">Capture and organize tasks seamlessly to stay on top of your wk.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Tracking</h3>
          <p className="text-sm text-gray-600">View and manage all your projects in one place with detailed insights.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Collaborate with Your Team</h3>
          <p className="text-sm text-gray-600">Share tasks and projects, communicate with team members effectively.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardIntro;
