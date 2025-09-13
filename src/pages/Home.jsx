import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ParallaxSection, FloatingElements, StaggeredContainer, StaggeredItem, MagneticHover, AnimatedGradientText } from '../components/ParallaxSection'
import SEOHead, { seoConfigs } from '../components/SEOHead'
import LazyImage from '../components/LazyImage'

function Home() {
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
      title: "Turn <span class='text-cyc-yellow'>Attention</span> into <span class='text-cyc-yellow'>Revenue</span>",
      subtitle: "We're a full-service digital marketing agency specializing in helping businesses in the Middle East and North Africa region achieve their online goals through strategic marketing, creative design, and data-driven results.",
      getStarted: "Start Your Project",
      learnMore: "View Our Work",
      whyChoose: "Why Choose CYC Marketing?",
      features: [
        {
          title: "Regional Expertise",
          description: "Deep understanding of MENA markets, cultural nuances, and consumer behavior patterns."
        },
        {
          title: "Bilingual Capabilities",
          description: "Native Arabic and English content creation for authentic local and international reach."
        },
        {
          title: "Proven ROI",
          description: "Average 300% increase in online engagement and 150% boost in lead generation for our clients."
        }
      ]
    },
    ar: {
      title: "حول <span class='text-cyc-yellow'>الانتباه</span> إلى <span class='text-cyc-yellow'>إيرادات</span>",
      subtitle: "نحن وكالة تسويق رقمي متكاملة متخصصة في مساعدة الشركات في منطقة الشرق الأوسط وشمال أفريقيا لتحقيق أهدافها الرقمية من خلال التسويق الاستراتيجي والتصميم الإبداعي والنتائج المدفوعة بالبيانات.",
      getStarted: "ابدأ مشروعك",
      learnMore: "شاهد أعمالنا",
      whyChoose: "لماذا تختار CYC Marketing؟",
      features: [
        {
          title: "الخبرة الإقليمية",
          description: "فهم عميق لأسواق الشرق الأوسط وشمال أفريقيا والثقافات المحلية وأنماط سلوك المستهلكين."
        },
        {
          title: "القدرات ثنائية اللغة",
          description: "إنشاء محتوى أصلي بالعربية والإنجليزية للوصول المحلي والدولي الأصيل."
        },
        {
          title: "عائد الاستثمار المثبت",
          description: "متوسط زيادة 300% في التفاعل الرقمي و150% في توليد العملاء المحتملين لعملائنا."
        }
      ]
    }
  }
  return (
    <div className="bg-white dark:bg-gray-900">
      <SEOHead 
        {...seoConfigs.home[language]}
        url="/"
        language={language}
      />
      {/* Professional Hero Section */}
      <section id="hero" className="min-h-screen bg-gradient-to-br from-cyc-purple via-cyc-purple-light to-cyc-purple-dark text-white relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 25%, #A855F7 50%, #C084FC 75%, #DDD6FE 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}>
        {/* Professional Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="https://i.postimg.cc/gXy58Ymz/cyc-logo.png" 
            alt="CYC Marketing Logo Watermark" 
            className="w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] min-w-[300px] min-h-[300px] opacity-[0.15]"
            style={{
              filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%) blur(1px)'
            }}
          />
        </div>
        
        {/* Professional Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric shapes with professional styling */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyc-yellow/40 to-cyc-yellow/20 rounded-xl opacity-60"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-white/30 rounded-2xl opacity-50"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -90, 0],
              scale: [1, 0.95, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-12 h-12 bg-cyc-yellow/30 rounded-lg opacity-60"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              rotate: [0, 45, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-8 h-8 bg-white/25 rounded-full opacity-40"
            animate={{
              y: [0, 12, 0],
              x: [0, -8, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Professional gradient overlays */}
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
        
        <div className="w-full text-center relative z-10 flex flex-col justify-center min-h-screen px-8 pt-24">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Professional Logo with Rotating Ring Effect */}
            <div className="relative mx-auto mb-12 w-40 h-40 md:w-48 md:h-48">
              {/* Rotating ring around logo */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-full h-full border-2 border-white/20 rounded-full relative">
                  {/* Rotating dots around the ring */}
                  <div className="absolute -top-1 left-1/2 w-2 h-2 bg-cyc-yellow rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-cyc-yellow rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute -left-1 top-1/2 w-2 h-2 bg-cyc-yellow rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute -right-1 top-1/2 w-2 h-2 bg-cyc-yellow rounded-full transform -translate-y-1/2"></div>
                  
                  {/* Diagonal dots */}
                  <div className="absolute top-1/4 -right-1 w-2 h-2 bg-white/60 rounded-full transform translate-x-1/2"></div>
                  <div className="absolute top-1/4 -left-1 w-2 h-2 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-1/4 -right-1 w-2 h-2 bg-white/60 rounded-full transform translate-x-1/2"></div>
                  <div className="absolute bottom-1/4 -left-1 w-2 h-2 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                </div>
              </motion.div>
              
              {/* Inner rotating ring */}
              <motion.div
                className="absolute inset-4 w-full h-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-full h-full border border-white/10 rounded-full relative">
                  {/* Smaller rotating elements */}
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-cyc-yellow/80 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-cyc-yellow/80 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute left-0 top-1/2 w-1 h-1 bg-cyc-yellow/80 rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute right-0 top-1/2 w-1 h-1 bg-cyc-yellow/80 rounded-full transform -translate-y-1/2"></div>
                </div>
              </motion.div>
              
              {/* Main hero logo - no border */}
              <img 
                src="https://i.postimg.cc/gXy58Ymz/cyc-logo.png" 
                alt="CYC Marketing Logo" 
                className="relative w-40 h-40 md:w-48 md:h-48 p-2"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%) drop-shadow(0 20px 40px rgba(255, 255, 255, 0.6)) drop-shadow(0 10px 20px rgba(255, 255, 255, 0.4)) drop-shadow(0 5px 10px rgba(255, 255, 255, 0.3))'
                }}
              />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-cyc-yellow/20 rounded-full blur-xl"></div>
            </div>
            <motion.h1 
              className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-center"
              dir={language === 'ar' ? 'rtl' : 'ltr'}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
            >
              {language === 'en' ? (
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Turn{' '}
                  <motion.span
                    className="relative inline-block"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    style={{
                      background: 'linear-gradient(135deg, #FACC15 0%, #FDE047 50%, #FEF3C7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 2px 4px rgba(250, 204, 21, 0.5))'
                    }}
                  >
                    Attention
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-cyc-yellow/40 to-cyc-yellow/20 rounded-full blur-sm"></span>
                  </motion.span>
                  {' '}into{' '}
                  <motion.span
                    className="relative inline-block"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    style={{
                      background: 'linear-gradient(135deg, #FACC15 0%, #FDE047 50%, #FEF3C7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 2px 4px rgba(250, 204, 21, 0.5))'
                    }}
                  >
                    Revenue
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-cyc-yellow/40 to-cyc-yellow/20 rounded-full blur-sm"></span>
                  </motion.span>
                </motion.span>
              ) : (
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  حول{' '}
                  <motion.span
                    className="relative inline-block text-cyc-yellow"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    style={{
                      background: 'linear-gradient(135deg, #FACC15 0%, #FDE047 50%, #FEF3C7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 2px 4px rgba(250, 204, 21, 0.5))'
                    }}
                  >
                    الانتباه
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-cyc-yellow/40 to-cyc-yellow/20 rounded-full blur-sm"></span>
                  </motion.span>
                  {' '}إلى{' '}
                  <motion.span
                    className="relative inline-block text-cyc-yellow"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    style={{
                      background: 'linear-gradient(135deg, #FACC15 0%, #FDE047 50%, #FEF3C7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 2px 4px rgba(250, 204, 21, 0.5))'
                    }}
                  >
                    إيرادات
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-cyc-yellow/40 to-cyc-yellow/20 rounded-full blur-sm"></span>
                  </motion.span>
                </motion.span>
              )}
            </motion.h1>
          </motion.div>
          <motion.p 
            className="hero-subtitle text-xl md:text-2xl mb-10 text-white/95 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              color: '#ffffff',
              fontWeight: '400'
            }}
          >
            {language === 'en' 
              ? "Transform your business with cutting-edge digital marketing strategies that drive real results. We help brands grow, engage, and convert like never before."
              : "حول عملك باستراتيجيات التسويق الرقمي المتطورة التي تحقق نتائج حقيقية. نساعد العلامات التجارية على النمو والتفاعل والتحويل كما لم يحدث من قبل."
            }
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <Link to="/contact">
              <motion.div 
                className="btn bg-gradient-to-r from-cyc-yellow via-yellow-400 to-cyc-yellow text-cyc-purple px-12 py-6 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group border-2 border-white/20"
                whileHover={{ 
                  scale: 1.08,
                  y: -3,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, #FACC15 0%, #FDE047 50%, #FEF3C7 100%)',
                  boxShadow: '0 20px 40px rgba(250, 204, 21, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)'
                }}
              >
                <span className="relative z-10 font-extrabold tracking-wide">
                  {language === 'en' ? 'Start Your Project' : 'ابدأ مشروعك'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </Link>
            <Link to="/services">
              <motion.div 
                className="btn border-2 border-white/60 text-white px-12 py-6 rounded-3xl font-bold text-xl hover:bg-white/10 hover:border-white/90 transition-all duration-500 relative overflow-hidden group backdrop-blur-md"
              whileHover={{ 
                scale: 1.08,
                y: -3,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
                <span className="relative z-10 font-extrabold tracking-wide">
                  {language === 'en' ? 'View Our Work' : 'شاهد أعمالنا'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </Link>
          </motion.div>
          
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "75+",
                label: language === 'en' ? 'Successful Projects' : 'مشروع ناجح',
                icon: "🚀"
              },
              {
                number: "95%",
                label: language === 'en' ? 'Client Retention Rate' : 'معدل الاحتفاظ بالعملاء',
                icon: "⭐"
              },
              {
                number: "3+",
                label: language === 'en' ? 'Years in MENA Market' : 'سنوات في السوق العربي',
                icon: "🏆"
              },
              {
                number: "15+",
                label: language === 'en' ? 'Industries Served' : 'قطاع خدمناه',
                icon: "💼"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-cyc-purple mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Partners Marquee */}
      <section id="partners" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {language === 'en' ? 'Trusted by Growing Businesses' : 'موثوق من الشركات النامية'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'en' ? 'From startups to established companies, we help businesses across MENA achieve their digital transformation goals' : 'من الشركات الناشئة إلى الشركات الراسخة، نساعد الشركات عبر الشرق الأوسط وشمال أفريقيا على تحقيق أهداف التحول الرقمي'}
            </p>
          </motion.div>
          {/* Desktop: Animated Marquee */}
          <div className="hidden md:block relative overflow-hidden">
            <div className="flex animate-marquee hover:pause-marquee">
              {[
                { name: 'E-Commerce Store', color: '#4C1D95' },
                { name: 'Restaurant Chain', color: '#FACC15' },
                { name: 'Tech Startup', color: '#7C3AED' },
                { name: 'Fashion Brand', color: '#10B981' },
                { name: 'Healthcare Clinic', color: '#F59E0B' },
                { name: 'Real Estate', color: '#EF4444' }
              ].map((brand, index) => (
                <div key={index} className="flex-shrink-0 mx-12 group">
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <div 
                      className="w-24 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: brand.color }}
                    >
                      {brand.name}
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { name: 'E-Commerce Store', color: '#4C1D95' },
                { name: 'Restaurant Chain', color: '#FACC15' },
                { name: 'Tech Startup', color: '#7C3AED' },
                { name: 'Fashion Brand', color: '#10B981' },
                { name: 'Healthcare Clinic', color: '#F59E0B' },
                { name: 'Real Estate', color: '#EF4444' }
              ].map((brand, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 mx-12 group">
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <div 
                      className="w-24 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: brand.color }}
                    >
                      {brand.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Scrollable Grid */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-4 px-4">
              {[
                { name: 'E-Commerce Store', color: '#4C1D95' },
                { name: 'Restaurant Chain', color: '#FACC15' },
                { name: 'Tech Startup', color: '#7C3AED' },
                { name: 'Fashion Brand', color: '#10B981' },
                { name: 'Healthcare Clinic', color: '#F59E0B' },
                { name: 'Real Estate', color: '#EF4444' }
              ].map((brand, index) => (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div 
                      className="w-full h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                      style={{ backgroundColor: brand.color }}
                    >
                      {brand.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-8">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {content[language].whyChoose}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{content[language].features[0].title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{content[language].features[0].description}</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-2xl">💡</span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{content[language].features[1].title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{content[language].features[1].description}</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-2xl">📈</span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{content[language].features[2].title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{content[language].features[2].description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Rail */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              {language === 'en' ? 'Featured Projects' : 'المشاريع المميزة'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === 'en' ? 'Discover our latest work and success stories' : 'اكتشف أحدث أعمالنا وقصص النجاح'}
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
              {[
                {
                  title: language === 'en' ? 'Restaurant Digital Menu' : 'قائمة طعام رقمية',
                  description: language === 'en' ? 'QR code menu system with 40% increase in order value' : 'نظام قائمة طعام بالكود QR مع زيادة 40% في قيمة الطلبات',
                  image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                  category: language === 'en' ? 'Digital Solutions' : 'الحلول الرقمية'
                },
                {
                  title: language === 'en' ? 'E-commerce Store Launch' : 'إطلاق متجر إلكتروني',
                  description: language === 'en' ? 'Complete online store with 200% sales increase in first quarter' : 'متجر إلكتروني كامل مع زيادة 200% في المبيعات في الربع الأول',
                  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                  category: language === 'en' ? 'E-commerce' : 'التجارة الإلكترونية'
                },
                {
                  title: language === 'en' ? 'Healthcare Website' : 'موقع طبي',
                  description: language === 'en' ? 'Patient portal with appointment booking and 60% reduction in phone calls' : 'بوابة المرضى مع حجز المواعيد وتقليل 60% في المكالمات الهاتفية',
                  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                  category: language === 'en' ? 'Healthcare' : 'الرعاية الصحية'
                },
                {
                  title: language === 'en' ? 'Social Media Growth' : 'نمو وسائل التواصل',
                  description: language === 'en' ? 'Instagram strategy with 500% follower growth in 6 months' : 'استراتيجية إنستغرام مع نمو 500% في المتابعين خلال 6 أشهر',
                  image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                  category: language === 'en' ? 'Social Media' : 'وسائل التواصل'
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyc-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <button className="text-cyc-purple font-semibold hover:text-cyc-purple-dark transition-colors">
                        {language === 'en' ? 'View Project →' : 'عرض المشروع ←'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="w-full px-8">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {language === 'en' ? 'What Our Clients Say' : 'ماذا يقول عملاؤنا'}
            </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-50 p-6 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{language === 'en' ? 'Mohamed Al-Rashid' : 'محمد الراشد'}</h4>
                  <p className="text-gray-600 text-sm">{language === 'en' ? 'Owner, Al-Rashid Restaurant' : 'مالك مطعم الراشد'}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{language === 'en' ? 'The QR menu system CYC created for us increased our average order value by 40%. Customers love the convenience!' : 'نظام قائمة الطعام بالكود QR الذي أنشأته CYC لنا زاد من متوسط قيمة الطلب بنسبة 40%. العملاء يحبون الراحة!'}"</p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  F
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{language === 'en' ? 'Fatima Al-Zahra' : 'فاطمة الزهراء'}</h4>
                  <p className="text-gray-600 text-sm">{language === 'en' ? 'Founder, Zahra Fashion' : 'مؤسسة دار الزهراء للموضة'}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{language === 'en' ? 'Our Instagram followers grew from 2K to 10K in just 6 months thanks to CYC\'s social media strategy. The engagement is incredible!' : 'متابعو إنستغرام نما من 2 ألف إلى 10 آلاف في 6 أشهر فقط بفضل استراتيجية وسائل التواصل لـ CYC. التفاعل مذهل!'}"</p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  D
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{language === 'en' ? 'Dr. Khalid Al-Mansouri' : 'د. خالد المنصوري'}</h4>
                  <p className="text-gray-600 text-sm">{language === 'en' ? 'Director, Al-Mansouri Medical Center' : 'مدير مركز المنصوري الطبي'}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{language === 'en' ? 'The patient portal CYC developed reduced our phone calls by 60% and improved appointment scheduling efficiency. Highly recommended!' : 'البوابة الإلكترونية للمرضى التي طورتها CYC قللت مكالماتنا الهاتفية بنسبة 60% وحسنت كفاءة جدولة المواعيد. أنصح بها بشدة!'}"</p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              {language === 'en' ? 'Our Process' : 'عملية العمل'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === 'en' ? 'How we bring your vision to life' : 'كيف نحول رؤيتك إلى واقع'}
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* SVG Connector Line */}
            <svg className="absolute top-16 left-0 w-full h-2 hidden lg:block" viewBox="0 0 800 2">
              <motion.line
                x1="0"
                y1="1"
                x2="800"
                y2="1"
                stroke="#4C1D95"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </svg>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: 1,
                  title: language === 'en' ? 'Discovery' : 'الاكتشاف',
                  description: language === 'en' ? 'We understand your goals and challenges' : 'نفهم أهدافك وتحدياتك',
                  icon: '🔍'
                },
                {
                  number: 2,
                  title: language === 'en' ? 'Strategy' : 'الاستراتيجية',
                  description: language === 'en' ? 'We create a tailored plan for success' : 'نضع خطة مخصصة للنجاح',
                  icon: '📋'
                },
                {
                  number: 3,
                  title: language === 'en' ? 'Execution' : 'التنفيذ',
                  description: language === 'en' ? 'We bring your vision to life' : 'نحول رؤيتك إلى واقع',
                  icon: '⚡'
                },
                {
                  number: 4,
                  title: language === 'en' ? 'Growth' : 'النمو',
                  description: language === 'en' ? 'We optimize and scale your success' : 'نحسن ونوسع نجاحك',
                  icon: '📈'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-16 h-16 bg-cyc-purple text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: 150,
                suffix: '+',
                label: language === 'en' ? 'Projects Completed' : 'مشروع مكتمل',
                color: 'text-cyc-purple'
              },
              {
                number: 98,
                suffix: '%',
                label: language === 'en' ? 'Client Satisfaction' : 'رضا العملاء',
                color: 'text-green-600'
              },
              {
                number: 5,
                suffix: '+',
                label: language === 'en' ? 'Years Experience' : 'سنوات خبرة',
                color: 'text-cyc-yellow'
              },
              {
                number: 24,
                suffix: '/7',
                label: language === 'en' ? 'Support Available' : 'دعم متاح',
                color: 'text-blue-600'
              }
            ].map((kpi, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${kpi.color}`}
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {kpi.number}
                  </motion.span>
                  <span className="text-2xl md:text-3xl">{kpi.suffix}</span>
                </motion.div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {kpi.label}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-200 dark:bg-gray-700"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'en' ? 'Follow Our Journey' : 'تابع رحلتنا'}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {language === 'en' ? 'Stay connected with our latest projects, insights, and success stories.' : 'ابق على تواصل مع أحدث مشاريعنا ورؤانا وقصص النجاح.'}
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://www.facebook.com/cyc.agency1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/cyc.vision?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/company/cyc-agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 bg-gradient-to-r from-cyc-purple to-cyc-purple-light text-white">
        <div className="w-full px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'en' ? 'Ready to Transform Your Business?' : 'مستعد لتحويل عملك؟'}
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {language === 'en' ? 'Join 75+ successful businesses that trust CYC Marketing for their digital growth.' : 'انضم إلى 75+ شركة ناجحة تثق في CYC Marketing لنموها الرقمي.'}
          </motion.p>
          <Link to="/contact">
            <motion.div 
              className="bg-gradient-to-r from-cyc-yellow via-yellow-400 to-cyc-yellow text-cyc-purple px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:via-yellow-300 hover:to-yellow-300 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? 'Start Your Project' : 'ابدأ مشروعك'}
            </motion.div>
          </Link>
        </div>
    </section>
    </div>
  )
}

export default Home
