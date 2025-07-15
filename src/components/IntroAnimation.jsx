import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function IntroAnimation() {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center items-center text-white relative overflow-hidden">
      
      {/* Triangle Animation */}
      <div className="flex justify-center items-center space-x-10 mb-8">
        <motion.div
          className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-transparent border-b-yellow-400"
          initial={{ x: -200, rotate: 0 }}
          animate={{ x: 0, rotate: 360 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.div
          className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-transparent border-b-yellow-400"
          initial={{ x: 200, rotate: 0 }}
          animate={{ x: 0, rotate: -360 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      {/* Typewriter Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-center text-2xl md:text-4xl font-bold"
      >
        <Typewriter
          words={['Hello there!', 'I am Pranjal Arya', 'Data Engineer', 'Machine Learning Enthusiast']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.div>
    </section>
  );
}
