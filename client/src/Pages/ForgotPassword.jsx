import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const ForgotPassword = () => {

const [data,setData] = useState({
 email:"",
 newPassword:""
});


const changeHandler=(e)=>{
 setData({
  ...data,
  [e.target.name]:e.target.value
 });
};


const submitHandler=async(e)=>{
 e.preventDefault();

try{

const res = await axios.post(
 `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,
 data
);


toast.success(res.data.message);


}catch(error){

toast.error(
error.response?.data?.message
|| "Failed"
);

}

};


return(
<div>

<form onSubmit={submitHandler}>

<input
name="email"
placeholder="Enter email"
onChange={changeHandler}
/>


<input
name="newPassword"
type="password"
placeholder="New password"
onChange={changeHandler}
/>


<button>
Reset Password
</button>


</form>

</div>
)

}


export default ForgotPassword;