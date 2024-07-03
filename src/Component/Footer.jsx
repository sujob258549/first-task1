
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/task img/logo light.png';
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className="bg-[#020043] text-[#c5d9e5] mt-16 md:mt-32 py-10 md:py-16">
            <div className="max-w-[1160px] mx-auto">
                <div className="py-12 px-8 md:px-16">
                    <div className="pb-10">
                        <img className="w-32" src={logo} alt="Company Logo" />
                        <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                            {/* Additional content can be added here */}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <div className="">
                                <p className="transition-colors duration-300">
                                    123 Main Street Anytown, USA<br />
                                    Postal Code: 12345
                                </p>
                                <p className="duration-300 mt-7">
                                    Support: support@oyolloo.com<br />
                                    (Available : 10:00am to 07:00pm)
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col items-start space-y-2">
                                <a href="#" className="transition-colors duration-300">
                                    Home

                                </a>
                                <a href="#" className="transition-colors duration-300">
                                    About us

                                </a>
                                <a href="#" className="transition-colors duration-300">
                                    Success Page

                                </a>
                                <a href="#" className="transition-colors duration-300">
                                    Terms and condition

                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-start space-y-2">
                                <a href="#" className="transition-colors duration-300">
                                    Services

                                </a>
                                <a href="#" className="transition-colors duration-300">
                                    Scheduling

                                </a>
                                <a href="#" className="transition-colors duration-300">
                                    Contact Us

                                </a>
                                <a href="#" className="transition-colors duration-300">
                                    Patient Portal

                                </a>
                            </div>
                        </div>



                        <div>
                            <p className="font-semibold">Follow Us</p>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <div className='flex gap-5 mb-6 -mt-4'>
                                    <FaFacebook className='text-2xl'></FaFacebook>
                                    <FaInstagram className='text-2xl'></FaInstagram>
                                    <IoLogoLinkedin className='text-2xl'></IoLogoLinkedin>
                                    <FaYoutube className='text-2xl'></FaYoutube >
                                </div>
                                <a href="#" className="transition-colors duration-300">
                                    @docplus 2024
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
