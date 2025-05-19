import { useEffect, useRef } from "react"
import { ArrowRight, Download, GitlabIcon as GitHub, Linkedin, Twitter } from "lucide-react"
import React from "react"

const Hero = () => {
  const typingRef = useRef(null)

  useEffect(() => {
    if (typingRef.current) {
      const roles = ["Full Stack Developer", "Competitive Programmer", "Tech Enthusiast"]
      let roleIndex = 0
      let charIndex = 0
      let isDeleting = false
      let typingDelay = 150

      const type = () => {
        const currentRole = roles[roleIndex]

        if (isDeleting) {
          typingRef.current.textContent = currentRole.substring(0, charIndex - 1)
          charIndex--
          typingDelay = 50
        } else {
          typingRef.current.textContent = currentRole.substring(0, charIndex + 1)
          charIndex++
          typingDelay = 150
        }

        if (!isDeleting && charIndex === currentRole.length) {
          isDeleting = true
          typingDelay = 1500
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false
          roleIndex = (roleIndex + 1) % roles.length
          typingDelay = 500
        }

        setTimeout(type, typingDelay)
      }

      setTimeout(type, 1000)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 z-0"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-700 dark:to-purple-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-pink-300 to-indigo-300 dark:from-pink-700 dark:to-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Pratham Mishra
                </span>
              </h1>
              <div className="flex items-center text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                <span className="mr-2">I'm a</span>
                <span
                  ref={typingRef}
                  className="text-indigo-600 dark:text-indigo-400 min-w-[220px] typing-cursor"
                ></span>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Final year B.Tech. student in Information Technology at MMMUT Gorakhpur, passionate about creating
                innovative solutions and learning new technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium shadow-lg hover:shadow-xl border border-indigo-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/pratham99013"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <GitHub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pratham-mishra-8476aa230/"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/home"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* SVG Animation of a boy */}
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Background circle */}
                  <circle cx="200" cy="200" r="190" fill="none" stroke="#4338ca" stroke-width="2" stroke-dasharray="1200" stroke-dashoffset="1200">
                    <animate attributeName="stroke-dashoffset" from="1200" to="0" dur="3s" fill="freeze" />
                  </circle>
                  
                  {/* Character base */}
                  <g>
                    {/* Head */}
                    <circle cx="200" cy="130" r="60" fill="#ffb6b6">
                      <animate attributeName="r" values="55;60;55" dur="4s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Face */}
                    {/* Eyes */}
                    <g>
                      <circle cx="180" cy="120" r="6" fill="#333">
                        <animate attributeName="cy" values="120;118;120" dur="5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="220" cy="120" r="6" fill="#333">
                        <animate attributeName="cy" values="120;118;120" dur="5s" repeatCount="indefinite" />
                      </circle>
                      
                      {/* Eyebrows */}
                      <path d="M170,105 Q180,100 190,105" fill="none" stroke="#333" stroke-width="2">
                        <animate attributeName="d" values="M170,105 Q180,100 190,105;M170,103 Q180,98 190,103;M170,105 Q180,100 190,105" dur="5s" repeatCount="indefinite" />
                      </path>
                      <path d="M210,105 Q220,100 230,105" fill="none" stroke="#333" stroke-width="2">
                        <animate attributeName="d" values="M210,105 Q220,100 230,105;M210,103 Q220,98 230,103;M210,105 Q220,100 230,105" dur="5s" repeatCount="indefinite" />
                      </path>
                      
                      {/* Smile */}
                      <path d="M175,150 Q200,165 225,150" fill="none" stroke="#333" stroke-width="2">
                        <animate attributeName="d" values="M175,150 Q200,165 225,150;M175,152 Q200,167 225,152;M175,150 Q200,165 225,150" dur="5s" repeatCount="indefinite" />
                      </path>
                    </g>
                    
                    {/* Hair */}
                    <path d="M140,110 Q160,60 200,70 Q240,60 260,110" fill="#333">
                      <animate attributeName="d" values="M140,110 Q160,60 200,70 Q240,60 260,110;M140,110 Q160,65 200,75 Q240,65 260,110;M140,110 Q160,60 200,70 Q240,60 260,110" dur="7s" repeatCount="indefinite" />
                    </path>
                    
                    {/* Body */}
                    <rect x="170" y="190" width="60" height="90" fill="#6366f1" rx="10">
                      <animate attributeName="y" values="190;188;190" dur="4s" repeatCount="indefinite" />
                    </rect>
                    
                    {/* Arms */}
                    {/* Left arm with laptop */}
                    <g>
                      <rect x="125" y="200" width="45" height="15" fill="#4f46e5" rx="5">
                        <animate attributeName="y" values="200;198;200" dur="4s" repeatCount="indefinite" />
                      </rect>
                      {/* Laptop base */}
                      <rect x="85" y="195" width="50" height="30" fill="#94a3b8" rx="5">
                        <animate attributeName="y" values="195;193;195" dur="4s" repeatCount="indefinite" />
                      </rect>
                      {/* Laptop screen */}
                      <rect x="90" y="165" width="40" height="30" fill="#1e40af" rx="2">
                        <animate attributeName="y" values="165;163;165" dur="4s" repeatCount="indefinite" />
                      </rect>
                      {/* Code on screen */}
                      <path d="M95,175 h10 M95,180 h7 M95,185 h15" stroke="#4ade80" stroke-width="1.5">
                        <animate attributeName="y" values="0;2;0" dur="4s" repeatCount="indefinite" />
                      </path>
                    </g>
                    
                    {/* Right arm coding */}
                    <g>
                      <rect x="230" y="200" width="45" height="15" fill="#4f46e5" rx="5">
                        <animate attributeName="y" values="200;198;200" dur="4s" repeatCount="indefinite" />
                        <animate attributeName="width" values="45;50;45" dur="2s" repeatCount="indefinite" />
                      </rect>
                      <circle cx="280" cy="200" r="5" fill="#ffb6b6">
                        <animate attributeName="cy" values="200;198;200" dur="4s" repeatCount="indefinite" />
                      </circle>
                    </g>
                    
                    {/* Legs */}
                    <rect x="170" y="280" width="25" height="70" fill="#1e3a8a" rx="5">
                      <animate attributeName="height" values="70;68;70" dur="4s" repeatCount="indefinite" />
                    </rect>
                    <rect x="205" y="280" width="25" height="70" fill="#1e3a8a" rx="5">
                      <animate attributeName="height" values="70;72;70" dur="4s" repeatCount="indefinite" alternate="true" />
                    </rect>
                    
                    {/* Floating elements */}
                    {/* Code symbols */}
                    <g>
                      <text x="270" y="130" font-family="monospace" font-size="14" fill="#4ade80">&lt;/&gt;</text>
                      <text x="300" y="160" font-family="monospace" font-size="14" fill="#8b5cf6">{}</text>
                      <text x="120" y="140" font-family="monospace" font-size="14" fill="#3b82f6">()</text>
                      <text x="100" y="100" font-family="monospace" font-size="14" fill="#ec4899">#</text>
                      
                      {/* Animation for floating elements */}
                      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="4s" repeatCount="indefinite" />
                    </g>
                  </g>
                  
                  {/* Desk beneath */}
                  <rect x="60" y="350" width="280" height="10" fill="#94a3b8" rx="2" />
                  
                  {/* Pulse animation around character */}
                  <circle cx="200" cy="220" r="120" fill="none" stroke="#6366f1" stroke-width="2" opacity="0.3">
                    <animate attributeName="r" values="120;140;120" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Coffee cup */}
                  <g>
                    <rect x="300" y="330" width="20" height="20" fill="#475569" rx="2" />
                    <path d="M320,335 h10 v10 h-10" fill="none" stroke="#475569" stroke-width="2" />
                    <path d="M305,330 v-5 h10 v5" fill="#fb923c" />
                    {/* Steam animation */}
                    <path d="M310,320 q3,-5 0,-10" stroke="#94a3b8" stroke-width="1" fill="none">
                      <animate attributeName="d" values="M310,320 q3,-5 0,-10;M310,320 q-3,-5 0,-10;M310,320 q3,-5 0,-10" dur="3s" repeatCount="indefinite" />
                    </path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero