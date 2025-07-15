import { motion } from "framer-motion";

export default function ThanksSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white flex justify-center items-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-black/30 backdrop-blur-md rounded-3xl p-[2px] shadow-2xl"
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-gradient-border blur-sm opacity-80"></div>

        {/* Actual Content */}
        <div className="relative rounded-3xl bg-black/80 p-10 md:p-14 flex flex-col items-center text-center border border-white/10 shadow-inner">
          <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4 animate-bounce">
            🎉 Thank You!
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Your time means a lot. I’d love to collaborate on exciting projects. Let’s connect!
          </p>

          {/* Button with glowing effect */}
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition focus:outline-none focus:ring-4 focus:ring-yellow-400/60 focus:ring-offset-2 active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
