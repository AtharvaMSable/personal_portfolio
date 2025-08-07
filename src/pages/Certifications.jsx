import { motion } from 'framer-motion'
import { ExternalLink, Calendar } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Oracle Certified Generative AI Professional',
      issuer: 'Oracle',
      date: '2025',
      link: 'https://drive.google.com/file/d/1IV3pHJEn7_47hwPU4qvoO5dTrtDfHJIO/view?usp=sharing',
      description: 'Professional certification in Oracle Generative AI technologies and applications.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png'
    },
    {
      id: 2,
      title: 'Oracle Certified Data Science Professional',
      issuer: 'Oracle',
      date: '2025',
      link: 'https://drive.google.com/file/d/1Xgh5QoGhJfSfeL3qSQ474PR7SGMToOtz/view?usp=sharing',
      description: 'Professional certification in Oracle Data Science technologies, machine learning, and analytics.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png'
    },
    {
      id: 3,
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      date: '2025',
      link: 'https://drive.google.com/file/d/1EQql8bLFuBMU0ueIzIA_LmYF9VR5UTak/view?usp=sharing',
      description: 'Foundational certification covering Oracle Cloud Infrastructure services and architecture.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png'
    },
    {
      id: 4,
      title: 'Postman API Fundamental Student Expert Certification',
      issuer: 'Postman',
      date: '2025',
      link: 'https://drive.google.com/file/d/1PcPLgroS7kMJHBHZdMl_owIlkCFWsfYE/view?usp=sharing',
      description: 'Expert-level certification in API development, testing, and documentation using Postman.',
      logo: 'https://voyager.postman.com/logo/postman-logo-icon-orange.svg'
    },
    {
      id: 5,
      title: 'Cloud Computing',
      issuer: 'Blackbucks',
      date: '2025',
      link: 'https://drive.google.com/file/d/14jfNPJKtXNH5pU_Tk0c28PK_8llagOrX/view?usp=sharing',
      description: 'Comprehensive cloud computing course covering modern cloud technologies and practices.',
      logo: 'https://theblackbucks.com/images/logo.png'
    },
    {
      id: 6,
      title: 'Machine Learning Specialization',
      issuer: 'Coursera',
      date: '2024',
      link: 'https://drive.google.com/file/d/1Glra8du-thjXxozz9hWYxba2vmY77QQH/view?usp=sharing',
      description: 'Comprehensive machine learning course covering algorithms, neural networks, and practical applications.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg'
    },
    {
      id: 7,
      title: 'AWS Academy Cloud Architecting',
      issuer: 'Amazon Web Services',
      date: '2024',
      link: 'https://drive.google.com/file/d/1tONWm2GIPMjnUjuodmbt6KDGsm_PJh1p/view?usp=sharing',
      description: 'Advanced course on designing and implementing cloud architecture solutions on AWS.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    {
      id: 8,
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services',
      date: '2024',
      link: 'https://drive.google.com/file/d/1eKwohh3160RHp1hoVCTa4_rA4ys1p3TR/view?usp=sharing',
      description: 'Foundational understanding of AWS cloud services, security, and deployment best practices.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
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
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Certifications</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
            Here are the certifications I've earned to enhance my skills and stay updated 
            with the latest technologies in software development.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl border border-gray-medium shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
              
              <div className="relative p-6">
                
                {/* Header with Logo and Link */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center mr-3">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-8 h-8 rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-[#0099ff] font-semibold text-sm">{cert.issuer}</p>
                      <div className="flex items-center text-secondary/70 mt-1">
                        <Calendar size={12} className="mr-1" />
                        <span className="text-xs">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-light text-secondary hover:text-[#0099ff] hover:bg-[#0099ff]/10 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold text-dark mb-3 leading-tight">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-secondary text-sm mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* View Certificate Button */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2.5 bg-[#0099ff] text-white text-sm rounded-xl hover:bg-[#0077cc] transition-all duration-300 font-medium"
                  >
                    View Certificate
                    <ExternalLink size={14} className="ml-2" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gray-light rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-dark mb-6">Continuous Learning</h3>
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {certifications.length}
              </div>
              <div className="text-sm text-secondary uppercase tracking-wide">
                Certificates
              </div>
            </div>
            <div className="border-l border-r border-gray-medium">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">5</div>
              <div className="text-sm text-secondary uppercase tracking-wide">
                Platforms
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-secondary uppercase tracking-wide">
                Hours
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Certifications
