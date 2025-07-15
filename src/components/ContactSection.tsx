import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-black text-white flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 p-[2px] rounded-3xl shadow-2xl max-w-md w-full"
      >
        <div className="bg-black rounded-3xl p-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-yellow-400">📬 Contact Me</h2>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
