import { GoArrowUpRight } from 'react-icons/go';
import image3 from '../assets/task img/Rectangle 24.png'

const MetionSection = () => {
    return (
        <div className='px-4 md:px-8 mt-20 md:mt-32 '>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

                <div className='relative rounded-[30px] w-full'>
                    <div>
                        <button className="btn rounded-full text-[16px] px-6 btn-outline">Who we are</button>
                        <h2 className='text-[24px] pt-5 md:text-[36px] font-semibold md:leading-[50px]'>We Help To Get<br /> Soultions</h2>
                        <p className='text-[16px] pt-5 md:pr-24 pb-[45px] leading-6'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                        </p>
                    </div>
                    <button className="btn bg-[#FFC637] border-[#343268] text-[16px] text-[#343268] font-medium flex">Learn more <GoArrowUpRight className="text-xl"></GoArrowUpRight></button>
                </div>
                <div className='relative lg:mt-0 mt-6 md:mt-10'>
                    <img className='w-full  object-cover rounded-[30px]' src={image3} alt="" />
                    <div className='bg-[#020043] absolute right-4 left-4 bottom-[4%] lg:-left-[20%]  lg:-bottom-[10%]  md:w-[395px] rounded-[25px] pt-4 pb-7 px-5'>
                        <div>
                            <h3 className="z-10 mt-3 text-[26px] font-bold text-white">Our mission is simple</h3>
                            <div className="overflow-hidden text-[16px] mt-3 text-gray-300">
                            To provide high-quality healthcare services that are accessible, personalized, and patient-centered.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MetionSection;