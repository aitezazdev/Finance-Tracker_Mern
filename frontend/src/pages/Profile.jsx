import React, { useEffect, useState } from "react";
import {
  userInfo,
  updateUserInfo,
  deleteUserAccount,
} from "../api/userInfoApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/Slices/authSlice";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUserInfo = async () => {
    try {
      const response = await userInfo();
      const data = response.data;
      setUserData(data);
      setName(data.name);
      setEmail(data.email);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleSave = async () => {
    try {
      setError("");
      const response = await updateUserInfo({ name, email });
      setUserData(response.data);
      setIsEditing(false);
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong";
      setError(msg);
    }
  };

  const confirmDelete = async () => {
    try {
      setDeleteError("");
      await deleteUserAccount();
      dispatch(logout());
      setShowDeleteConfirm(false);
      navigate("/register");
    } catch (error) {
      const msg = error.response?.data?.message || "Failed to delete account.";
      setDeleteError(msg);
    }
  };

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .slice(2);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md mt-24 space-y-6 relative">
      <div className="flex items-center space-x-4">
        <div className="w-14 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">
          {getInitials(userData.name)}
        </div>
        <div className="w-full">
          {isEditing ? (
            <>
              <input
                className="block border p-2 rounded w-full mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={`block border p-2 rounded w-full ${
                  error.toLowerCase().includes("email") ? "border-red-500" : ""
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && error.toLowerCase().includes("email") && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </>
          ) : (
            <>
              <p className="font-semibold">{userData.name}</p>
              <p className="text-gray-600">{userData.email}</p>
            </>
          )}
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500">
          Joined: {new Date(userData.createdAt).toLocaleDateString("en-GB")}
        </p>
      </div>

      <div className="flex space-x-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Edit
          </button>
        )}
        <button
          onClick={() => setShowDeleteConfirm(true)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
          Delete Account
        </button>
      </div>

      {deleteError && (
        <p className="text-red-500 text-sm mt-2">{deleteError}</p>
      )}

      {showDeleteConfirm && (
        <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full space-y-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Are you sure?
            </h2>
            <p className="text-sm text-gray-600">
              Deleting your account is permanent. This action cannot be undone.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800">
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
