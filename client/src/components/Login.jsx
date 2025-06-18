import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

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
    console.log('User logged in:', user);
  };

  const validateForm = () => {
    if (!user.email || !user.password) {
      alert('Please fill in all fields');
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded ">Login</button>
      </form>
    </div>
  );
};

export default Login;