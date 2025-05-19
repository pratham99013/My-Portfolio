import { useEffect, useRef } from "react"
import { Briefcase, Calendar, Award } from "lucide-react"
import React from "react"
const Experience = () => {
  const timelineRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0")
          }
        })
      },
      { threshold: 0.1 },
    )

    timelineRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [])

  // Add refs to the array
  timelineRefs.current = []
  const addToRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el)
    }
  }

  const experiences = [
    {
      title: "Junior Web Developer",
      company: "NexGen Solutions",
      period: "Feb 2023 - Present",
      description:
        "• Developed Full Stack solutions for client projects, building scalable backend services, UIs, and integrating  Payment systems. Worked on APIS, Dbms, and deployment while ensuring security and performance.",
      skills: ["React.js", "Django", "PostgreSQL", "Git", "Rest APIs"],
      isLeft: true,
    },
    {
      title: "Programmer Analyst Intern",
      company: "Cognizant",
      period: "May 2024 - Present",
      description:
        "• Worked on software development and documentation tasks, assisted in analyzing client requirements, and collaborated with teams to deliver project components efficiently. Gained hands-on experience with SDLC and tools like JIRA.",
      skills: ["APIs", "AI", "Cloud Computing", "Software Development"],
      isLeft: false,
    },
    {
      title: "Web Developement Intern",
      company: "Oasis Infobyte",
      period: "July 2023 - August 2023",
      description:
        "Developed responsive web applications using React.js, JavaScript, HTML, and CSS, ensuring a seamless user experience. Implemented Firebase for backend services, including Authentication and real-time Database management",
      skills: ["HTML", "CSS", "Javascript", "Firebase"],
      isLeft: true,
    },

  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            My Experience
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the valuable experiences that have shaped my skills and expertise.
          </p>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>

          <div className="relative z-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`mb-12 flex items-center ${
                  exp.isLeft
                    ? "flex-row-reverse text-right md:pr-12 opacity-0 -translate-x-10"
                    : "md:pl-12 opacity-0 translate-x-10"
                } transition-all duration-700 ease-out`}
              >
                <div className={`w-full md:w-1/2 ${exp.isLeft ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    </div>
                    <div className="mb-3">
                      <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{exp.company}</div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 dark:from-indigo-900 dark:to-purple-900 dark:text-indigo-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 border-indigo-600 dark:border-indigo-400 z-10"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
           <a href="https://drive.google.com/file/d/1jbKxkyRECxB_3KzKJYtiqtfTdXkOETnG/view?usp=sharing">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-300">
           
            <Award className="w-5 h-5 mr-2" />
            <span>View Full Resume</span>
        
          </div>
              </a>
        </div>
      </div>
    </section>
  )
}

export default Experience