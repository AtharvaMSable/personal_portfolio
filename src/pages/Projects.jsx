import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Personal Portfolio Website',
      role: 'Frontend Developer',
      description: 'A modern, responsive portfolio website showcasing my projects, certifications, and experience. Features smooth animations, contact form with email verification, and optimized performance.',
      techStack: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
      github: 'https://github.com/AtharvaMSable/personal_portfolio',
      demo: window.location.origin
    },
    {
      id: 2,
      name: 'Heavenly - A vacation rental platform',
      role: 'Full Stack Developer',
      description: 'Developed a full-stack vacation rental platform using the MERN stack, enabling users to book and list properties.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Mapbox API'],
      github: 'https://github.com/AtharvaMSable/Havenly',
      demo: 'https://wanderlust-jl84.onrender.com/listings'
    },
    {
      id: 3,
      name: 'Visualizing Paths',
      role: 'Frontend Developer',
      description: 'A web application that visualizes pathfinding algorithms in action, allowing users to see how different algorithms navigate a grid.',
      techStack: ['JavaScript', 'p5.js', 'HTML', 'CSS'],
      github: 'https://github.com/AtharvaMSable/Visualizing-Paths',
      demo: 'https://visualizing-paths.vercel.app/'
    },
    {
      id: 4,
      name: 'Snake Escape',
      role: 'Frontend Developer',
      description: 'Developed a game in p5.js where players control the food to evade a snake using pathfinding algorithms.',
      techStack: ['JavaScript', 'p5.js', 'HTML', 'CSS'],
      github: 'https://github.com/AtharvaMSable/Snake-Escape',
      demo: 'https://snake-escape.vercel.app/'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">My Projects</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each project represents a learning 
            experience and showcases different aspects of my development skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl border border-gray-medium shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              {/* Website Preview Overlay */}
              {project.demo && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 bg-white rounded-2xl overflow-hidden">
                  <div className="relative w-full h-full">
                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4 z-30">
                      <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full font-medium">● Online</span>
                    </div>
                    
                    {/* Website Preview */}
                    <iframe
                      src={project.demo}
                      title={`${project.name} Preview`}
                      className="w-full h-full scale-50 origin-top-left transform"
                      style={{ 
                        width: '200%', 
                        height: '200%',
                        pointerEvents: 'none'
                      }}
                      loading="lazy"
                    />
                    
                    {/* Overlay Controls */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-[#0099ff] text-white rounded-lg hover:bg-[#0077cc] transition-all duration-300 font-medium text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Open Full Site
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
              
              <div className="relative p-8">
                
                {/* Project Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">
                      {project.name}
                    </h3>
                    <p className="text-[#0099ff] font-medium text-sm bg-[#0099ff]/10 px-3 py-1 rounded-full inline-block">
                      {project.role}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-light text-secondary hover:text-[#0099ff] hover:bg-[#0099ff]/10 transition-all duration-300"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-light text-secondary hover:text-[#0099ff] hover:bg-[#0099ff]/10 transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-dark mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gray-light text-secondary text-xs rounded-lg border border-gray-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
