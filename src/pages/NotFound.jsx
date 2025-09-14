import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function NotFound() {
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
      title: "404 - Page Not Found",
      subtitle: "Oops! The page you're looking for doesn't exist.",
      description: "The page you're trying to access might have been moved, deleted, or you might have entered the wrong URL.",
      suggestions: [
        "Check the URL for typos",
        "Go back to the homepage",
        "Browse our services",
        "Contact us for help"
      ],
      backHome: "Back to Home",
      contactUs: "Contact Us",
      browseServices: "Browse Services"
    },
    ar: {
      title: "404 - الصفحة غير موجودة",
      subtitle: "عذراً! الصفحة التي تبحث عنها غير موجودة.",
      description: "الصفحة التي تحاول الوصول إليها قد تكون تم نقلها أو حذفها، أو ربما أدخلت رابطاً خاطئاً.",
      suggestions: [
        "تحقق من الرابط للتأكد من عدم وجود أخطاء إملائية",
        "العودة إلى الصفحة الرئيسية",
        "تصفح خدماتنا",
        "تواصل معنا للمساعدة"
      ],
      backHome: "العودة للصفحة الرئيسية",
      contactUs: "تواصل معنا",
      browseServices: "تصفح الخدمات"
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

      <div className="text-center relative z-10 max-w-4xl mx-auto px-8">
        {/* 404 Animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-9xl md:text-[12rem] font-bold mb-4"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            404
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
          className="text-lg mb-12 text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {content[language].description}
        </motion.p>

        {/* Suggestions */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-6">
            {language === 'en' ? 'Here are some suggestions:' : 'إليك بعض الاقتراحات:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {content[language].suggestions.map((suggestion, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="w-2 h-2 bg-cyc-yellow rounded-full flex-shrink-0"></div>
                <span className="text-white/90">{suggestion}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="bg-gradient-to-r from-cyc-yellow via-yellow-400 to-cyc-yellow text-cyc-purple px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 inline-block"
            >
              {content[language].backHome}
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="border-2 border-white/60 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 hover:border-white/90 transition-all duration-500 inline-block backdrop-blur-md"
            >
              {content[language].browseServices}
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="border-2 border-white/60 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 hover:border-white/90 transition-all duration-500 inline-block backdrop-blur-md"
            >
              {content[language].contactUs}
            </Link>
          </motion.div>
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

export default NotFound







