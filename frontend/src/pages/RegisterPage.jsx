import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", data);

    setData({
      name: "",
      email: "",
      password: ""
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
      <div className="w-full max-w-md mx-auto mt-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4 border border-gray-100 transform transition-all">
          <h3 className="text-3xl font-semibold py-2 text-center tracking-tight">
            Create Account
          </h3>
          <div>
            <div className="my-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                onChange={handleChange}
                value={data.name}
                className="pl-3 w-full py-2.5 px-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mt-1 transition-all duration-300"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="my-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                onChange={handleChange}
                value={data.email}
                className="pl-3 w-full py-2.5 px-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mt-1 transition-all duration-300"
                type="email"
                name="email"
                id="email"
                placeholder="user@email.com"
                autoComplete="off"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="my-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                onChange={handleChange}
                value={data.password}
                className="pl-3 w-full py-2.5 px-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mt-1 transition-all duration-300"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                autoComplete="off"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="outline-none mt-5 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded py-2.5 px-2 text-lg w-full">
              Register
            </button>
          </div>
          <div>
            <p className="text-center mt-5">
              Already have an account?
              <Link
                to={"/login"}
                className="text-blue-500 hover:underline ml-1">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
