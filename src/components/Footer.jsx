import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-light border-t border-gray-medium">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
              {/* Logo SVG */}
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/images/logo.svg" 
                  alt="Atharva Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xl font-bold text-dark">Atharva</p>
            </div>
            <p className="text-secondary">Software Engineer & MERN Developer</p>
            <p className="text-secondary/70 text-sm mt-1">Building the future, one line of code at a time</p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="mailto:atharvasable021@gmail.com"
              className="group p-3 rounded-xl bg-white border border-gray-medium text-secondary hover:text-primary hover:border-primary hover:shadow-card transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/AtharvaMSable"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-white border border-gray-medium text-secondary hover:text-primary hover:border-primary hover:shadow-card transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/atharvasable/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-white border border-gray-medium text-secondary hover:text-primary hover:border-primary hover:shadow-card transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-medium text-center">
          <div className="w-12 h-0.5 bg-primary mx-auto mb-4"></div>
          <p className="text-secondary/70 text-sm">
            © {new Date().getFullYear()} Atharva. Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
