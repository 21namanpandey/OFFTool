import React from 'react'

const ContactForm = () => {
    return (
        <form className=' flex flex-col border-richblack-200 border p-8 gap-6 rounded-[25px] text-[20px] '>

            <div className=' flex flex-row gap-8  '>
                <div className=' flex flex-col gap-2 '>
                    <p className=' text-richb '>First Name*</p>
                    <input type="text" placeholder='Enter first name' className='rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none' />
                </div>
                <div className=' flex flex-col gap-2 '>
                    <p>Last name</p>
                    <input type="text" placeholder='Enter last name' className='rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none' />
                </div>
            </div>

            <div className=' flex flex-col gap-2 '>
                <p>Email*</p>
                <input type="email" name="" id="" placeholder='Enter email' className='rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none' />
            </div>

            <div className=' flex flex-col gap-2 '>
                <p>What can we help you with?</p>
                <textarea placeholder='Enter your message here !' cols="30" rows="10" className='rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none'></textarea>
            </div>

            <button
                
                type="submit"
                className={"rounded-md bg-orange-400 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] transition-all duration-200 hover:scale-95 hover:shadow-none "}
            >
                Send Message
            </button>

        </form>
    )
}

export default ContactForm