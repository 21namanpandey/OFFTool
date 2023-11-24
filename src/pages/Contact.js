import React from 'react';
import ContactForm from '../components/ContactForm';
import contactUS from "../assets/contactUS.png";
import Footer from '../components/Footer';


function Contact() {
    return (

        <div className=" bg-richblack-900 ">
            <section className="bg-richblack-700 pb-12 ">
                <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10  text-center text-white">
                    <header className="mx-auto pt-20 text-7xl font-semibold lg:w-[70%]">
                        Get in Touch with <span className=' text-red-500 font-bold '>US</span>
                    </header>
                    <img src={contactUS} alt='contact' loading='lazy' width={250} height={250} className=' ml-[40%] ' />
                    <p className="mx-auto mt-3 text-center text-base font-medium  text-richblack-300  lg:w-[95%] text-yellow-300 ">
                        Have questions, suggestions, or need assistance? We'd love to hear from you. Reach out to us through the contact form below, and we'll be in touch shortly.
                    </p>
                </div>
            </section>

            <section className="border-b border-richblack-700">
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
                    {/* You can add additional content or details here */}
                </div>
            </section>

            <section>
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500 items-center text-center">
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        <div className="my-24 flex lg:w-[100%] flex-col gap-10">
                            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-6xl font-semibold text-transparent lg:w-[100%] ">
                                Contact Information
                            </h1>
                            <p className="text-base font-medium text-richblack-200 lg:w-[100%]">
                                Feel free to reach out to us anytime. We're here to assist you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mx-auto m-[-30px] mb-10 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
                
                
                <ContactForm/>

            </div>

            <Footer/>

        </div>
    );
}

export default Contact;



