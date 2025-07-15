import { motion } from "framer-motion";

// Skill categories and items with emoji icons
const skills = [
  {
  category: "Languages",
  icon: "📦",
  items: [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "TypeScript", icon: "🔷" },
    { name: "C", icon: "📘" },
    { name: "C++", icon: "➕" },
    { name: "SQL", icon: "💾" },
    { name: "MongoDB", icon: "🍃" }
  ]
},
  {
  category: "Frameworks & Libraries",
  icon: "🧩",
  items: [
   
    { name: "FastAPI", icon: "⚡" },
    { name: "Flask", icon: "🍶" },
    { name: "Pandas", icon: "🐼" },
    { name: "NumPy", icon: "🔢" },
    { name: "Matplotlib", icon: "📊" },
    { name: "Seaborn", icon: "🌊" },
    { name: "Scikit-learn", icon: "📚" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "OpenCV", icon: "👁️" },
    { name: "LangChain", icon: "🔗" },
    { name: "n8n", icon: "🛠️" },
  ]
},
 {
  category: "Tools",
  icon: "🛠️",
  items: [
    { name: "MySQL", icon: "🗄️" },
    { name: "Git", icon: "🔧" },
    { name: "Web Scraping", icon: "🌐" },
    { name: "BeautifulSoup", icon: "🍲" },
    { name: "Excel", icon: "📊" },
    { name: "Power BI", icon: "📈" },
    { name: "n8n", icon: "⚙️" },
    { name: "ChatGPT", icon: "🤖" },
  ]
},
  {
    category: "Platforms",
    icon: "💻",
    items: [
      { name: "Google Colab", icon: "📓" },
      { name: "GitHub", icon: "🐙" },
      { name: "PowerPoint", icon: "📽️" },
      { name: "OBS Studio", icon: "🎥" },
    ],
  },
  {
    category: "Soft Skills",
    icon: "🤝",
    items: [
      { name: "Communication", icon: "💬" },
      { name: "Teamwork", icon: "👥" },
      { name: "Problem Solving", icon: "🧩" },
      { name: "Presentation", icon: "🗣️" },
      { name: "Design Thinking", icon: "🎨" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-12 px-4 bg-black text-white" id="skills">
      <h2 className="text-center text-3xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="bg-gray-900 rounded-xl p-4 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            {/* Category Title */}
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <span className="text-xl">{category.icon}</span>
              {category.category}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {category.items.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-md p-2 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.01 }}
                >
                  <div className="text-xl mb-1">{skill.icon}</div>
                  <h4 className="text-xs font-medium">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
