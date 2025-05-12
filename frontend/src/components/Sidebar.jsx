import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaPlusCircle,
  FaChartPie,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/Slices/authSlice";

const navItems = [
  { name: "Dashboard", icon: FaHome, path: "/dashboard" },
  { name: "Add Transaction", icon: FaPlusCircle, path: "#", isModal: true },
  { name: "Analytics", icon: FaChartPie, path: "/analytics" },
  { name: "Settings", icon: FaUserCog, path: "/settings" },
];

const Sidebar = ({ setShowModal }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <aside className="w-64 min-h-screen fixed left-0 top-0 bg-white shadow-lg flex flex-col z-10">
      <div className="px-6 py-5">
        <h1 className="text-2xl font-bold text-indigo-600">Expensely</h1>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navItems.map(({ name, icon: Icon, path, isModal }) => (
            <li key={name}>
              <NavLink
                to={path}
                onClick={(e) => {
                  if (isModal) {
                    e.preventDefault();
                    setShowModal(true);
                  }
                }}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-lg transition-all hover:bg-indigo-50 ${
                    isActive && !isModal
                      ? "bg-indigo-100 text-indigo-700 font-semibold"
                      : "text-gray-700"
                  }`
                }>
                <Icon className="text-lg" />
                <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 py-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-red-600 cursor-pointer bg-red-100 hover:bg-red-200 rounded-lg transition">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
