import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download, Eye } from 'lucide-react'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white flex items-center justify-center py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Intro Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting Box */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5B8EFF]/10 to-accent/10 border border-[#5B8EFF]/20 rounded-xl px-4 py-2 shadow-soft backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-[#5B8EFF] rounded-full animate-pulse"></div>
              <span className="text-[#5B8EFF] font-semibold tracking-wide text-sm">Hey there! 👋</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-dark leading-tight">
                I'm <span className="text-[#5B8EFF]">Atharva</span>,
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-secondary leading-tight">
                Aspiring Software Engineer &<br />
                Full-Stack Developer Enthusiast
              </h2>
            </div>
            
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#5B8EFF] to-accent rounded-full"></div>
            
            <p className="text-lg text-secondary/80 max-w-xl leading-relaxed">
              Passionate about creating clean, efficient solutions and building 
              scalable applications with modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://drive.google.com/file/d/16usnl_8s2ffoeqHvhB6Yp7yFphRNzfOU/view?usp=sharing"
                target="_blank"
                className="group inline-flex items-center px-8 py-4 bg-[#5B8EFF] text-white font-medium rounded-lg hover:bg-[#4A7FE6] shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download className="mr-3 group-hover:animate-bounce" size={20} />
                View Resume
              </a>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-medium text-secondary font-medium rounded-lg hover:border-[#5B8EFF] hover:text-[#5B8EFF] hover:shadow-card transition-all duration-300 transform hover:-translate-y-1"
              >
                <Eye className="mr-3" size={20} />
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Enhanced Geometric Background Shapes */}
              <div className="absolute -inset-12 opacity-25">
                {/* Large gradient orbs */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5B8EFF]/30 to-[#3B82F6]/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-8 left-4 w-32 h-32 bg-gradient-to-br from-accent/25 to-[#F59E0B]/15 rounded-full blur-xl"></div>
                <div className="absolute top-20 left-8 w-24 h-24 bg-gradient-to-br from-[#8B5CF6]/20 to-[#A855F7]/15 rounded-full blur-lg"></div>
              </div>

              {/* Improved Floating Elements */}
              <div className="absolute -inset-16 pointer-events-none">
                {/* Geometric shapes with better positioning */}
                <div className="absolute top-8 right-16 w-12 h-12 bg-gradient-to-br from-[#5B8EFF]/12 to-[#3B82F6]/8 rounded-2xl rotate-12"></div>
                <div className="absolute bottom-16 right-8 w-8 h-8 bg-gradient-to-br from-accent/15 to-[#F59E0B]/10 rounded-full"></div>
                <div className="absolute top-24 left-4 w-6 h-6 bg-gradient-to-br from-[#8B5CF6]/15 to-[#A855F7]/10 rounded-lg rotate-45"></div>
                <div className="absolute bottom-8 left-12 w-16 h-4 bg-gradient-to-r from-[#5B8EFF]/10 to-transparent rounded-full"></div>
                <div className="absolute top-4 left-20 w-10 h-10 bg-gradient-to-br from-accent/12 to-transparent rounded-full"></div>
                
                {/* Abstract code-like elements */}
                <div className="absolute top-12 left-8 text-[#5B8EFF]/18 font-mono text-sm select-none">{'<dev/>'}</div>
                <div className="absolute bottom-20 right-12 text-accent/25 font-mono text-sm select-none">{'{ code }'}</div>
                <div className="absolute top-36 right-4 text-[#8B5CF6]/20 font-mono text-sm select-none">{'</>'}</div>
                <div className="absolute bottom-32 left-0 text-[#5B8EFF]/15 font-mono text-xs select-none">{'function()'}</div>
              </div>

              {/* Subtle Grid Pattern Background */}
              <div className="absolute -inset-8 opacity-8">
                <div className="w-full h-full rounded-full" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #5B8EFF 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }}></div>
              </div>

              {/* Enhanced Main Image Container */}
              <div className="relative z-10">
                <div className="relative w-80 h-80 md:w-96 md:h-96 group">
                  {/* Multi-layered outer rings */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#5B8EFF] via-accent to-[#8B5CF6] rounded-full p-1">
                    <div className="w-full h-full bg-white rounded-full p-2">
                      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Image container with enhanced effects */}
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                    <img
                      src="/images/profile.png"
                      alt="Atharva"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Subtle overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
        >
          <div className="text-center lg:text-left">
            <div className="text-2xl md:text-3xl font-bold text-dark mb-1">5+</div>
            <div className="text-sm text-secondary uppercase tracking-wide">Projects</div>
          </div>
          <div className="text-center lg:text-left border-l border-r border-gray-medium lg:border-0">
            <div className="text-2xl md:text-3xl font-bold text-dark mb-1">2+</div>
            <div className="text-sm text-secondary uppercase tracking-wide">Years</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-2xl md:text-3xl font-bold text-dark mb-1">10+</div>
            <div className="text-sm text-secondary uppercase tracking-wide">Skills</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home
