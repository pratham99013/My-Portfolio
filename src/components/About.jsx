import { useEffect, useRef } from "react"
import { CheckCircle } from "lucide-react"
import React from "react"
const About = () => {
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add("animate-float")
            } else if (entry.target === contentRef.current) {
              entry.target.classList.add("opacity-100", "translate-y-0")
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
    }
  }, [])

  const highlights = [
    "Proficient in Django, React.js, PostgreSQL, REST APIs, and end-to-end web development",
    "Strong in Low-Level & High-Level System Design with practical project experience",
    "Solved 850+ DSA problems, with solid performance on Leetcode, Codeforces, CodeChef",
    "Built multiple full-stack projects with focus on scalability, security, and UI/UX",
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              Hello! I’m Pratham Mishra, a final-year B.Tech IT student at MMMUT Gorakhpur, passionate about Full-Stack Development, System Design, Problem Solving and 
              building innovative solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              With hands-on experience in building scalable web applications and a strong grasp of LLD and HLD, I focus on clean architecture, performance, and usability. I’ve solved 850+ DSA problems across major platforms and actively participate in coding contests, reflecting my analytical and development skills.
            </p>

            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              ref={imageRef}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl transition-transform duration-3000 ease-in-out"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 mix-blend-overlay"></div>
              <img
                src="/jjd.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
