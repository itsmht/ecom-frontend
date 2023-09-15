import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
              className="px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">Invalid Email</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium" htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">Password is required and should be at least 6 characters</p>}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Login
            </button>
          </div>
          <Link to='/signup'> <h1 className='text-gray-800 font-medium'>New User! Please sign up</h1></Link>   
        </form>
      </div>
    </div>
  );
};

export default Login;
