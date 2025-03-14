import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from '../../assets/images/star.png';

function Runningtext() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    variableWidth: true,
  };

  return (
    <div className="h-fit grid grid-cols-1 w-full max-w-fit mx-auto bg-white z-30">
      <div className="my-4 md:my-18">
        <Slider className="" {...settings}>
          <div className="w-full">
            <h1 className="text-gray-400 text-xl font-sans md:text-4xl font-base flex items-center">
              All-in-one Packaging Solution
              <img src={star} alt="Running Star" className="ml-6 mr-6 h-6 xl:h-10" />
            </h1>
          </div>
          <div className="w-full">
            <h1 className="text-gray-400 text-xl md:text-4xl font-extrabold flex items-center">
              Creative Packaging Company
              <img src={star} alt="Running Star" className="ml-6 mr-6 h-6 xl:h-10" />
            </h1>
          </div>
          <div className="w-full">
            <h1 className="text-gray-400 text-xl md:text-4xl font-extrabold flex items-center">
              Custom Packaging Specialist
              <img src={star} alt="Running Star" className="ml-6 mr-6 h-6 xl:h-10" />
            </h1>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Runningtext