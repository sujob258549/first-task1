




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import user1 from '../assets/user/Ellipse 10.png'
import user2 from '../assets/user/Ellipse 10 (2).png'
import user3 from '../assets/user/Ellipse 10 (1).png'

export default function AboutSection() {
    return (
        <>
            <div>
                <button className="btn rounded-full text-[16px] px-6 btn-outline">Testimonial</button>
                <h2 className='text-2xl md:text-4xl font-semibold py-5'>What they say about us</h2>
            </div>
            <Swiper
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
            >

                {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper"> */}
                <SwiperSlide>
                    <section className="p-5 text-center">
                        <article className="flex flex-wrap md:flex-nowrap shadow-lg  group cursor-pointer transform duration-500 hover:-translate-y-1">
                            <div>
                                <div className="p-5 pb-10 bg-[#FFFFF5]">
                                    <h1 className="text-xl font-semibold text-gray-800 mt-4">
                                        Expertise and Compassion Combined
                                    </h1>
                                    <p className="text-[12px] text-gray-400 mt-2 leading-relaxed">
                                        I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.
                                    </p>
                                    <div className='flex gap-2 justify-center items-center pt-5'>

                                        <div className="w-12 ">
                                            <img className='rounded-full' src={user1} />
                                        </div>

                                        <div className=''>
                                            <p className='text-[12px]'><span className=' font-bold'>Sarah D,</span> IT Professional</p>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </article>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-5 text-center">
                        <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
                            <div>
                                <div className="p-5 pb-10 bg-[#FFFFF5]">
                                    <h1 className="text-xl font-semibold text-gray-800 mt-4">
                                        Life-Saving Care, Life-Changing Experience
                                    </h1>
                                    <p className="text-[12px] text-gray-400 mt-2 leading-relaxed">
                                        My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.
                                    </p>
                                    <div className='flex gap-2 justify-center items-center pt-5'>

                                        <div className="w-12 ">
                                            <img className='rounded-full' src={user2} />
                                        </div>

                                        <div>
                                            <p className='text-[12px]'><span className=' font-bold'>Sarah D,</span> IT Professional</p>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </article>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-5 text-center">
                        <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
                            <div>
                                <div className="p-5 pb-10 bg-[#FFFFF5]">
                                    <h1 className="text-xl font-semibold text-gray-800 mt-4">
                                        A Partner in Health and
                                        Wellness
                                    </h1>
                                    <p className="text-[12px] text-gray-400 mt-2 leading-relaxed">
                                        As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups,
                                    </p>
                                    <div className='flex gap-2 items-center justify-center pt-5'>

                                        <div className="w-12 ">
                                            <img className='rounded-full' src={user3} />
                                        </div>

                                        <div>
                                            <p className='text-[12px]'><span className=' font-bold'>Sarah D,</span> IT Professional</p>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </article>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-5 text-center">
                        <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
                            <div>
                                <div className="p-5 pb-10 bg-[#FFFFF5]">
                                    <h1 className="text-xl font-semibold text-gray-800 mt-4">
                                        A Partner in Health and
                                        Wellness
                                    </h1>
                                    <p className="text-[12px] text-gray-400 mt-2 leading-relaxed">
                                        As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and
                                    </p>
                                    <div className='flex gap-2 items-center justify-center pt-5'>

                                        <div className="w-12 ">
                                            <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>

                                        <div>
                                            <p className='text-[12px]'><span className=' font-bold'>Sarah D,</span> IT Professional</p>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </article>
                    </section>
                </SwiperSlide>


            </Swiper>
        </>
    );
}


