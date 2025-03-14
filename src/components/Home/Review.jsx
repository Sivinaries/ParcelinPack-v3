import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "./custom-scrollbar.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Review() {
  const videoRef = useRef(null); // Gunakan useRef untuk menangani video

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
            videoElement.currentTime = 0; // Reset waktu jika keluar viewport
          }
        });
      },
      { threshold: 0.5 } // Mulai ketika 50% video terlihat
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  const reviews = [
    { src: "/images/review/review1.png", alt: "Review 1" },
    { src: "/images/review/review2.png", alt: "Review 2" },
    { src: "/images/review/review3.png", alt: "Review 3" },
    { src: "/images/review/review4.png", alt: "Review 4" },
    { src: "/images/review/review5.png", alt: "Review 5" },
  ];

  return (
    <div className="grid place-items-center h-full bg-[#FEF7EE] rounded-[50px] overflow-hidden">
      <div className="text-center space-y-3 md:space-y-6 my-4">
        <h1 className="text-3xl">Apa Kata Mereka</h1>
        <p className="p-2 md:p-0 font-extralight text-base">
          Yuk, lihat apa kata mereka yang telah memilih Parcelinpack sebagai
          solusi packaging brand mereka!
        </p>
        <div className="flex justify-center">
          <video
            ref={videoRef} // Tambahkan ref ke video
            className="rounded-xl border shadow-sm w-3/4 md:w-1/3 aspect-video"
            controls
          >
            <source src="/videos/testimoni.mp4" type="video/mp4" />
            Browser Anda tidak mendukung tag video.
          </video>
        </div>

        <div className="w-screen relative">
          <Swiper
            modules={[Navigation, Autoplay, Scrollbar]}
            scrollbar={{
              el: ".swiper-custom-scrollbar",
              draggable: true,
              dragClass: "swiper-scrollbar-drag",
              hide: false,
            }}
            navigation={{
              nextEl: ".review-custom-swiper-button-next",
              prevEl: ".review-custom-swiper-button-prev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            className="w-full h-full custom-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img src={review.src} alt={review.alt} className="rounded-xl" />
              </SwiperSlide>
            ))}
            <div className="review-custom-swiper-button-prev">
              <FaArrowLeft />
            </div>
            <div className="review-custom-swiper-button-next">
              <FaArrowRight />
            </div>
            <div className="swiper-custom-scrollbar"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
