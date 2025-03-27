import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/Slices/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!data.email) newErrors.email = "Email is required";
    if (!data.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const result = await dispatch(loginUser(data)).unwrap();
      setData({
        email: "",
        password: "",
      });
      setErrors({});

      console.log("Login successful", result);
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        backend: error || "Login failed, plz try again",
      }));
    }
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
      backend: ""
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

        {errors.backend && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert">
            <span className="block sm:inline">{errors.backend}</span>
          </div>
        )}

        <div>
          <div className="my-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold">
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
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="my-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold">
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
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
              type="submit"
              disabled={loading}
              className="outline-none mt-5 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded py-2.5 px-2 text-lg w-full"
            >
              {loading ? "Signing in ..." : "Login"}
            </button>
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
