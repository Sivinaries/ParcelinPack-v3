import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from '../../assets/images/star2.png';

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
            <div className="my-4 space-y-8 md:space-y-12">
                <div className="mx-4 md:mx-20">
                    <div>
                        <h1 className="text-[30px] md:text-[120px]">Packaging Kami Cocok</h1>
                    </div>
                    <div className="flex">
                        <div>
                            <h1 className="text-[30px] md:text-[120px]"> untuk</h1>
                        </div>
                        <div className="my-auto">
                            <div className="grid grid-cols-1 w-full max-w-fit bg-orange-400 bg-opacity-80 rounded-full z-30">
                                <div className="h-full flex justify-center">
                                    <Slider className="w-full h-full" {...settings}>
                                        {[
                                            "Fashion", "Skincare", "MakeUp", "Parfum", "Makanan", "Minuman", 
                                            "Hijab", "Elektronik", "Aksesoris", "Perhiasan", "Event"
                                        ].map((item, index) => (
                                            <div key={index} className="h-full w-fit flex justify-center min-h-[24px] lg:min-[50px]: md:min-h-80px]">
                                                <h1 className="text-[13px] lg:text-[30px] md:text-[60px] font-extralight text-black flex items-center">
                                                    {item}
                                                    <img src={star} alt="Running Star" className="mx-3 md:mx-6 h-4 md:h-10" />
                                                </h1>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Packaging;