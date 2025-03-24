import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from '/images/star2.png';
import { motion } from "framer-motion";

function Packaging() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
    };

    return (
        <div className="grid grid-cols-1 h-full bg-white">
            <div className="my-10 md:my-20 space-y-8 md:space-y-12">
                <div className="mx-4 md:mx-20">
                    <div>
                        <h1 className="text-[30px] md:text-[120px]">Packaging Kami Cocok</h1>
                    </div>
                    <div className="flex">
                        <div>
                            <h1 className="text-[30px] md:text-[120px]"> untuk</h1>
                        </div>
                        <a href="/service" className="my-auto">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="grid grid-cols-1 w-full bg-gradient-to-r from-orange-400 to-orange-600 shadow-md bg-opacity-80 rounded-full z-30">
                                <div className="h-full flex justify-center">
                                    <Slider className="w-full h-full" {...settings}>
                                        {[
                                            "Fashion", "Skincare", "MakeUp", "Parfum", "Makanan", "Minuman",
                                            "Hijab", "Elektronik", "Aksesoris", "Perhiasan", "Event"
                                        ].map((item, index) => (
                                            <div key={index} className="h-full w-fit flex justify-center min-h-[24px] md:min-h-80px]">
                                                <h1 className="text-[13px] lg:text-[50px] md:text-[60px] font-extralight text-white flex items-center">
                                                    {item}
                                                    <img src={star} alt="Running Star" className="mx-2 md:mx-4 h-4 md:h-8" />
                                                </h1>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </motion.div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Packaging;