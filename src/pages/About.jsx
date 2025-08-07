import { motion } from 'framer-motion'
import { Code, Database, Server, Globe } from 'lucide-react'

const About = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      items: ['Java', 'C/C++', 'Python']
    },
    {
      category: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      items: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8" />,
      items: ['Node.js', 'Express.js', 'Java', 'REST APIs']
    },
    {
      category: 'Database',
      icon: <Database className="w-8 h-8" />,
      items: ['MongoDB', 'MySQL']
    },
    {
      category: 'Tools & Others',
      icon: <Code className="w-8 h-8" />,
      items: ['Git', 'AWS', 'Postman', 'VS Code']
    }
  ]

  const education = [
    {
      degree: 'B. Tech in Computer Science Engineering',
      institution: 'Vellore Institute of Technology',
      year: '2022-2026',
      cgpa: '8.7 CGPA'
    },
    {
      degree: 'Higher Secondary',
      institution: 'Nutan Vidya Mandir, Deolali Camp, Nashik',
      year: '2020-2022',
      cgpa: '75%'
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
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">About Me</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column - Bio */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-light p-8 rounded-2xl shadow-soft">
              <h2 className="text-2xl font-bold text-dark mb-6">My Story</h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  I'm passionate about software engineering with a strong foundation in Full-stack development.
                  My journey in programming started during college, where I discovered my love for
                  creating digital solutions that make a difference.
                </p>
                <p>
                  I specialize in Full-stack development and have experience building scalable web applications.
                  I'm also proficient in Java and enjoy exploring new technologies and frameworks.
                </p>
                <p>
                  When I'm not coding, you can find me reading tech blogs, contributing to open-source
                  projects, or exploring the latest trends in software development.
                </p>
              </div>
            </div>

            {/* Location & Interests */}
            <div className="bg-white p-6 rounded-xl border border-gray-medium shadow-card">
              <h3 className="text-lg font-semibold text-dark mb-4">Details</h3>
              <div className="space-y-3 text-secondary">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Nashik, India</span>
                </div>
                {/* <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>Open Source Contributor</span>
                </div> */}
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Tech Enthusiast</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Education */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            
            {/* Skills Grid */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Skills</h2>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white p-4 rounded-xl border border-gray-medium shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-primary mr-3">{skill.icon}</span>
                      <h3 className="font-semibold text-dark text-sm">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-2 py-1 bg-gray-light text-secondary text-xs rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="relative pl-8"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
                    {index < education.length  && (
                      <div className="absolute left-1.5 top-5 w-0.5 h-16 bg-gray-medium"></div>
                    )}
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-medium shadow-card">
                      <h3 className="font-bold text-dark">{edu.degree}</h3>
                      <p className="text-primary font-medium mt-1">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-secondary text-sm">{edu.year}</span>
                        <span className="text-accent font-semibold text-sm">{edu.cgpa}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
