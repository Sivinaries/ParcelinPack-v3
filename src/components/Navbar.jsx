import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";
import { BsX } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const navLinks = useMemo(
        () => [
            { title: "Beranda", href: "/" },
            { title: "Tentang Kami", href: "/about" },
            { title: "Layanan Kami", href: "/service" },
            { title: "Kemasan Produk", href: "/service/6" },
            { title: "Blog", href: "/blog" },
            { title: "Portofolio", href: "/portfolio" },
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
        <motion.nav 
            initial={{ y: -100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="shadow-xl z-50 fixed top-0 right-0 left-0 p-2 bg-white"
        >
            <div className="flex justify-between items-center">
                <a className="flex items-center" href="/">
                    <img className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" src={logo} alt="Logo Parcelin" />
                    {!isMobileView && (
                        <div className="ml-2 sm:ml-3">
                            <p className="text-black text-left text-lg sm:text-base lg:text-xl xl:text-2xl font-bold">
                                Parcelin Company
                            </p>
                        </div>
                    )}
                </a>

                <div className="flex gap-x-2">
                    {isMobileView ? (
                        <>
                            <a href="/contact" className="p-2 rounded-full bg-orange-500 text-white text-center font-bold">
                                Hubungi Kami
                            </a>
                            <button className="text-black" onClick={toggleModal}>
                                {showModal ? <BsX size={42} /> : <FaBars className="w-8 h-8" />}
                            </button>
                        </>
                    ) : (
                        <div className="hidden lg:flex gap-4 xl:gap-8 items-center">
                            {navLinks.map((link, index) => (
                                <motion.a 
                                    key={index} 
                                    href={link.href} 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="text-black text-sm lg:text-base xl:text-lg font-semibold"
                                >
                                    {link.title}
                                </motion.a>
                            ))}
                        </div>
                    )}
                </div>

                {!isMobileView && (
                    <div className="hidden lg:flex">
                        <div className="p-2 rounded-full bg-orange-500">
                            <a className="text-white text-center font-bold text-xl px-4" href="/contact">
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {showModal && isMobileView && (
                    <motion.div 
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="top-16 fixed inset-0 flex flex-col items-center bg-white opacity-80"
                    >
                        <div className="relative h-full w-full py-4 px-2">
                            <div className="flex flex-col gap-6 sm:gap-8 h-full text-left">
                                {navLinks.map((link, index) => (
                                    <motion.span 
                                        key={index} 
                                        onClick={closeModal} 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="text-black text-2xl"
                                    >
                                        <a href={link.href} className="hover:underline">
                                            {link.title}
                                        </a>
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
