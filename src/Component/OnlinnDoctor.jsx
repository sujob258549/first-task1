
import image1 from '../assets/task img/Rectangle 27.png'
import image2 from '../assets/task img/Rectangle 27-1.png'
import { GoArrowUpRight } from 'react-icons/go';
const OnlinnDoctor = () => {
    return (
        <div className='mt-10 md:mt-20 px-4 md:px-8'>

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                <div className='relative rounded-[30px] w-full'>
                    <img  className='w-full rounded-[30px]' src={image2} alt="" />
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
                    <img  className='w-full rounded-[30px]' src={image1} alt="" />
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
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                <div className='relative rounded-[30px] w-full'>
                    <img  className='w-full rounded-[30px]' src={image2} alt="" />
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
                    <img  className='w-full rounded-[30px]' src={image1} alt="" />
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