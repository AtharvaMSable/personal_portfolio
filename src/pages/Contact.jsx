import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Shield, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [sentCode, setSentCode] = useState('')
  const [isVerified, setIsVerified] = useState(false)
  const [showVerification, setShowVerification] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Reset verification if email changes
    if (e.target.name === 'email') {
      setIsVerified(false)
      setShowVerification(false)
      setVerificationCode('')
      setSentCode('')
    }
  }

  // Generate 6-digit verification code
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString()
  }

  // Send verification email to USER'S email (not yours)
  const sendVerificationEmail = async () => {
    if (!formData.email) {
      alert('Please enter your email address first')
      return
    }

    setIsSubmitting(true)
    const code = generateVerificationCode()
    setSentCode(code)

    try {
      // Send verification code to the USER'S email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_VERIFICATION_TEMPLATE, // Verification template
        {
          from_name: 'Atharva Portfolio',
          from_email: 'noreply@portfolio.com',
          to_email: formData.email, // This goes to USER'S email (xyz@gmail.com)
          to_name: formData.name || 'User',
          subject: 'Verify Your Email - Portfolio Contact',
          message: `Hi ${formData.name || 'there'},\n\nYour verification code is: ${code}\n\nThis code will expire in 10 minutes.\n\nIf you didn't request this, please ignore this email.\n\nBest regards,\nAtharva`,
          verification_code: code
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setShowVerification(true)
      setSubmitStatus('verification-sent')
    } catch (error) {
      console.error('Verification email error:', error)
      setSubmitStatus('verification-error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Verify the entered code
  const verifyCode = () => {
    if (verificationCode === sentCode) {
      setIsVerified(true)
      setShowVerification(false)
      setSubmitStatus('verified')
    } else {
      setSubmitStatus('invalid-code')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check if email is verified
    if (!isVerified) {
      setSubmitStatus('not-verified')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Send the actual contact message to YOUR email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE, // Your main contact template
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: import.meta.env.VITE_CONTACT_EMAIL, // YOUR email
          subject: formData.title,
          message: formData.message,
          verified: '✅ Email Verified' // Mark as verified
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', title: '', message: '' })
      setIsVerified(false)
      setSentCode('')
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: import.meta.env.VITE_CONTACT_EMAIL,
      link: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/AtharvaMSable',
      link: 'https://github.com/AtharvaMSable'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/atharvasable',
      link: 'https://www.linkedin.com/in/atharvasable/'
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
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Get In Touch</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info Section */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Let's Connect</h2>
              <p className="text-secondary leading-relaxed mb-8">
                Feel free to reach out if you have any questions, want to collaborate on a project, 
                or just want to say hello. I'll do my best to get back to you as soon as possible!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group flex items-center p-6 bg-white border border-gray-medium rounded-2xl shadow-card hover:shadow-hover hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-light rounded-xl text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-dark group-hover:text-primary transition-colors">
                      {info.label}
                    </p>
                    <p className="text-secondary text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gray-light p-6 rounded-2xl">
              <h3 className="font-semibold text-dark mb-3">Response Time</h3>
              <p className="text-secondary text-sm leading-relaxed">
                I typically respond to emails within 24-48 hours. For urgent matters, 
                feel free to reach out on LinkedIn for a quicker response.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white border border-gray-medium rounded-2xl shadow-card p-8">
              <h3 className="text-2xl font-bold text-dark mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-light border border-gray-medium rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-dark placeholder-secondary/50"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                    Email Address
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-4 py-3 bg-gray-light border border-gray-medium rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-dark placeholder-secondary/50"
                      placeholder="your.email@example.com"
                    />
                    {!isVerified && formData.email && (
                      <button
                        type="button"
                        onClick={sendVerificationEmail}
                        disabled={isSubmitting}
                        className="px-4 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
                      >
                        <Shield size={16} />
                        Verify
                      </button>
                    )}
                    {isVerified && (
                      <div className="px-4 py-3 bg-green-100 text-green-600 rounded-xl flex items-center gap-2">
                        <CheckCircle size={16} />
                        Verified
                      </div>
                    )}
                  </div>
                </div>

                {/* Verification Code Input */}
                {showVerification && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-50 border border-blue-200 rounded-xl p-4"
                  >
                    <h4 className="font-semibold text-dark mb-2">Email Verification</h4>
                    <p className="text-sm text-secondary mb-3">
                      We've sent a 6-digit code to <strong>{formData.email}</strong>. Please check your inbox and enter the code:
                    </p>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        placeholder="Enter 6-digit code"
                        maxLength={6}
                        className="flex-1 px-4 py-2 border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                      />
                      <button
                        type="button"
                        onClick={verifyCode}
                        disabled={verificationCode.length !== 6}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
                      >
                        Verify
                      </button>
                    </div>
                  </motion.div>
                )}

                <div>
                  <label htmlFor="title" className="block text-sm font-semibold text-dark mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-light border border-gray-medium rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-dark placeholder-secondary/50"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-light border border-gray-medium rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-dark placeholder-secondary/50 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !isVerified}
                  className="w-full flex items-center justify-center px-6 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-card transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : !isVerified ? (
                    <>
                      <Shield className="mr-2" size={18} />
                      Verify Email First
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-accent/10 border border-accent/20 rounded-xl text-accent text-center font-medium"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-center font-medium"
                  >
                    ✗ Failed to send message. Please try again or contact me directly.
                  </motion.div>
                )}
                {submitStatus === 'verification-sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-600 text-center font-medium"
                  >
                    ✓ Verification code sent to {formData.email}! Check your inbox.
                  </motion.div>
                )}
                {submitStatus === 'verified' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-600 text-center font-medium"
                  >
                    ✓ Email verified! You can now send your message.
                  </motion.div>
                )}
                {submitStatus === 'invalid-code' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-center font-medium"
                  >
                    ✗ Invalid verification code. Please try again.
                  </motion.div>
                )}
                {submitStatus === 'not-verified' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-600 text-center font-medium"
                  >
                    ⚠ Please verify your email address before sending.
                  </motion.div>
                )}
                {submitStatus === 'verification-error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-center font-medium"
                  >
                    ✗ Failed to send verification email. Please try again.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
