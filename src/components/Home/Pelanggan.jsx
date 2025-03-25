import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

function Pelanggan() {
  const [resolvedCustomers, setResolvedCustomers] = useState({
    1: [],
    2: [],
    3: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const imageFolders = {
        1: import.meta.glob("../../assets/images/cus/1/*.{png,jpg,jpeg,svg}"),
        2: import.meta.glob("../../assets/images/cus/2/*.{png,jpg,jpeg,svg}"),
        3: import.meta.glob("../../assets/images/cus/3/*.{png,jpg,jpeg,svg}"),
      };

      const loadFolder = async (images) => {
        return await Promise.all(
          Object.keys(images).map(async (path) => {
            const name = path.split("/").pop();
            const image = await images[path]();
            return { name, src: image.default };
          })
        );
      };

      const resolvedData = {};
      for (const key in imageFolders) {
        resolvedData[key] = await loadFolder(imageFolders[key]);
      }

      setResolvedCustomers(resolvedData);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    arrows: false,
    variableWidth: true,
    adaptiveHeight: true,
  };

  const settings2 = { ...settings, rtl: true };

  const renderSlider = (customers, settingsToUse) => (
    <div className="relative"> 
      {/* Bayangan kiri */}
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-200 via-transparent to-transparent z-10 pointer-events-none"></div>
      
      {/* Bayangan kanan */}
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-gray-200 via-transparent to-transparent z-10 pointer-events-none"></div>

      <Slider {...settingsToUse}>
        {customers.map((customer, index) => (
          <div key={index} className="h-16 flex items-center justify-center mx-2">
            <img
              className="object-contain max-h-16 mx-auto px-4 py-2 rounded-lg shadow-md bg-white"
              src={customer.src}
              alt={customer.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );

  return (
    <div className="grid grid-cols-1 h-fit bg-gray-100 bg-opacity-70 w-full">
      <div className="my-4 md:my-40 space-y-8 md:space-y-12">
        <div className="md:w-1/2 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">7500+ Pelanggan</h1>
          <h2 className="text-xl md:text-3xl font-extralight">
            Sudah mempercayakan packagingnya kepada Kami
          </h2>
        </div>
        <div className="space-y-6">
          {!isLoading ? (
            Object.entries(resolvedCustomers).map(([key, customers]) => (
              <div key={key}>
                {renderSlider(customers, key === "2" ? settings2 : settings)}
              </div>
            ))
          ) : (
            <p className="text-center text-lg">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pelanggan;
