import Hero from '../components/Home/Hero'
import Whatsapp from '../components/Whatsapp'
import Navbar from '../components/Navbar'
import Runningtext from '../components/Home/Runningtext'
import Cute from '../components/Home/Cute'
import Pelanggan from '../components/Home/Pelanggan'
import Layanan from '../components/Home/Layanan'
import Parcel from '../components/Home/Parcel'
import Exp from '../components/Home/Exp'
import Why from '../components/Home/Why'
import Portfolio from '../components/Home/Portfolio'
import Review from '../components/Home/Review'
import Faq from '../components/Home/Faq'
import Promote from '../components/Promote'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import Packaging from '../components/Home/Packaging'

function Home() {

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
                    <Runningtext />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                    <Cute />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                    <Pelanggan />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                    <Layanan />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                    <Parcel />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                    <Exp />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                    <Packaging />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                    <Why />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                    <Portfolio />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                    <Review />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                    <Faq />
                </motion.div>
                <motion.div {...MotionSlideUp}>
                    <Promote />
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}

export default Home;
