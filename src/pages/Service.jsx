import Footer from "../components/Footer";
import Whatsapp from '../components/Whatsapp'
import Navbar from "../components/Navbar";
import Hero from "../components/Service/Hero";
import Layanan from "../components/Service/Layanan";
import { motion } from "framer-motion";

function Service() {
    
    const MotionSlideUp = {
        initial: { y: 50, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { duration: 2.5, ease: "easeInOut" },
        viewport: { once: true },
      };

    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
                <Whatsapp />
                <motion.div {...MotionSlideUp}>
                <Layanan />
                </motion.div>
            </div>
            <Footer />
        </main>
    )
}

export default Service;
