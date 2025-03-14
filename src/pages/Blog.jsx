import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Whatsapp from '../components/Whatsapp'
import { motion } from "framer-motion"
import Hero from "../components/Blog/Hero";
import Post from "../components/Blog/Post";

function Blog() {

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
          <Post />
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}

export default Blog