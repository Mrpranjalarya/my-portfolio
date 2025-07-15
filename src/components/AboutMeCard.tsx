export default function AboutMeCard() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black-900 px-4 py-12">
      <div className="bg-gray-800 text-gray-100 rounded-3xl shadow-lg p-8 max-w-xl w-full transition duration-300 hover:shadow-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-yellow-400">About Me</h2>

        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            👋 I am an aspiring Data Scientist and AI/ML enthusiast, actively learning and building skills in Data Science, Machine Learning, and Generative AI (GenAI). My passion lies in exploring how data can drive intelligent solutions and meaningful automation to solve real-world problems.
          </p>

          <p>
            I am a self-motivated learner, always seeking opportunities to grow, collaborate, and contribute to innovative solutions. I am open to internships, projects, and collaborative opportunities that will allow me to apply my learning in real-world scenarios.
          </p>

          <div>
            <h3 className="font-semibold text-xl mb-2 text-yellow-300">🔑 Key Interests:</h3>
          
          </div>

          <p>
            I believe in learning by doing and am excited to continue building intelligent systems that make a difference.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="#contact"
            className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-500 transition"
          >
            Thanks
          </a>
        </div>
      </div>
    </section>
  );
}
