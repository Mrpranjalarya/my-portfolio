import { useState } from "react";

const projectData = [
  {
    title: "Personality Prediction through CV Analysis",
    skills: ["Python", "NLP", "Scikit-learn", "Decision Trees", "Neural Networks"],
    bullets: [
      "Applied Natural Language Processing (NLP) techniques to extract key personality traits from unstructured CV text data.",
      "Engineered features using text preprocessing, tokenization, and TF-IDF/embedding models for personality inference.",
      "Built predictive models using Decision Trees and Neural Networks to classify personality characteristics.",
      "Evaluated model performance using classification metrics to ensure accuracy and generalization.",
    ],
  },
  {
    title: "Live Weather Updates using Python",
    skills: ["Python", "BeautifulSoup", "Web Scraping", "GitHub"],
    bullets: [
      "Implemented a web scraping script using Python and BeautifulSoup to fetch live weather updates.",
      "Applied web scraping techniques to fetch real-time weather data for any city from online sources.",
      "Ensured seamless accessibility by hosting the project on GitHub with clear documentation.",
      "Automated data extraction and display using Python scripting for efficient user interaction.",
    ],
  },
  {
    title: "Movie Recommendation System",
    skills: ["Python", "ML", "NLP", "Collaborative Filtering", "Content-Based Filtering"],
    bullets: [
      "Built a movie recommendation engine using Machine Learning algorithms to personalize user experience.",
      "Enforced Collaborative Filtering and Content-Based Filtering techniques to suggest relevant movies.",
      "Incorporated Natural Language Processing (NLP) to understand user search queries and preferences.",
      "Enhanced recommendation accuracy through user behavior analysis and text-based similarity measures.",
    ],
  },
  {
    title: "Intelligent Document Chatbot with Theme Detection",
    skills: ["FastAPI", "Streamlit", "ChromaDB", "OCR", "SQLAlchemy", "OpenAI"],
    bullets: [
      "Designed a document-aware chatbot with OCR integration to handle PDFs, DOCX, and image files.",
      "Integrated semantic search using ChromaDB and OpenAI Embeddings for accurate and context-aware question answering.",
      "Built with FastAPI (backend) and Streamlit (frontend) for a responsive and interactive UI experience.",
      "Enabled multi-document handling, source citation, and real-time Q&A capabilities.",
      "Managed document metadata using SQLAlchemy for structured storage and retrieval.",
    ],
  },
];

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="projects" className="py-16 px-4 bg-black text-white">
      <h2 className="text-center text-4xl font-bold mb-12 text-gray-100">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 transition duration-300 hover:shadow-[0_0_20px_#9333ea]"
          >
            <div className="bg-gray-900 rounded-2xl p-6 h-full">
              <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {expandedIndex === index && (
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                  {project.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="mt-2 inline-block bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition"
              >
                {expandedIndex === index ? "Hide Info" : "More Info"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
