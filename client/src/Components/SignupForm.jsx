import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

//   const [accountType, setaccountType] = useState("student");
  const [showpassword, setShowPassword] = useState(false);
  const [showcpassword, setShowcPassword] = useState(false);

  const navigate = useNavigate();

  function changehandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoggedIn(true);
    toast.success("Account created!");

    const final = {
      ...formData,
    
    };

    console.log(final);
    navigate("/home");
  }

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-gray-900 p-6 rounded-xl shadow-lg">
      {/* Account Type Buttons */}
      {/* <div className="flex mb-6 bg-gray-100 p-1 rounded-lg">
        <button
          onClick={() => setaccountType("student")}
          className={`w-1/2 py-2 rounded-lg font-medium transition 
          ${accountType === "student" ? "bg-pink-500 text-white" : "text-gray-600"}`}
        >
          Student
        </button>

        <button
          onClick={() => setaccountType("instructor")}
          className={`w-1/2 py-2 rounded-lg font-medium transition 
          ${accountType === "instructor" ? "bg-pink-500 text-white" : "text-gray-600"}`}
        >
          Instructor
        </button>
      </div> */}

      <form onSubmit={submitHandler} className="space-y-4">
        {/* First + Last Name */}
        <div className="flex gap-4">
          <label className="w-1/2">
            <p className="mb-1 font-medium text-gray-700">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              name="firstname"
              required
              placeholder="Enter first name"
              value={formData.firstname}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2 focus:outline-[#E0FF00]"
            />
          </label>

          <label className="w-1/2">
            <p className="mb-1 font-medium text-gray-700">
              Last Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              name="lastname"
              required
              placeholder="Enter last name"
              value={formData.lastname}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2 focus:outline-[#E0FF00]"
            />
          </label>
        </div>

        {/* Email */}
        <label className="block">
          <p className="mb-1 font-medium text-gray-700">
            Email <sup className="text-red-500">*</sup>
          </p>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter email"
            value={formData.email}
            onChange={changehandler}
            className="w-full border rounded-lg px-3 py-2 focus:outline-[#E0FF00]"
          />
        </label>

        {/* Password */}
        <div className="relative">
          <label className="block">
            <p className="mb-1 font-medium text-gray-700">
              Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showpassword ? "text" : "password"}
              name="password"
              required
              placeholder="Enter password"
              value={formData.password}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2 focus:outline-[#E0FF00]"
            />
          </label>

          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 bottom-3 cursor-pointer text-xl text-gray-700"
          >
            {showpassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block">
            <p className="mb-1 font-medium text-gray-700">
              Confirm Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showcpassword ? "text" : "password"}
              name="confirmpassword"
              required
              placeholder="Re-enter password"
              value={formData.confirmpassword}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2 focus:outline-[#E0FF00]"
            />
          </label>

          <span
            onClick={() => setShowcPassword((prev) => !prev)}
            className="absolute right-3 bottom-3 cursor-pointer text-xl text-gray-700"
          >
            {showcpassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        {/* Submit Button */}
        <button
          className="w-full mt-4 bg-[#E0FF00] text-black py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
