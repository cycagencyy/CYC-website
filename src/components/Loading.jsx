import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Loading() {
  const [language, setLanguage] = useState('en')
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    // Get initial language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en'
    setLanguage(savedLanguage)
    
    // Listen for language changes from navbar
    const handleLanguageChange = (e) => {
      setLanguage(e.detail.language)
      localStorage.setItem('language', e.detail.language)
    }
    window.addEventListener('languageChange', handleLanguageChange)
    
    // Simulate loading progress with steps - faster loading for mobile
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 50
        if (newProgress >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        
        // Update current step based on progress
        if (newProgress < 30) setCurrentStep(0)
        else if (newProgress < 60) setCurrentStep(1)
        else if (newProgress < 90) setCurrentStep(2)
        else setCurrentStep(3)
        
        return newProgress
      })
    }, 60) // أسرع للموبايل

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange)
      clearInterval(progressInterval)
    }
  }, [])

  const loadingText = {
    en: {
      loading: "Loading...",
      preparing: "Preparing your experience...",
      almost: "Almost ready...",
      welcome: "Welcome to CYC Marketing!"
    },
    ar: {
      loading: "جاري التحميل...",
      preparing: "نحضر تجربتك...",
      almost: "تقريباً جاهز...",
      welcome: "مرحباً بك في CYC Marketing!"
    }
  }

  const loadingSteps = {
    en: [
      "Initializing...",
      "Loading assets...",
      "Preparing interface...",
      "Almost ready..."
    ],
    ar: [
      "جاري التهيئة...",
      "تحميل الملفات...",
      "تحضير الواجهة...",
      "تقريباً جاهز..."
    ]
  }

  const getLoadingMessage = () => {
    return loadingText[language][Object.keys(loadingText[language])[currentStep]]
  }

  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-cyc-purple via-cyc-purple-light to-cyc-yellow flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Elements - أخف للموبايل */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="text-center text-white relative z-10">
        {/* Hero Logo Animation */}
        <div className="relative mx-auto mb-12 w-48 h-48">
          {/* Outer rotating ring - أخف للموبايل */}
          <motion.div
            className="absolute inset-0 border-2 border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {/* 4 small dots around the ring - تقليل من 8 إلى 4 */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyc-yellow rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                  transform: `rotate(${i * 90}deg) translateX(96px) translateY(-4px)`
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>

          {/* Inner rotating ring - أخف للموبايل */}
          <motion.div
            className="absolute inset-4 border border-white/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            {/* 2 smaller dots around the inner ring - تقليل من 4 إلى 2 */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-cyc-yellow/60 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                  transform: `rotate(${i * 180}deg) translateX(80px) translateY(-3px)`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>

          {/* Main logo */}
          <motion.img
            src="https://i.ibb.co/6Jv05tLN/CYC-GRAAH-LOGO-removebg-preview.png"
            alt="CYC Marketing Logo"
            className="absolute inset-0 w-full h-full object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Glow effect - أخف للموبايل */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyc-yellow/10 rounded-full blur-lg"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {getLoadingMessage()}
        </motion.h1>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-4">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-cyc-yellow to-white h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p
            className="text-sm mt-2 opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {Math.round(progress)}%
          </motion.p>
        </div>

        {/* Loading Steps */}
        <motion.div
          className="flex justify-center space-x-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {loadingSteps[language].map((step, index) => (
            <motion.div
              key={index}
              className={`flex items-center space-x-2 ${
                index <= currentStep ? 'opacity-100' : 'opacity-40'
              }`}
              animate={{
                scale: index === currentStep ? 1.1 : 1,
                opacity: index <= currentStep ? 1 : 0.4
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  index <= currentStep ? 'bg-cyc-yellow' : 'bg-white/40'
                }`}
                animate={{
                  scale: index === currentStep ? [1, 1.2, 1] : 1
                }}
                transition={{
                  duration: 1,
                  repeat: index === currentStep ? Infinity : 0
                }}
              />
              <span className="text-xs">{step}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Loading Dots - أخف للموبايل */}
        <motion.div
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </motion.div>

        {/* Company Tagline - أخف للموبايل */}
        <motion.p
          className="text-sm opacity-60 mt-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {language === 'en' 
            ? "Transforming attention into revenue across the MENA region" 
            : "نحول الانتباه إلى إيرادات عبر منطقة الشرق الأوسط وشمال أفريقيا"
          }
        </motion.p>

        {/* Floating Particles - معطلة للموبايل */}
        {typeof window !== 'undefined' && window.innerWidth > 768 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(0)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0, 0.15, 0],
                  scale: [0, 0.4, 0]
                }}
                transition={{
                  duration: 0.8 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random(),
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Loading
