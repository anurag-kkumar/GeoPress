import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const SignupForm = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
    city: "",
  });

  const [showpassword, setShowPassword] = useState(false);
  const [showcpassword, setShowcPassword] = useState(false);

  const navigate = useNavigate();

  function changehandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    const signupData = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
      city: formData.city,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        signupData
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isLoggedIn", "true");

      setLoggedIn(true);

      toast.success(response.data.message);

      navigate("/home");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Signup Failed"
      );
    }
  }

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-gray-900 p-6 rounded-xl shadow-lg">
      <form onSubmit={submitHandler} className="space-y-4">

        {/* First Name & Last Name */}
        <div className="flex gap-4">
          <label className="w-1/2">
            <p className="mb-1 font-medium text-gray-300">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              name="firstname"
              required
              placeholder="Enter first name"
              value={formData.firstname}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2 text-white"
            />
          </label>

          <label className="w-1/2">
            <p className="mb-1 font-medium text-gray-300">
              Last Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              name="lastname"
              required
              placeholder="Enter last name"
              value={formData.lastname}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2 text-white"
            />
          </label>
        </div>

        {/* Email */}
        <label className="block">
          <p className="mb-1 font-medium text-gray-300">
            Email <sup className="text-red-500">*</sup>
          </p>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter email"
            value={formData.email}
            onChange={changehandler}
            className="w-full border rounded-lg px-3 py-2 text-white"
          />
        </label>

        {/* Gender */}
        <label className="block">
          <p className="mb-1 font-medium text-gray-300">
            Gender <sup className="text-red-500">*</sup>
          </p>

          <select
            name="gender"
            required
            value={formData.gender}
            onChange={changehandler}
            className="w-full border rounded-lg px-3 py-2 text-white"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        {/* City */}
        <label className="block">
          <p className="mb-1 font-medium text-gray-300">
            City <sup className="text-red-500">*</sup>
          </p>

          <input
            type="text"
            name="city"
            required
            placeholder="Enter city"
            value={formData.city}
            onChange={changehandler}
            className="w-full border rounded-lg px-3 py-2 text-white"
          />
        </label>

        {/* Password */}
        <div className="relative">
          <label className="block">
            <p className="mb-1 font-medium text-gray-300">
              Password <sup className="text-red-500">*</sup>
            </p>

            <input
              type={showpassword ? "text" : "password"}
              name="password"
              required
              placeholder="Enter password"
              value={formData.password}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2 text-white"
            />
          </label>

          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 bottom-3 cursor-pointer text-xl text-gray-300"
          >
            {showpassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block">
            <p className="mb-1 font-medium text-gray-300">
              Confirm Password <sup className="text-red-500">*</sup>
            </p>

            <input
              type={showcpassword ? "text" : "password"}
              name="confirmpassword"
              required
              placeholder="Re-enter password"
              value={formData.confirmpassword}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2 text-white"
            />
          </label>

          <span
            onClick={() => setShowcPassword((prev) => !prev)}
            className="absolute right-3 bottom-3 cursor-pointer text-xl text-gray-300"
          >
            {showcpassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-[#E0FF00] text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;