import { useEffect, useState, useRef } from "react"
import { Code, Award, Users } from "lucide-react"
import React from "react"
import { SiCodechef } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coding Problems Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div
              className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 ${
                isVisible ? "counter-animation" : ""
              }`}
              data-target={850}
            >
              {isVisible ? "850+" : "0"}
            </div>
            <div className="mt-2 text-gray-600 dark:text-gray-300 font-medium mb-4">Problems Solved</div>

            {/* Platform logos */}
            <div className="flex justify-center space-x-4 mt-3">
              <a href="https://leetcode.com/u/prathammishra99013/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400"
                    fill="currentColor"
                  >
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                  </svg>
                </div>
              </a>
              <a href="https://www.codechef.com/users/prathammishra9" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full group-hover:bg-brown-100 dark:group-hover:bg-amber-900 transition-colors">
                 <SiCodechef ></SiCodechef>
                </div>
              </a>
              <a href="https://www.naukri.com/code360/profile/26a70ad1-f7d9-44cd-a902-e20f460b28e2" target="_blank" rel="noopener noreferrer" className="group">
               <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full group-hover:bg-brown-100 dark:group-hover:bg-amber-900 transition-colors">
                <SiCodingninjas ></SiCodingninjas>
                </div>
              </a>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div
              className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 ${
                isVisible ? "counter-animation" : ""
              }`}
              data-target={5}
            >
              {isVisible ? "5+" : "0"}
            </div>
            <div className="mt-2 text-gray-600 dark:text-gray-300 font-medium mb-4">Certifications</div>

            {/* Certification badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xs shadow-md"
                title="AWS Certified"
              >
                Django
              </div>
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs shadow-md"
                title="Google Cloud Certified"
              >
                DRF
              </div>
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs shadow-md"
                title="React Developer"
              >
                React
              </div>
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs shadow-md"
                title="Python Developer"
              >
                DBMS
              </div>
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xs shadow-md"
                title="MongoDB"
              >
                Cloud
              </div>
            </div>
          </div>

          {/* Team Collaborators Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div
              className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 ${
                isVisible ? "counter-animation" : ""
              }`}
              data-target={15}
            >
              {isVisible ? "15" : "0"}
            </div>
            <div className="mt-2 text-gray-600 dark:text-gray-300 font-medium mb-4">Team Collaborators</div>

            {/* Collaborator avatars */}
            <div className="flex flex-wrap justify-center mt-3">
              <div className="flex -space-x-3 overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium text-xs border-2 border-white dark:border-gray-800">
                  AM
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-medium text-xs border-2 border-white dark:border-gray-800">
                  RK
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-medium text-xs border-2 border-white dark:border-gray-800">
                  JS
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center text-white font-medium text-xs border-2 border-white dark:border-gray-800">
                  PK
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white font-medium text-xs border-2 border-white dark:border-gray-800">
                  VT
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white font-medium text-xs border-2 border-white dark:border-gray-800">
                  +19
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats