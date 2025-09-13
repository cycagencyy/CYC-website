import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ThankYou() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  useEffect(() => {
    // Listen for language changes from navbar
    const handleLanguageChange = (e) => {
      setLanguage(e.detail.language)
    }
    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  const content = {
    en: {
      title: "Thank You!",
      subtitle: "Your message has been sent successfully",
      description: "We've received your inquiry and our team will get back to you within 24 hours. We're excited to help you grow your business!",
      nextSteps: "What happens next?",
      steps: [
        {
          icon: "📧",
          title: "Email Confirmation",
          description: "You'll receive a confirmation email with your inquiry details"
        },
        {
          icon: "👥",
          title: "Team Review",
          description: "Our experts will review your requirements and prepare a customized proposal"
        },
        {
          icon: "📞",
          title: "Personal Contact",
          description: "We'll contact you within 24 hours to discuss your project in detail"
        },
        {
          icon: "🚀",
          title: "Project Launch",
          description: "Once we agree on the scope, we'll start working on your project immediately"
        }
      ],
      backHome: "Back to Home",
      viewPortfolio: "View Our Portfolio",
      contactAgain: "Send Another Message",
      followUs: "Follow Us",
      socialMedia: "Stay connected with us on social media for the latest updates and insights."
    },
    ar: {
      title: "شكراً لك!",
      subtitle: "تم إرسال رسالتك بنجاح",
      description: "لقد تلقينا استفسارك وسيعود فريقنا إليك خلال 24 ساعة. نحن متحمسون لمساعدتك في نمو عملك!",
      nextSteps: "ماذا يحدث بعد ذلك؟",
      steps: [
        {
          icon: "📧",
          title: "تأكيد البريد الإلكتروني",
          description: "ستتلقى رسالة تأكيد بالبريد الإلكتروني مع تفاصيل استفسارك"
        },
        {
          icon: "👥",
          title: "مراجعة الفريق",
          description: "سيقوم خبراؤنا بمراجعة متطلباتك وإعداد عرض مخصص"
        },
        {
          icon: "📞",
          title: "التواصل الشخصي",
          description: "سنتواصل معك خلال 24 ساعة لمناقشة مشروعك بالتفصيل"
        },
        {
          icon: "🚀",
          title: "إطلاق المشروع",
          description: "بمجرد الاتفاق على النطاق، سنبدأ العمل على مشروعك فوراً"
        }
      ],
      backHome: "العودة للصفحة الرئيسية",
      viewPortfolio: "عرض معرض أعمالنا",
      contactAgain: "إرسال رسالة أخرى",
      followUs: "تابعنا",
      socialMedia: "ابق على تواصل معنا على وسائل التواصل الاجتماعي للحصول على أحدث التحديثات والرؤى."
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyc-purple via-cyc-purple-light to-cyc-purple-dark text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-cyc-yellow/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-cyc-yellow/30 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="text-center relative z-10 max-w-6xl mx-auto px-8">
        {/* Success Animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 bg-cyc-yellow rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.span
              className="text-6xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              ✅
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content[language].title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl mb-8 text-white/90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content[language].subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg mb-12 text-white/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {content[language].description}
        </motion.p>

        {/* Next Steps */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8">
            {content[language].nextSteps}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content[language].steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-white/80 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="bg-gradient-to-r from-cyc-yellow via-yellow-400 to-cyc-yellow text-cyc-purple px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 inline-block"
            >
              {content[language].backHome}
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/portfolio"
              className="border-2 border-white/60 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white/10 hover:border-white/90 transition-all duration-500 inline-block backdrop-blur-md"
            >
              {content[language].viewPortfolio}
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="border-2 border-white/60 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white/10 hover:border-white/90 transition-all duration-500 inline-block backdrop-blur-md"
            >
              {content[language].contactAgain}
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h4 className="text-xl font-semibold mb-4">{content[language].followUs}</h4>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            {content[language].socialMedia}
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'Facebook', icon: '📘', color: 'hover:text-blue-400' },
              { name: 'Instagram', icon: '📷', color: 'hover:text-pink-400' },
              { name: 'LinkedIn', icon: '💼', color: 'hover:text-blue-300' },
              { name: 'Twitter', icon: '🐦', color: 'hover:text-blue-500' }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href="#"
                className={`text-3xl transition-colors duration-300 ${social.color}`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-cyc-yellow/15 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  )
}

export default ThankYou
