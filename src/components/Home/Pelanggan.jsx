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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    variableWidth: true,
  };

  const settings2 = { ...settings, rtl: true };

  const renderSlider = (customers, settingsToUse) => (
    <Slider {...settingsToUse}>
      {customers.map((customer, index) => (
        <div key={index} className="h-16 flex items-center justify-center mx-2">
          <img
            className="object-contain max-h-16 mx-auto px-8 py-2 rounded-lg shadow-md bg-white"
            src={customer.src}
            alt={customer.name}
          />
        </div>
      ))}
    </Slider>
  );

  return (
    <div className="grid grid-cols-1 h-fit bg-gray-100 bg-opacity-70 w-full">
      <div className="my-4 md:my-40 space-y-8 md:space-y-12">
        <div className="md:w-1/2 mx-auto">
          <h1 className="text-4xl md:text-5xl text-center font-bold">
            7500+ Pelanggan
          </h1>
          <h1 className="text-xl md:text-3xl text-center font-extralight">
            Sudah mempercayakan
          </h1>
          <h1 className="text-xl md:text-3xl text-center font-extralight">
            packagingnya kepada Kami
          </h1>
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
