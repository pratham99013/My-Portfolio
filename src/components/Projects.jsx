import { useState } from "react"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import React from "react"
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "other", name: "Other Projects" },
  ]

  const allProjects = [
    {
      title: "DEVELOPERS HUB",
      description:
        "Developed a Web Application that helps Developers connect, chat, share projects, and vote on ideas, making collaboration easier and more interactive.",
      technologies: ["Django REST,", "PostgreSQL", "Javascript", "HTML/CSS"],
      github: "https://github.com/pratham99013/CodeHub/",
      demo: "https://code-hub-zeta.vercel.app/users/",
      image: "/image2.png",
      category: "web",
      featured: true,
    },
    {
      title: "Article Scraper",
      description: "A Web App which displays the latest artcles from Various Sources",
      technologies: ["React.js", "Firebase", "Djnago REST", "Scraping"],
      github: "https://autodigest.willreo.com/articles",
      demo: "https://autodigest.willreo.com/articles",
      image: "/image1.png",
      category: "web",
      featured: false,
    },
    {
      title: "Heroic Horizon",
      description: "Developed a Full-Stack Web Application using Django, featuring robust user authentication, blog post management (with Images), and a Q&A section with threaded replies.",
      technologies: ["Djnago", "Bootstrap", "Javascript", "HTML/CSS"],
      github: "https://github.com/pratham99013/Power-Panel",
      demo: "https://power-panel.onrender.com/",
      image: "/image3.png",
      category: "web",
      featured: true,
    },
    {
      title: "Youtube Clone",
      description:
        "Built a YouTube Clone with seamless video streaming, showcasing expertise in UI design, front-end development, and API integration.",
      technologies: ["React.js", "Rapid API", "Material UI"],
      github: "https://github.com/pratham99013/Youtube-Clone",
      demo: "https://papaya-custard-69d2d0.netlify.app/",
      image: "./image4.png",
      category: "web",
      featured: false,
    },
  
  ]

  const filteredProjects =
    activeCategory === "all" ? allProjects : allProjects.filter((project) => project.category === activeCategory)

  const featuredProjects = allProjects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            My Projects
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="mr-2">Featured Projects</span>
            <div className="h-px flex-grow bg-gradient-to-r from-indigo-600 to-transparent dark:from-indigo-400 ml-4"></div>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Categories */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium shadow-lg hover:shadow-xl border border-indigo-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Projects
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
