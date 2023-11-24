import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [accountType, setAccountType] = useState("personal");

    function changeHandler(event) {
        setFormData((preData) => (
            {
                ...preData,
                [event.target.name]: event.target.value
            }
        ))

    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData,
        };
        console.log(accountData);

        navigate("/dashboard");
    }


    return (

        <div >
            <div className="flex my-6 bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
                <button
                    className={`${accountType === "personal"
                        ?
                        "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("personal")}>
                    Personal
                </button>

                <button
                    className={`${accountType === "company"
                        ?
                        "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("company")}>
                    Company
                </button>
            </div>

            <form onSubmit={submitHandler} >

                {/* first name and last name  */}
                <div className="flex gap-x-4 my-4">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup> </p>
                        <input
                            required
                            type="text"
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        />
                    </label>

                    <label className='w-full'>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup> </p>
                        <input
                            required
                            type="text"
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastName}
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        />
                    </label>
                </div>

                <label className='w-full ' >
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-200">*</sup> </p>
                    <input
                        required
                        type="text"
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email address'
                        value={formData.email}
                        className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"

                    />
                </label>

                <div className="flex gap-x-4 my-4">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password <sup className="text-pink-200">*</sup> </p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"

                        />
                        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer z-10">
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>

                    </label>

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"> Confirm Password <sup className="text-pink-200">*</sup> </p>
                        <input
                            required
                            type={showConfirmPass ? ("text") : ("password")}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"

                        />
                        <span onClick={() => setShowConfirmPass((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer z-10">
                            {showConfirmPass ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>

                </div>

                <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
                    Create Account
                </button>



            </form>


        </div>

    )
}

export default SignupForm