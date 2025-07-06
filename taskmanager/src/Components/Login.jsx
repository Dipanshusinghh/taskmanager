import React, { useState } from 'react';
import { Mail, Lock, LogIn, UserPlus } from 'lucide-react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isLogin ? 'Logging in' : 'Registering'} with`, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          {isLogin ? 'Login to Task Manager' : 'Register New Account'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
            <Mail className="text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
            <Lock className="text-gray-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full outline-none bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition"
          >
            {isLogin ? <><LogIn size={18} className="inline mr-1" /> Login</> : <><UserPlus size={18} className="inline mr-1" /> Register</>}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
          <button
            className="text-indigo-600 font-medium hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;