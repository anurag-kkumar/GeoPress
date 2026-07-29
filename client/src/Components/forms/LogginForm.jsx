import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const LogginForm = ({ setLoggedIn }) => {

  const { fetchUser } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  console.log(formData);

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData
      );

      const token = response.data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", "true");

      await fetchUser();

      setLoggedIn(true);

      toast.success(response.data.message);

      navigate("/home");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    }
  }
  return (
    <form
      onSubmit={submitHandler}
      className="w-full max-w-md p-6 space-y-5 bg-gray-900 rounded-2xl shadow-lg text-white"
    >
      {/* Email */}
      <label className="block">
        <p className="mb-1 font-medium">
          Email Address <sup className="text-red-400">*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          placeholder="Enter email"
          onChange={changeHandler}
          name="email"
          className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </label>

      {/* Password */}
      <label className="block relative">
        <p className="mb-1 font-medium">
          Password <sup className="text-red-400">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          placeholder="Enter your password"
          onChange={changeHandler}
          name="password"
          className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />

        {/* Eye Icon */}
        <span
          className="absolute right-3 top-10 cursor-pointer text-gray-400 hover:text-white"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </span>
      </label>

      {/* Forgot Password */}
      <Link
        to="#"
        className="block text-sm text-blue-400 hover:underline ml-auto w-fit"
      >
        Forgot Password?
      </Link>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-[#E0FF00] text-black hover:bg-blue-700 transition font-semibold"
      >
        Sign In
      </button>
    </form>
  );
};

export default LogginForm;
