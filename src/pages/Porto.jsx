import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Whatsapp from '../components/Whatsapp'
import Hero from "../components/Portfolio/Hero"
import Project from "../components/Portfolio/Project"
import { motion } from "framer-motion"

function Porto() {

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
        <Project />
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}

export default Porto