import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const navLinks = useMemo(
        () => [
            { title: "Beranda", to: "/" },
            { title: "Tentang Kami", to: "/about" },
            { title: "Layanan Kami", to: "/service" },
            { title: "Kemasan Produk", to: "/service/6" },
            { title: "Blog", to: "/blog" },
            { title: "Portofolio", to: "/portfolio" },
        ],
        []
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleModal = () => setShowModal(!showModal);
    const closeModal = () => setShowModal(false);

    return (
        <motion.nav className="shadow-xl z-50 fixed top-0 right-0 left-0 p-2 bg-white">
            <div className="flex justify-between items-center">
                <Link className="flex items-center" to="/">
                    <img className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" src={logo} alt="Logo Parcelin" />
                    {!isMobileView && (
                        <div className="ml-2 sm:ml-3">
                            <p className="text-black text-left text-lg sm:text-base lg:text-xl xl:text-2xl font-bold">
                                Parcelin Company
                            </p>
                        </div>
                    )}
                </Link>

                <div className="flex gap-x-2">
                    {isMobileView ? (
                        <>
                            <Link to="/contact" className="p-2 rounded-full bg-orange-500 text-white text-center font-bold">
                                Hubungi Kami
                            </Link>
                            <button className="text-black" onClick={toggleModal}>
                                {showModal ? <BsX size={42} /> : <FaBars className="w-8 h-8" />}
                            </button>
                        </>
                    ) : (
                        <div className="hidden lg:flex gap-4 xl:gap-8 items-center">
                            {navLinks.map((link, index) => (
                                <Link key={index} to={link.to} className="text-black text-sm lg:text-base xl:text-lg font-semibold hover:scale-110 duration-200 delay-150">
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {!isMobileView && (
                    <div className="hidden lg:flex">
                        <div className="p-2 rounded-full bg-orange-500">
                            <Link className="text-white text-center font-bold" to="/contact">
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {showModal && isMobileView && (
                    <motion.div className="top-16 fixed inset-0 flex flex-col items-center bg-white opacity-80">
                        <div className="relative h-full w-full py-4 px-2">
                            <div className="flex flex-col gap-6 sm:gap-8 h-full text-left">
                                {navLinks.map((link, index) => (
                                    <span key={index} className="text-black text-2xl" onClick={closeModal}>
                                        <Link to={link.to} className="hover:underline">
                                            {link.title}
                                        </Link>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
