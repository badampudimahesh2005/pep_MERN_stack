import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    navigate('/');
    console.log('User logged in:', user);
    setError(null);
    setUser({
      email: '',
      password: ''
    });
  };

  const validateForm = () => {
    if (!user.email || !user.password) {
      setError('Please fill in all fields');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(user.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-10 ">
      <h1 className="text-xl text-center font-bold mb-4">Login Page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          name="email" 
          value={user.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <br />
        <label className="block mb-2">Password:</label>
        <input
          type="password"
          name="password" 
          value={user.password}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <br />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Link to="/register" className=" mb-4">Don't have an account?<span className="text-blue-500 hover:underline"> Register here</span></Link>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded ">Login</button>
      </form>
    </div>
  );
};

export default Login;