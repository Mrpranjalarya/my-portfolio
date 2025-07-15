export default function EducationSection() {
  return (
    <section id="education" className="py-16 px-6 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Education</h2>
        <p className="text-gray-400 text-lg">My academic background</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-5xl mx-auto">
        {/* High School */}
        <div className="bg-gray-800 text-gray-100 rounded-xl p-6 shadow-md w-full md:w-1/3 transition hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-yellow-400">High School</h3>
          <p className="text-gray-300">Subhadra Kumar Inter College<br />Completed 2017</p>
        </div>

        {/* Intermediate */}
        <div className="bg-gray-800 text-gray-100 rounded-xl p-6 shadow-md w-full md:w-1/3 transition hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Intermediate</h3>
          <p className="text-gray-300">Subhadra Kumar Inter College<br />Completed 2019</p>
        </div>

        {/* Bachelor's Degree */}
        <div className="bg-gray-800 text-gray-100 rounded-xl p-6 shadow-md w-full md:w-1/3 transition hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Bachelor's Degree</h3>
          <p className="text-gray-300">Parul University<br />B.Tech CSE with AI<br />2021 – 2025</p>
        </div>
      </div>
    </section>
  );
}
