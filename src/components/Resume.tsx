"use client";

import { useState } from "react";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      title: "Elementary",
      period: "2006 - 2012",
      description: "Benito Nieto Elementary School provided foundational education, nurturing curiosity and fostering essential skills crucial for academic growth. Through a diverse curriculum and supportive environment, this phase laid the groundwork for future learning endeavors.",
    },
    {
      title: "High School",
      period: "2012 - 2016",
      description: "Banurang Gurang High School offered a dynamic learning experience, blending academic rigor with extracurricular activities. It was a period of personal growth, where friendships flourished, and leadership qualities emerged, preparing me for the challenges of higher education.",
    },
    {
      title: "Senior High School (STEM)",
      period: "2016 - 2018",
      description: "Prenza National High School, specializing in STEM, enriched my academic journey with hands-on learning and innovative projects. This phase equipped me with analytical thinking and problem-solving skills, essential for navigating complex scientific concepts and real-world applications.",
    },
    {
      title: "College",
      period: "2018 - 2022",
      description: "At Pambayang Dalubhasaan ng Marilao, I pursued a Bachelor's degree in Computer Science with a focus on programming. Immersed in advanced coursework and practical projects, I delved deep into programming languages, algorithms, and software development methodologies. This intensive program honed my coding skills and analytical thinking, preparing me for a rewarding career in the tech industry.",
    },
  ];

  const skills = [
    { name: "HTML", percentage: 60 },
    { name: "CSS", percentage: 80 },
    { name: "Javascript", percentage: 50 },
    { name: "Plugin", percentage: 55 },
  ];

  return (
    <section id="resume" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">My Resume</h2>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-lg p-2">
            <button
              className={`px-6 py-3 rounded-lg transition-colors ${
                activeTab === "education"
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              className={`px-6 py-3 rounded-lg transition-colors ${
                activeTab === "skills"
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              Professional Skills
            </button>
          </div>
        </div>

        {activeTab === "education" && (
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="absolute left-0 top-6 w-1 h-16 bg-blue-600 rounded"></div>
                <div className="pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.period}</p>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "skills" && (
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">Development Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
