import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './custom-navigation.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Hero() {
  const slides = [
    {
      image: "hero1.png",
      title: "Packaging for Eid Mubarak",
      products: ["Hardbox", "Seasonal Packaging", "Hampers"],
    },
    {
      image: "hero2.png",
      title: "Merchandise for Brand",
      products: ["Hardbox", "Hampers", "Merchandise"],
    },
    {
      image: "hero3.png",
      title: "Packaging for CNY",
      products: ["Hardbox", "Seasonal Packaging", "Hampers"],
    },
    {
      image: "hero4.png",
      title: "Packaging for Food",
      products: ["Corrugated Box", "Food Packaging"],
    },
    {
      image: "hero5.png",
      title: "Packaging for Christmas",
      products: ["Hardbox", "Seasonal Packaging", "Hampers"],
    },
    {
      image: "hero6.png",
      title: "Branding Item",
      products: ["Label Baju", "Hang Tag"],
    },
    {
      image: "hero7.png",
      title: "Hard Box for Tea Set",
      products: ["Hardbox", "PR Packaging"],
    },
    {
      image: "hero8.png",
      title: "Custom Bag",
      products: ["PR Packaging", "Seasonal Packaging", "Hampers"],
    },
    {
      image: "hero9.png",
      title: "Packaging for Hijab",
      products: ["Hardbox", "Soft Box"],
    },
    {
      image: "hero10.png",
      title: "PR Packaging for Brand",
      products: ["Hardbox", "PR Packaging", "Hampers"],
    }
  ];

  return (
    <div className="grid grid-cols-1 w-full h-screen overflow-hidden relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href="/service" className="block w-full h-full">
              <img
                src={`/images/home/${slide.image}`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover md:object-fill"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black"></div>
              <div className="absolute bottom-8 px-4 text-white md:space-y-6">
                <h2 className="text-4xl md:text-6xl hover:underline transition-all duration-100 delay-100">{slide.title}</h2>
                <ul className="hidden md:flex gap-x-32">
                  {slide.products.map((product, i) => (
                    <li key={i} className="text-2xl hover:underline transition-all duration-100 delay-100">
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-swiper-button-prev absolute bg-gradient-to-r from-orange-400 to-orange-600 shadow-md shadow-orange-600 opacity-60 hover:opacity-90 w-12 h-12 md:h-16 md:w-16">
        <FaArrowLeft className='md:w-8 w-6 md:h-8 h-6 text-white' />
      </div>
      <div className="custom-swiper-button-next absolute bg-gradient-to-r from-orange-400 to-orange-600 shadow-md shadow-orange-600 opacity-60 hover:opacity-90 w-12 h-12 md:h-16 md:w-16">
        <FaArrowRight className='md:w-8 w-6 md:h-8 h-6 text-white' />
      </div>
    </div>
  );
}

export default Hero;
