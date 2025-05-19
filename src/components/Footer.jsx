import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Pratham Mishra</h3>
            <p className="text-indigo-200 mt-1">  Software Developer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-indigo-200 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-indigo-200 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-indigo-200 hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-indigo-200 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-white">Contact</h4>
              <ul className="space-y-2">
                <li className="text-indigo-200">prathammishra99013@gmail.com</li>
                <li className="text-indigo-200">+91 9682447792</li>
                <li className="text-indigo-200">Gorakhpur, UP, India</li>
              </ul>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-indigo-200">&copy; {currentYear} Pratham Mishra. All rights reserved.</p>
            <p className="text-indigo-300 text-sm mt-1">Made with React, Vite & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
