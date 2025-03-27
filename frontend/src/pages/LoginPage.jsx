import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!data.email) newErrors.email = "Email is required";
    if (!data.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form Submitted", data);

    setData({
      email: "",
      password: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <div className="min-h-screen w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4 border border-gray-100 transform transition-all max-w-md mx-auto mt-14">
        <h3 className="text-3xl font-semibold py-2 text-center tracking-tight">
          Login Account
        </h3>
        <div>
          <div className="my-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold">Email</label>
            <input
              onChange={handleChange} value={data.email}
              className="pl-3 w-full py-2.5 px-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mt-1 transition-all duration-300"
              type="email"
              name="email"
              id="email"
              placeholder="user@email.com"
              autoComplete="off"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold">Password</label>
            <input
              onChange={handleChange} value={data.password}
              className="pl-3 w-full py-2.5 px-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mt-1 transition-all duration-300"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="off"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <input
            type="submit"
            value="Login"
            className="outline-none mt-5 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded py-2.5 px-2 text-lg w-full"
          />
        </div>
        <div>
          <p className="text-center mt-5">
            Not have an account?{" "}
            <span className="text-blue-500 cursor-pointer">
              <Link to={"/register"}>Register</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
