import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import logo from '../assets/task img/logo dark.png'
import Bannersection from "./Bannersection";
import Footer from "./Footer";
import Firstaporment from "./Firstaporment";
import Acoirdiansection from "./Acoirdiansection";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="max-w-[1160px] mx-auto">
                <section className="">
                    <nav className="relative">
                        <div className="container  py-4 mx-auto md:flex md:justify-between md:items-center">
                            <div className="flex items-center justify-between">
                                <a href="#">
                                    <img className="w-auto h-6 sm:h-7" src={logo} alt="" />
                                </a>

                                {/* Mobile menu button */}
                                <div className="flex md:hidden">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        type="button"
                                        className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                        aria-label="toggle menu"
                                    >
                                        {!isOpen ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                            </div>

                            {/* Mobile Menu */}
                            <div
                                className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:mx-6">
                                    <a className="my-2 text-[#343268] text-[16px] transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
                                        Home
                                    </a>
                                    <a className="my-2 text-[#343268] text-[16px] transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
                                        Shop
                                    </a>
                                    <a className="my-2 text-[#343268] text-[16px] transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
                                        Contact
                                    </a>
                                    <a className="my-2 text-[#343268] text-[16px] transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
                                        About
                                    </a>
                                </div>

                            </div>
                            <div className="justify-center hidden md:block">
                                <button className="btn btn-outline border-[#343268] text-[16px] text-[#343268] font-medium flex">Appointment <GoArrowUpRight className="text-xl"></GoArrowUpRight></button>
                            </div>
                        </div>
                    </nav>

                </section>



                {/* banner secrion */}
                <Bannersection></Bannersection>
                {/* Acordian  secrion */}
                <Acoirdiansection></Acoirdiansection>
                {/* Firstaporment section */}
                <Firstaporment>

                </Firstaporment>

                {/* footer section */}
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;