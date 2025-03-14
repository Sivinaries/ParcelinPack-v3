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

  useEffect(() => {
    const loadImages = async () => {
      const images1 = import.meta.glob(
        "../../assets/images/cus/1/*.{png,jpg,jpeg,svg}"
      );
      const images2 = import.meta.glob(
        "../../assets/images/cus/2/*.{png,jpg,jpeg,svg}"
      );
      const images3 = import.meta.glob(
        "../../assets/images/cus/3/*.{png,jpg,jpeg,svg}"
      );

      const loadFolder = async (images) => {
        return await Promise.all(
          Object.keys(images).map(async (path) => {
            const name = path.split("/").pop();
            const image = await images[path]();
            return {
              name: name,
              src: image.default,
            };
          })
        );
      };

      setResolvedCustomers({
        1: await loadFolder(images1),
        2: await loadFolder(images2),
        3: await loadFolder(images3),
      });
    };

    loadImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
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
    <div className="grid grid-cols-1 h-fit bg-gray-100 bg-opacity-70">
      <div className="my-10">
        <div className="space-y-6">
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
            {resolvedCustomers["1"] &&
              renderSlider(resolvedCustomers["1"], settings)}
            {resolvedCustomers["2"] &&
              renderSlider(resolvedCustomers["2"], settings2)}
            {resolvedCustomers["3"] &&
              renderSlider(resolvedCustomers["3"], settings)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pelanggan;
