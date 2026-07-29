import { useState, useContext } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { UserContext } from "../../context/UserContext";

const LogginForm = ({ setLoggedIn }) => {

  const { fetchUser } = useContext(UserContext);

  const [showForgot, setShowForgot] = useState(false);

  const [showPassword, setShowPassword] = useState(false);


  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const [forgotData, setForgotData] = useState({
    email: "",
    newPassword: ""
  });


  const navigate = useNavigate();


  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }


  function forgotChangeHandler(e) {
    setForgotData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }



  async function resetPasswordHandler(e) {
    e.preventDefault();

    try {

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,
        forgotData
      );


      toast.success(response.data.message);

      setShowForgot(false);

      setForgotData({
        email: "",
        newPassword: ""
      });


    } catch (error) {

      toast.error(
        error.response?.data?.message || "Password reset failed"
      );

    }
  }




  async function submitHandler(event) {
    event.preventDefault();

    try {

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData
      );


      localStorage.setItem(
        "token",
        response.data.token
      );


      localStorage.setItem(
        "isLoggedIn",
        "true"
      );


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

          className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700"

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

          className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700"

        />



        <span

          className="absolute right-3 top-10 cursor-pointer text-gray-400"

          onClick={() => setShowPassword(prev => !prev)}

        >

          {
            showPassword
              ? <FaRegEye />
              : <FaRegEyeSlash />
          }

        </span>


      </label>





      {/* Forgot Password Button */}

      <button

        type="button"

        onClick={() => {

          setShowForgot(!showForgot);

          setForgotData({

            email: formData.email,

            newPassword: ""

          });

        }}

        className="text-blue-400"

      >

        Forgot Password?

      </button>






      {/* Forgot Password Form */}

      {
        showForgot && (

          <div className="p-4 bg-gray-800 rounded-xl space-y-3">


            <h3 className="font-semibold">
              Reset Password
            </h3>



            <input

              type="email"

              name="email"

              placeholder="Enter registered email"

              value={forgotData.email}

              onChange={forgotChangeHandler}

              className="w-full px-3 py-2 rounded-lg bg-gray-700"

            />



            <input

              type="password"

              name="newPassword"

              placeholder="Enter new password"

              value={forgotData.newPassword}

              onChange={forgotChangeHandler}

              className="w-full px-3 py-2 rounded-lg bg-gray-700"

            />




            <button

              type="button"

              onClick={resetPasswordHandler}

              className="w-full py-2 rounded-lg bg-[#E0FF00] text-black font-semibold"

            >

              Reset Password

            </button>


          </div>

        )

      }






      {/* Login Button */}

      <button

        type="submit"

        className="w-full py-2 rounded-lg bg-[#E0FF00] text-black font-semibold"

      >

        Sign In

      </button>



    </form>

  );
};


export default LogginForm;