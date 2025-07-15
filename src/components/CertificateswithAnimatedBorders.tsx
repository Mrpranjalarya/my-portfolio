import { useState } from "react";
import { motion } from "framer-motion";

export default function CertificatesWithAnimatedBorders() {
  const [showSummaries, setShowSummaries] = useState({});

  const toggleSummary = (index) => {
    setShowSummaries((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const certificates = [
    {
      title: "Artificial Intelligence Virtual Experience",
      issuer: "Cognizant via Forage",
      date: "Jul 2025",
      skills: [
        "Python", "Machine Learning", "Data Analysis", "Data Visualization", "Communication",
        "Model Interpretation", "Problem Statement", "Quality Assurance", "Data Modeling",
        "Development", "Evaluation", "Machine Learning Engineering",
      ],
      summary:
        "Completed a job simulation for Cognizant’s Data Science team:\n\n" +
        "- Conducted exploratory data analysis using Python and Google Colab for Gala Groceries.\n" +
        "- Built a Python module for model training and performance evaluation.\n" +
        "- Presented results in PowerPoint format for business stakeholders.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_wsHMQidSm27DTLWkP_1716373360906_completion_certificate.pdf",
    },
    {
      title: "GenAI Consulting Simulation",
      issuer: "BCG via Forage",
      date: "Jul 2025",
      skills: [
        "Chatbot Development", "Data Extraction", "Excel", "Financial Analysis", "Jupyter",
        "Logic", "NLP", "Python",
      ],
      summary:
        "Completed a GenAI consulting simulation for BCG:\n\n" +
        "- Developed a financial chatbot using Python and pandas.\n" +
        "- Extracted and interpreted data from 10-K and 10-Q reports.\n" +
        "- Used rule-based logic to deliver user-friendly financial insights.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/gabev3vXhuACr48eb_BCG_wsHMQidSm27DTLWkP_1716890338549_completion_certificate.pdf",
    },
    {
      title: "Data Analytics & Visualization",
      issuer: "Accenture North America via Forage",
      date: "Jul 2025",
      skills: [
        "Communication", "Data Analysis", "Data Modeling", "Data Understanding",
        "Data Visualization", "Presentations", "Project Planning", "Public Speaking",
        "Storytelling", "Strategy", "Teamwork",
      ],
      summary:
        "Completed a simulation as a Data Analyst at Accenture:\n\n" +
        "- Cleaned, modeled, and analyzed 7 datasets for a social media client.\n" +
        "- Identified trends to support strategic decision-making.\n" +
        "- Created a PowerPoint deck and video presentation to communicate insights.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_wsHMQidSm27DTLWkP_1708766844718_completion_certificate.pdf",
    },
    {
      title: "Data Analytics Simulation",
      issuer: "Deloitte Australia via Forage",
      date: "Jul 2025",
      skills: ["Data Analysis", "Data Modeling", "Spreadsheets", "Tableau"],
      summary:
        "Completed a Deloitte simulation on data analytics & forensic tech:\n\n" +
        "- Created dashboards using Tableau.\n" +
        "- Classified and analyzed business data using Excel.\n" +
        "- Drew actionable insights from complex data.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_wsHMQidSm27DTLWkP_1740130785397_completion_certificate.pdf",
    },
    {
      title: "GenAI-Powered Data Analytics",
      issuer: "Tata iQ via Forage",
      date: "Jul 2025",
      skills: [
        "AI Strategy Design", "Analytical Reporting", "Automation Planning",
        "Business Communication", "Data Interpretation", "Decision Justification",
        "Ethical Reasoning", "Exploratory Data Analysis (EDA)", "GenAI Data Insights",
        "Handling Missing Data", "Model Justification", "Model Selection",
        "Predictive Modeling", "Regulatory Awareness", "Strategic Thinking",
      ],
      summary:
        "Completed Tata’s GenAI Data Analytics simulation:\n\n" +
        "- Used GenAI for data cleaning, analysis & modeling insights.\n" +
        "- Proposed no-code predictive models for delinquency risk.\n" +
        "- Designed an AI-driven collections strategy aligned with ethical AI.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_wsHMQidSm27DTLWkP_1749984158628_completion_certificate.pdf",
    },
    {
      title: "Software Engineering Experience",
      issuer: "J.P. Morgan via Forage",
      date: "May 2024",
      skills: [
        "Basic Programming", "Contributing to Open Source", "Financial Analysis",
        "Financial Data", "Git", "Python", "React", "Technical Communication",
        "TypeScript", "Web Applications",
      ],
      summary:
        "Completed JPMorgan Software Engineering simulation:\n\n" +
        "- Set up local dev environment and fixed web app issues.\n" +
        "- Used Perspective library to visualize financial data for traders.\n" +
        "- Built interactive financial dashboards using React & TypeScript.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_wsHMQidSm27DTLWkP_1716886454187_completion_certificate.pdf",
    },
  ];

  return (
    <section className="py-16 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">🎓 Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative rounded-2xl p-[2px] animate-gradient-border bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
          >
            <div className="bg-black rounded-2xl p-6 flex flex-col h-full text-white">
              <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
              <p className="text-gray-300">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>

              <div className="flex flex-wrap gap-2 my-3">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {showSummaries[index] && (
                <div className="text-gray-400 text-sm mb-4 whitespace-pre-line">
                  {cert.summary}
                </div>
              )}

              <div className="flex gap-4 mt-auto">
                <button
                  onClick={() => toggleSummary(index)}
                  className="bg-gray-700 text-white font-medium px-4 py-2 rounded-full hover:bg-gray-600 transition"
                >
                  {showSummaries[index] ? "Hide Summary" : "View Summary"}
                </button>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-full hover:bg-yellow-500 transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
