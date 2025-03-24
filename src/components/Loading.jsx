import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-transparent">
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-orange-500 rounded-full shadow-md"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      />
    </div>
  );
}

export default Loading;
