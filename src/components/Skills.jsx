import { useEffect, useRef } from "react"
import React from "react"

const Skills = () => {
  const skillRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Instead of just adding a class, directly set the width to the data-width value
            const targetWidth = entry.target.getAttribute("data-width")
            entry.target.style.width = targetWidth
          }
        })
      },
      { threshold: 0.1 },
    )

    skillRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [])

  // Add refs to the array
  skillRefs.current = []
  const addToRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el)
    }
  }

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
                { name: "C++", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 80 },
        { name: "Java", level: 60 },

      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Redux", level: 80 },
      ],
    },
    {
      category: "Backend Development",
      skills: [

        { name: "Django/DRF", level: 95 },
        { name: "RESTful APIs", level: 90 },
            { name: "Firebase", level: 75 },
           { name: "Express.js", level: 75 },
      ],
    },
    {
      category: "Database & Tools",
      skills: [

     
        { name: "PostgreSQL", level: 75 },
           { name: "MySQL", level: 80 },
        { name: "Git/Github", level: 90 },

      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            My Skills
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in various technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        ref={addToRefs}
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "0%" }}
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills