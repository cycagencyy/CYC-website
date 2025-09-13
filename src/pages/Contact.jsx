import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../components/Toast'

function Contact() {
  const navigate = useNavigate()
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showSuccess, showError } = useToast()

  useEffect(() => {
    // Listen for language changes from navbar
    const handleLanguageChange = (e) => {
      setLanguage(e.detail.language)
    }
    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    console.log('Form submitted with data:', formData)

    try {
      // Try multiple approaches to ensure compatibility
      console.log('Attempting form submission...')
      
      // First try: FormData approach
      const formDataToSend = new FormData()
      formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone || '')
      formDataToSend.append('company', formData.company || '')
      formDataToSend.append('service', formData.service || '')
      formDataToSend.append('message', formData.message)
      formDataToSend.append('_subject', 'New Contact Form Submission - CYC Website')
      formDataToSend.append('_replyto', formData.email)
      formDataToSend.append('_next', window.location.origin + '/thank-you')
      
      console.log('Sending FormData to Formspree...')
      const response = await fetch('https://formspree.io/f/xkgvepgq', {
        method: 'POST',
        body: formDataToSend
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)
      
      if (response.ok) {
        console.log('Form submitted successfully!')
        showSuccess(language === 'en' ? 'Message sent successfully!' : 'تم إرسال الرسالة بنجاح!')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          navigate('/thank-you')
        }, 2000)
      } else {
        console.log('First attempt failed, trying JSON approach...')
        
        // Fallback: Try JSON approach
        const jsonData = {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || '',
          company: formData.company || '',
          service: formData.service || '',
          message: formData.message,
          _subject: 'New Contact Form Submission - CYC Website',
          _replyto: formData.email
        }
        
        const jsonResponse = await fetch('https://formspree.io/f/xkgvepgq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(jsonData)
        })
        
        if (jsonResponse.ok) {
          console.log('JSON submission successful!')
          showSuccess(language === 'en' ? 'Message sent successfully!' : 'تم إرسال الرسالة بنجاح!')
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
          })
          setTimeout(() => {
            navigate('/thank-you')
          }, 2000)
        } else {
          const errorText = await jsonResponse.text()
          console.error('Both attempts failed:', response.status, errorText)
          showError(language === 'en' ? 'Failed to send message. Please try again.' : 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.')
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      showError(language === 'en' ? 'Failed to send message. Please try again.' : 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.')
    } finally {
      setIsSubmitting(false)
    }
  }
  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Ready to transform your business in the MENA market? Let's discuss your project and how we can help you achieve your digital marketing goals.",
      formTitle: "Send us a Message",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      service: "Service Interested In",
      message: "Your Message",
      submit: "Send Message",
      submitting: "Sending...",
      successMessage: "Message sent successfully! Redirecting...",
      errorMessage: "Failed to send message. Please try again.",
      contactInfo: "Contact Information",
      address: "Cairo, Egypt",
      phoneNumber: "+20 110 053 9306",
      emailAddress: "support@cyc-agency.site",
      whyChoose: "Why Choose CYC?",
      reasons: [
        "Specialized expertise in MENA markets",
        "Bilingual team with cultural sensitivity",
        "Proven results with 75+ successful projects",
        "Personalized approach for each client"
      ]
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "مستعد لتحويل عملك في السوق العربي؟ دعنا نناقش مشروعك وكيف يمكننا مساعدتك في تحقيق أهداف التسويق الرقمي.",
      formTitle: "أرسل لنا رسالة",
      firstName: "الاسم الأول",
      lastName: "الاسم الأخير",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      company: "اسم الشركة",
      service: "الخدمة المهتم بها",
      message: "رسالتك",
      submit: "إرسال الرسالة",
      submitting: "جاري الإرسال...",
      successMessage: "تم إرسال الرسالة بنجاح! جاري التوجيه...",
      errorMessage: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      contactInfo: "معلومات التواصل",
      address: "القاهرة، مصر",
      phoneNumber: "+20 110 053 9306",
      emailAddress: "support@cyc-agency.site",
      whyChoose: "لماذا تختار CYC؟",
      reasons: [
        "خبرة متخصصة في أسواق الشرق الأوسط وشمال أفريقيا",
        "فريق ثنائي اللغة مع حساسية ثقافية",
        "نتائج مثبتة مع 75+ مشروع ناجح",
        "نهج شخصي لكل عميل"
      ]
    }
  }

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyc-purple to-cyc-purple-light bg-clip-text text-transparent">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{content[language].formTitle}</h3>
            
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{content[language].firstName}</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={content[language].firstName}
                    required
                    className="w-full p-3 md:p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-cyc-purple focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{content[language].lastName}</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder={content[language].lastName}
                    required
                    className="w-full p-3 md:p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-cyc-purple focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{content[language].email}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={content[language].email}
                  required
                  className="w-full p-3 md:p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-cyc-purple focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{content[language].phone}</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={content[language].phone}
                  className="w-full p-3 md:p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-cyc-purple focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{content[language].company}</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={content[language].company}
                  className="w-full p-3 md:p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-cyc-purple focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{content[language].service}</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-cyc-purple focus:border-transparent transition-all"
                >
                  <option value="">{language === 'en' ? 'Select a service' : 'اختر خدمة'}</option>
                  <option value="Digital Marketing">{language === 'en' ? 'Digital Marketing' : 'التسويق الرقمي'}</option>
                  <option value="Social Media Management">{language === 'en' ? 'Social Media Management' : 'إدارة وسائل التواصل'}</option>
                  <option value="Advertising">{language === 'en' ? 'Advertising' : 'الإعلانات'}</option>
                  <option value="Graphic Design">{language === 'en' ? 'Graphic Design' : 'التصميم الجرافيكي'}</option>
                  <option value="Content Creation">{language === 'en' ? 'Content Creation' : 'إنشاء المحتوى'}</option>
                  <option value="SEO Optimization">{language === 'en' ? 'SEO Optimization' : 'تحسين محركات البحث'}</option>
                  <option value="Other">{language === 'en' ? 'Other' : 'أخرى'}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{content[language].message}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={content[language].message}
                  rows="5"
                  required
                  className="w-full p-3 md:p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-cyc-purple focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyc-purple to-cyc-purple-light text-white py-3 md:py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? content[language].submitting : content[language].submit}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-cyc-purple to-cyc-purple-light rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-6">{content[language].contactInfo}</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{language === 'en' ? 'Email' : 'البريد الإلكتروني'}</p>
                    <p className="text-blue-100 text-sm md:text-base">{content[language].emailAddress}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{language === 'en' ? 'Phone' : 'الهاتف'}</p>
                    <p className="text-blue-100 text-sm md:text-base">{content[language].phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{language === 'en' ? 'Location' : 'الموقع'}</p>
                    <p className="text-blue-100 text-sm md:text-base">{content[language].address}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{language === 'en' ? 'WhatsApp' : 'واتساب'}</p>
                    <a 
                      href="https://wa.me/201100539306" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-100 text-sm md:text-base hover:text-white transition-colors"
                    >
                      +20 110 053 9306
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
              <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-800 dark:text-white">{content[language].whyChoose}</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {content[language].reasons.map((reason, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-sm md:text-base">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
