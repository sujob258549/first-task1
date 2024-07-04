import { GoArrowUpRight } from 'react-icons/go';
import firstprement from '../assets/task img/Rectangle 32.png'
import litelogo from '../assets/task img/logo light.png'

const Firstaporment = () => {
    return (
        <div className='px-4 md:px-8'>
            <div
                className="w-full bg-center bg-cover h-[477px] rounded-[45px] mt-20 md:mt-32"
                style={{ backgroundImage: `url(${firstprement})` }}
            >
                <div className="flex items-center rounded-[45px] w-full h-full bg-gradient-to-r from-[#020043] to-[#0200436b]">

                    <div className="px-4 md:px-8 w-full">
                        <div>
                            <div className='flex justify-start md:justify-end'>
                                <img className='-mt-20 w-32 h-10' src={litelogo} alt="" />
                            </div>
                            <h1 className="text-3xl font-semibold text-white lg:text-[40px] ">
                                <p> Get Your</p>
                                <p className='py-5'>First Appointment</p>
                                <p> at 50% Off!</p>
                            </h1>
                            <div className="flex gap-5 mt-10">
                                <button className="btn bg-[#FFC637] border-[#343268] text-[16px] text-[#343268] font-medium flex">Appointment <GoArrowUpRight className="text-xl"></GoArrowUpRight></button>


                                <button className="btn btn-outline border-[#fff] text-[16px] text-[#fff] font-medium flex">Learn More <GoArrowUpRight className="text-xl"></GoArrowUpRight></button>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Firstaporment;