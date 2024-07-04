
import { MdOutlineStar } from 'react-icons/md';
import bannerimg from '../assets/task img/Rectangle 5.png';

const HeroSection = () => {
    return (
        <div className='mx-4 md:mx-8 '>
            <div
                className="w-full bg-center bg-cover rounded-[48px] h-[470px] mt-10 "
                style={{ backgroundImage: `url(${bannerimg})` }} >
            </div>

            <div className='lg:block hidden'>
                <div className='flex gap-5 pt-8 md:pt-12'>
                    <div className='w-[20%] p-5 rounded-[24px]' style={{ boxShadow: "1px 1px 10px" }}>
                        <h3 className='text-[40px] font-semibold'>90%</h3>
                        <p className='text-[16px] pt-2 pb-5'>Patient satisfaction rate, reflecting our commitment.</p>
                        <img src="https://i.ibb.co/Yf2DBGz/Group-12.png" alt="" />
                    </div>
                    <div className='w-[60%]'>
                        <h2 className='text-5xl font-semibold w-full md:w-[80%] text-center mx-auto'>Comprehensive Care for Every Patient</h2>
                        <div className='grid grid-cols-3 gap-5 mt-7 items-end'>
                            {/* fast  */}
                            <div className='p-5 h-[210px] rounded-[24px]' style={{ boxShadow: "1px 1px 10px" }}>
                                <h3 className='text-[40px] font-semibold'>500+</h3>
                                <p className='text-[16px]'>Board-certified doctors</p>
                                <div className='flex justify-end -translate-y-6'>
                                    <img src="https://i.ibb.co/C9kr5Yt/contract-1-1.png" alt="" />
                                </div>
                            </div>
                            {/* secend */}
                            <div className='p-5 rounded-[24px] h-[190px]' style={{ boxShadow: "1px 1px 10px" }}>
                                <h3 className='text-[40px] items-center font-semibold flex'>4.8 <MdOutlineStar className='text-yellow-500 ml-3'></MdOutlineStar></h3>
                                <p className='text-[16px] pt-2 pb-5'>Over 20,000 Patient</p>

                                <div>
                                    <div className="flex items-center">
                                        <img
                                            className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white dark:ring-gray-900"
                                            src="https://i.ibb.co/3TJQq5D/Ellipse-2.png"
                                            alt=""
                                        />
                                        <img
                                            className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white dark:ring-gray-900"
                                            src="https://i.ibb.co/vPXzmbG/Ellipse-4.png"
                                            alt=""
                                        />
                                        <img
                                            className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white dark:ring-gray-900"
                                            src="https://i.ibb.co/SVLdmW1/Ellipse-5.png"
                                            alt=""
                                        />

                                        <img
                                            className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white dark:ring-gray-900"
                                            src="https://i.ibb.co/8YQcdRn/Ellipse-3.png"
                                            alt=""
                                        />
                                    </div>

                                </div>
                            </div>
                            {/* third */}
                            <div className='p-5 h-[210px] rounded-[24px]' style={{ boxShadow: "1px 1px 10px" }}>
                                <h3 className='text-[40px] font-semibold'>$5000</h3>
                                <p className='text-[16px] '>Money spend
                                    for poor patient</p>
                                <div className='flex justify-end -translate-y-6'>
                                    <img src="https://i.ibb.co/cxrH57F/Group.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[20%] p-5 rounded-[24px]' style={{ boxShadow: "1px 1px 10px" }}>
                        <h3 className='text-[40px] font-semibold'>50%</h3>
                        <p className='text-[16px] pt-2 pb-8'>Free lession video
                            for patient</p>
                        <img src="https://i.ibb.co/3hndSZ1/111-removebg-preview.png" alt="" />
                    </div>

                </div>
            </div>
            <div className='block lg:hidden'>
                <div className='flex flex-col gap-5 pt-8 md:pt-12 mt-5 md:mt-8'>

                    <div className='w-[100%]'>
                        <h2 className='text-2xl md:text-5xl font-semibold w-full md:w-[80%] text-center mx-auto px-5'>Comprehensive Care for Every Patient</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-7 items-end'>
                            {/* fast  */}
                            <div className='p-5 h-[210px] rounded-[24px]' style={{ boxShadow: "1px 1px 10px" }}>
                                <h3 className='text-[40px] font-semibold'>500+</h3>
                                <p className='text-[16px]'>Board-certified doctors</p>
                                <div className='flex justify-end -translate-y-6'>
                                    <img src="https://i.ibb.co/C9kr5Yt/contract-1-1.png" alt="" />
                                </div>
                            </div>
                            {/* secend */}
                            <div className='p-5 rounded-[24px] h-[190px]' style={{ boxShadow: "1px 1px 10px" }}>
                                <h3 className='text-[40px] items-center font-semibold flex'>4.8 <MdOutlineStar className='text-yellow-500 ml-3'></MdOutlineStar></h3>
                                <p className='text-[16px] pt-2 pb-5'>Over 20,000 Patient</p>

                                <div>
                                    <div className="flex items-center">
                                        <img
                                            className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white dark:ring-gray-900"
                                            src="https://i.ibb.co/3TJQq5D/Ellipse-2.png"
                                            alt=""
                                        />
                                        <img
                                            className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white dark:ring-gray-900"
                                            src="https://i.ibb.co/vPXzmbG/Ellipse-4.png"
                                            alt=""
                                        />
                                        <img
                                            className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white dark:ring-gray-900"
                                            src="https://i.ibb.co/SVLdmW1/Ellipse-5.png"
                                            alt=""
                                        />

                                        <img
                                            className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white dark:ring-gray-900"
                                            src="https://i.ibb.co/8YQcdRn/Ellipse-3.png"
                                            alt=""
                                        />
                                    </div>

                                </div>
                            </div>
                            {/* third */}
                            <div className='p-5 h-[210px] rounded-[24px]' style={{ boxShadow: "1px 1px 10px" }}>
                                <h3 className='text-[40px] font-semibold'>$5000</h3>
                                <p className='text-[16px] '>Money spend
                                    for poor patient</p>
                                <div className='flex justify-end -translate-y-6'>
                                    <img src="https://i.ibb.co/cxrH57F/Group.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex md:flex-row flex-col gap-5'>
                        <div className='w-full md:w-[50%] p-5 rounded-[24px]' style={{ boxShadow: "1px 1px 10px" }}>
                            <h3 className='text-[40px] font-semibold'>90%</h3>
                            <p className='text-[16px] pt-2 pb-5'>Patient satisfaction rate, reflecting our commitment.</p>
                            <img src="https://i.ibb.co/Yf2DBGz/Group-12.png" alt="" />
                        </div>
                        <div className='w-full md:w-[50%] p-5 rounded-[24px]' style={{ boxShadow: "1px 1px 10px" }}>
                            <h3 className='text-[40px] font-semibold'>50%</h3>
                            <p className='text-[16px] pt-2 pb-8'>Free lession video
                                for patient</p>
                            <img src="https://i.ibb.co/3hndSZ1/111-removebg-preview.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
