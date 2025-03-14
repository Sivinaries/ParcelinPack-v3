import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import wa from "/images/wa.png";

function Whatsapp() {
  const [showChat, setShowChat] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <motion.div
        className="z-50 fixed bottom-8 left-6 opacity-85 shadow-amber-500 hover:opacity-100"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button onClick={scrollToTop}>
          <div className="bg-amber-600 opacity-85 shadow-amber-600 xl:p-2 rounded-3xl px-2 py-6 hover:opacity-100">
            <FaArrowUp className="text-white xl:w-6 xl:h-20 w-4 h-8" />
          </div>
        </button>
      </motion.div>

      {/* WhatsApp Chatbox */}
      <div className="fixed bottom-10 right-6 z-50 flex flex-col items-end">
        {/* Chat Box */}
        <AnimatePresence>
          {showChat && (
            <motion.div
              className="bg-white shadow-lg rounded-xl w-80  relative"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="bg-green-900 text-white px-4 py-3 flex items-center justify-between rounded-t-lg">
                <div className="flex items-center gap-2">
                  <IoLogoWhatsapp className="text-xl" />
                  <span className="font-semibold">WhatsApp</span>
                </div>
                <button onClick={() => setShowChat(false)}>✖</button>
              </div>

              {/* Chat Bubble */}
              <div className="p-2 m-3 bg-gray-100 rounded-lg  relative">
                <p className="text-sm text-gray-800">
                  Halo Kak Micelin dari Parcelinpack. Saya dapat info dari Website parcelinpack.id. Mau info custom packagingnya kak
                </p>
                {/* Chat Tail */}
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-gray-100 rotate-45"></div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center p-2">
                <Link to="https://warotator.parcelinpack.id/organik-website-5" target="_blank">
                  <button className="bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded-full mt-2 flex items-center gap-2">
                    <IoLogoWhatsapp className="text-lg" />
                    Chat Now
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          onClick={() => setShowChat(!showChat)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >

          <img
            className="xl:w-20 xl:h-20 w-16 h-16"
            src={wa} alt="" />
        </motion.button>
      </div>
    </>
  );
}

export default Whatsapp;
