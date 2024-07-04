
import image1 from '../assets/task img/Rectangle 27.png'
import image2 from '../assets/task img/Rectangle 27-1.png'
import image3 from '../assets/task img/Rectangle 27-2.png'
import { GoArrowUpRight } from 'react-icons/go';
const OnlinnDoctor = () => {
    return (
        <div className='mt-20 md:mt-32 px-5 mx-4 md:mx-8 py-8 rounded-[32px]  md:px-8 bg-[#f9f9e9]'>

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

                <div className='relative rounded-[30px] w-full'>
                    <div>
                        <button className="btn rounded-full text-[16px] px-6 btn-outline">Service</button>
                        <h2 className='text-[24px] pt-5 md:text-[36px] font-semibold md:leading-[50px]'>Empowering Health,<br /> Enriching Lives</h2>
                        <p className='text-[16px] pt-5 md:pr-24 pb-[45px] leading-6'>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                    </div>
                    <button className="btn bg-[#FFC637] border-[#343268] text-[16px] text-[#343268] font-medium flex">Appointment <GoArrowUpRight className="text-xl"></GoArrowUpRight></button>
                </div>
                <div className='relative '>
                    <img className='w-full rounded-[30px]' src={image3} alt="" />
                    <div className='bg-[#02004398] absolute left-[4%] bottom-[4%] w-[321px] rounded-[25px] pt-4 pb-7 px-5'>
                        <div>
                            <h3 className="z-10 mt-3 text-xl font-bold text-white">Consultancy your health</h3>
                            <div className=" mr-16 overflow-hidden text-[12px] mt-3 text-gray-300">
                                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                            </div>
                        </div>
                        <div className='flex justify-end -mt-10'>
                            <button className='p-3 flex bg-[#FFC637] text-2xl rounded-full text-white'><GoArrowUpRight></GoArrowUpRight></button>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mt-16 mt-8">

                <div className='relative rounded-[30px] w-full'>
                    <img className='w-full rounded-[30px]' src={image2} alt="" />
                    <div className='bg-[#02004398] absolute left-[4%] bottom-[4%] w-[321px] rounded-[25px] pt-4 pb-7 px-5'>
                        <div>
                            <h3 className="z-10 mt-3 text-xl font-bold text-white">Online Doctor Meet</h3>
                            <div className=" mr-16 overflow-hidden text-[12px] mt-3 text-gray-300">
                                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                            </div>
                        </div>
                        <div className='flex justify-end -mt-10'>
                            <button className='p-3 flex bg-[#FFC637] text-2xl rounded-full text-white'><GoArrowUpRight></GoArrowUpRight></button>
                        </div>
                    </div>
                </div>
                <div className='relative '>
                    <img className='w-full rounded-[30px]' src={image1} alt="" />
                    <div className='bg-[#02004398] absolute left-[4%] bottom-[4%] w-[321px] rounded-[25px] pt-4 pb-7 px-5'>
                        <div>
                            <h3 className="z-10 mt-3 text-xl font-bold text-white">Consultancy your health</h3>
                            <div className=" mr-16 overflow-hidden text-[12px] mt-3 text-gray-300">
                                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                            </div>
                        </div>
                        <div className='flex justify-end -mt-10'>
                            <button className='p-3 flex bg-[#FFC637] text-2xl rounded-full text-white'><GoArrowUpRight></GoArrowUpRight></button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OnlinnDoctor;