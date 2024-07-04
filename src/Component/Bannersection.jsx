
import bannerimg from '../assets/task img/Rectangle 5.png';

const HeroSection = () => {
    return (
        <div className='mx-4 md:mx-8 '>
            <div
                className="w-full bg-center bg-cover rounded-[48px] h-[470px] mt-10 "
                style={{ backgroundImage: `url(${bannerimg})` }}
            >
                <div className="flex rounded-[45px] items-center justify-center w-full h-full bg-gray-600/20">
                    {/* Add your content here */}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
