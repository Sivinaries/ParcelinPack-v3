import model from "/images/portofolio/model.png";
import hampers from "/images/portofolio/hampers.jpg";
import { LuArrowUpRight } from 'react-icons/lu'
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <div className="grid grid-cols-1 h-full w-full">
      <div className="my-4 md:my-40 space-y-8 md:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-5 h-auto md:h-[539px]">
          <div className="flex items-center bg-black text-white font-bold col-span-1 md:col-span-2">
            <div className="space-y-3 md:space-y-6 mx-4 md:mx-20 py-4 md:py-0">
              <h1 className="text-2xl md:text-5xl md:tracking-tighter md:leading-normal">
                Kami Membuat Packaging yang Menceritakan Kisah yang Layak Dibagikan
              </h1>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-full p-2 md:p-4 w-fit  bg-gradient-to-r from-orange-400 to-orange-600 shadow-md hover:underline">
                <a
                  href="/portfolio"
                  className="flex justify-between">
                  <h1 className="text-white hover:underline transition-all duration-100 delay-100 text-center md:text-xl px-3 md:px-6 font-bold">
                    Lihat Portofolio
                  </h1>
                  <LuArrowUpRight className="text-white my-auto" size={24} />
                </a>
              </motion.div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2">
            <div
              className="h-64 md:h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${model})` }}
            >
              <div className="absolute bottom-0 font-semibold text-white text-xl p-4">
                PR Packaging for Scarlett
              </div>
            </div>
            <div
              className="h-64 md:h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${hampers})` }}
            >
              <div className="absolute bottom-0 font-semibold text-white text-xl p-4">
                Ied Fitri Hampers for irisbyms
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
