import Navbar from "../components/Navbar";
import Whatsapp from '../components/Whatsapp'
import Pelanggan from "../components/Home/Pelanggan";
import Exp from "../components/Home/Exp";
import Why from "../components/Home/Why";
import Promote from "../components/Promote";
import Hero from "../components/About/Hero";
import Story from "../components/About/Story";
import Team from "../components/About/Team";
import QuoteSection from "../components/About/Quote";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Packaging from "../components/Home/Packaging";

function About() {

  const MotionSlideUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 2.5, ease: "easeInOut" },
    viewport: { once: true },
  };

  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="w-full mx-auto">
        <Hero />
        <Whatsapp />
        <motion.div {...MotionSlideUp}>
          <Story />
        </motion.div>
        <motion.div {...MotionSlideUp}>
          <QuoteSection />
        </motion.div>
        <motion.div {...MotionSlideUp}>
          <Exp />
        </motion.div>
        <motion.div {...MotionSlideUp}>
          <Team />
        </motion.div>
        <motion.div {...MotionSlideUp}>
          <Why />
        </motion.div>
        <motion.div {...MotionSlideUp}>
          <Pelanggan />
        </motion.div>
        <motion.div {...MotionSlideUp}>
          <Promote />
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}

export default About;
