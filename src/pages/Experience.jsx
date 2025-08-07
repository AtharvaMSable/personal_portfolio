import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Users } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Salesforce Platform Developer I',
      company: 'Last Mile Program',
      collaboration: 'In collaboration with TCS & Salesforce',
      location: 'Remote',
      duration: 'Aug 2025 – Present',
      status: 'Ongoing',
      type: 'Training Program',
      description: 'Selected for a prestigious 12-week skilling program designed to build project-ready talent aligned with industry expectations.',
      achievements: [
        'Completing 120+ hours of structured training in Salesforce development, including Apex, Lightning Web Components (LWC), and real-world platform implementations',
        'Actively working on capstone projects and guided assessments based on real client scenarios',
        'Receiving direct mentorship from TCS experts and participating in certification prep, mock interviews, and employability enhancement modules',
        'Leveraging a blended learning model: live virtual training, self-paced content, and hands-on project mentoring'
      ],
      skills: ['Salesforce', 'Apex', 'Lightning Web Components', 'Platform Development', 'Project Management']
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
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Experience</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
            My professional journey and training experiences in software development and technology.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-medium opacity-30"></div>
              )}
              
              {/* Experience Card */}
              <div className="flex items-start gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-card">
                  <Award className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-grow bg-white border border-gray-medium rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300">
                  
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-dark">{exp.title}</h2>
                      {exp.status && (
                        <span className="px-3 py-1 bg-accent/10 text-accent font-medium text-sm rounded-full">
                          {exp.status}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary mb-1">{exp.company}</h3>
                    {exp.collaboration && (
                      <p className="text-secondary font-medium mb-3">{exp.collaboration}</p>
                    )}
                    
                    <div className="flex flex-wrap items-center gap-4 text-secondary text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-secondary leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-secondary">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-light text-secondary text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Experience