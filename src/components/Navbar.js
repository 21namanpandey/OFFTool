import React from 'react'
import { Link } from 'react-router-dom'
import {toast} from "react-hot-toast"
import logo from "../assets/offtool_old.png"

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    
return (

    <div className=' border-b-[1px] border-richblack-100 '>

        <div className="flex justify-between items-center w-11/12 max-w-[1160px] text-[18px] py-1 mx-auto ">
            
            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={35} loading="lazy" className=' h-[80px] w-[180px] ' />
            </Link>

            <nav >
                <ul className='flex gap-x-10 text-richblack-100 text-[20px] font-semibold  '>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-x-4  text-richblack-100 font-semibold   '>
                { !isLoggedIn && (
                    <Link to="/login">
                        <button 
                        className=' bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '>
                            Log In
                        </button>
                    </Link>
                )}
                { !isLoggedIn && (
                    <Link to="/signup">
                        <button
                        className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Sign Up
                        </button>
                    </Link>
                )}
                { isLoggedIn && (
                    <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out")
                        }}
                        className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                        >
                            Log Out
                        </button>
                    </Link>
                )}
                { isLoggedIn && (
                    <Link to="/dashboard">
                        <button
                        className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Dashboard
                        </button>
                    </Link>
                )}
            </div>

        </div>

    </div>

)
}

export default Navbar