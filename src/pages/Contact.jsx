import Hero from "../components/Contact/Hero";
import Whatsapp from '../components/Whatsapp'
import Hubungi from "../components/Contact/Hubungi";
import Footer from "../components/Footer";
import Mitra from "../components/Mitra";
import Navbar from "../components/Navbar";
import Promote from '../components/Promote'
import { motion } from "framer-motion";

function Contact() {

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
                <Hubungi />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                </motion.div>
                <motion.div {...MotionSlideUp}>
                <div className="flex md:hidden">
                <Promote />
                </div>
                </motion.div>
            </div>
            <Footer />
        </main>)
}

export default Contact