import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-medium sticky top-0 z-50 shadow-soft">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 text-3xl font-bold text-dark tracking-tight hover:text-[#5B8EFF] transition-colors duration-300">
              <img 
                src="/images/logo.svg" 
                alt="Atharva Logo" 
                className="w-10 h-10 object-contain"
              />
              <span>Atharva</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#5B8EFF] bg-[#5B8EFF]/10 shadow-card'
                    : 'text-secondary hover:text-dark hover:bg-gray-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-dark p-2 rounded-lg hover:bg-gray-light transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white border border-gray-medium rounded-xl mt-2 shadow-card">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-4 rounded-lg text-lg font-semibold transition-all ${
                    location.pathname === link.path
                      ? 'text-[#5B8EFF] bg-[#5B8EFF]/10 shadow-card'
                      : 'text-secondary hover:text-dark hover:bg-gray-light'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
