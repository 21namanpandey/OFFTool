
import React from 'react';

import AboutPic from "../../src/assets/aboutPic.png";
import aboutUS from "../assets/aboutUs.png"
import Footer from '../components/Footer';


function About() {
    return (

        <div className=" bg-richblack-900 ">
            <section className="bg-richblack-700 pb-12">
                <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
                    <header className="mx-auto pt-20 text-4xl font-semibold lg:w-[70%]">
                        Driving Innovation in Office Management for a <span className=' font-bold text-yellow-500 ' >Productive Tomorrow</span>

                    </header>
                    <img src={aboutUS} loading='lazy' width={250} height={250} className=' ml-[40%] ' />
                    <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-200 lg:w-[95%]  ">
                        OFFTool is at the forefront of driving innovation in office management. We're passionate about creating a more productive work environment by offering cutting-edge tools and fostering efficient office practices.
                    </p>
                </div>
            </section>

            <section className="border-b border-richblack-700">
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 mt-10 text-white">

                    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
                        Using <span className=' text-red-500 '>OFFTool</span> has transformed the way I manage my office tasks. It's a game-changer! From to-do lists to expense tracking, it's all there in one place, making my work life more <span className=' text-orange-400 '>efficient</span> and <span className=' text-orange-600 ' >organized</span>. I can't imagine my workday without it!
                    </div>

                </div>
            </section>

            <section>
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-200">
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                                Our Founding Story
                            </h1>
                            <p className="text-base font-medium text-richblack-200 lg:w-[95%]">
                                OFFTool was born out of a shared vision and passion for revolutionizing office management. It all started with a group of professionals who recognized the need for accessible, flexible, and efficient office solutions in a fast-paced and evolving work landscape.
                            </p>
                            <p className="text-base font-medium text-richblack-200 lg:w-[95%]">
                                As experienced office managers ourselves, we've faced the challenges and limitations of traditional office practices. We believe that office management should be adaptable, collaborative, and accessible to everyone, regardless of their location. Our platform is designed to bridge these gaps and empower individuals to excel in their professional roles.
                            </p>
                        </div>

                        <div >
                            <img src={AboutPic} width={550} height={500} loading='lazy' className=' h-[450px] '/>
                            
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
                        <div className="my-20 flex lg:w-[40%] flex-col gap-10">
                            <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                                Our Vision
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                Our vision is to transform the way people manage their office tasks. We've dedicated ourselves to creating an innovative platform that merges cutting-edge technology with engaging tools, resulting in a dynamic and interactive office management experience.
                            </p>
                        </div>
                        <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                            <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                                Our Mission
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                Our mission goes beyond just offering office management tools. We aim to create a thriving community of office professionals where individuals can connect, collaborate, and learn from one another. We believe that the best office practices evolve in an environment of sharing, dialogue, and cooperation, which we facilitate through forums, live sessions, and networking opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    );
}

export default About;
