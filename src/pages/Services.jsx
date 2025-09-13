import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Services() {
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
  const services = [
    { 
      title: "Digital Marketing Strategy", 
      desc: "Comprehensive digital marketing strategies tailored for MENA markets, including market research, competitor analysis, and culturally-appropriate campaigns.",
      icon: "📱",
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "Bilingual Social Media", 
      desc: "Arabic and English social media management that respects cultural nuances while building authentic engagement across all platforms.",
      icon: "📸",
      color: "from-purple-500 to-purple-600"
    },
    { 
      title: "Localized Advertising", 
      desc: "Targeted advertising campaigns on Google, Facebook, Instagram, and local platforms with region-specific optimization and cultural sensitivity.",
      icon: "🎯",
      color: "from-green-500 to-green-600"
    },
    { 
      title: "Brand Identity Design", 
      desc: "Complete brand identity packages including logos, business cards, and marketing materials that resonate with both local and international audiences.",
      icon: "🎨",
      color: "from-orange-500 to-orange-600"
    },
    { 
      title: "Multilingual Content", 
      desc: "Professional content creation in Arabic and English, including website copy, blog posts, and marketing materials that maintain brand voice across languages.",
      icon: "✍️",
      color: "from-pink-500 to-pink-600"
    },
    { 
      title: "Local SEO & Web Development", 
      desc: "SEO optimization for Arabic and English keywords, plus responsive website development that works seamlessly across all devices and browsers in the region.",
      icon: "🔍",
      color: "from-indigo-500 to-indigo-600"
    },
  ]

  const content = {
    en: {
      title: "Our Services",
      subtitle: "Specialized digital marketing solutions designed specifically for businesses in the Middle East and North Africa region, combining global best practices with local market insights.",
      services: services,
      ctaTitle: "Ready to Get Started?",
      ctaSubtitle: "Let's discuss your project and create a customized strategy that delivers results in the MENA market.",
      ctaButton: "Contact Us Today"
    },
    ar: {
      title: "خدماتنا",
      subtitle: "حلول تسويق رقمي متخصصة مصممة خصيصاً للشركات في منطقة الشرق الأوسط وشمال أفريقيا، تجمع بين أفضل الممارسات العالمية ورؤى السوق المحلية.",
      services: [
        { 
          title: "استراتيجية التسويق الرقمي", 
          desc: "استراتيجيات تسويق رقمي شاملة مصممة لأسواق الشرق الأوسط وشمال أفريقيا، تشمل أبحاث السوق وتحليل المنافسين وحملات مناسبة ثقافياً.",
          icon: "📱",
          color: "from-blue-500 to-blue-600"
        },
        { 
          title: "وسائل التواصل ثنائية اللغة", 
          desc: "إدارة وسائل التواصل الاجتماعي بالعربية والإنجليزية مع احترام الفروق الثقافية وبناء تفاعل أصيل عبر جميع المنصات.",
          icon: "📸",
          color: "from-purple-500 to-purple-600"
        },
        { 
          title: "الإعلانات المحلية", 
          desc: "حملات إعلانية مستهدفة على جوجل وفيسبوك وإنستغرام والمنصات المحلية مع تحسين خاص بالمنطقة وحساسية ثقافية.",
          icon: "🎯",
          color: "from-green-500 to-green-600"
        },
        { 
          title: "تصميم الهوية التجارية", 
          desc: "حزم هوية تجارية كاملة تشمل الشعارات وبطاقات العمل والمواد التسويقية التي تتردد صدى مع الجماهير المحلية والدولية.",
          icon: "🎨",
          color: "from-orange-500 to-orange-600"
        },
        { 
          title: "المحتوى متعدد اللغات", 
          desc: "إنشاء محتوى احترافي بالعربية والإنجليزية، يشمل نصوص المواقع ومقالات المدونة والمواد التسويقية التي تحافظ على صوت العلامة التجارية عبر اللغات.",
          icon: "✍️",
          color: "from-pink-500 to-pink-600"
        },
        { 
          title: "SEO المحلي وتطوير المواقع", 
          desc: "تحسين محركات البحث للكلمات المفتاحية العربية والإنجليزية، بالإضافة إلى تطوير مواقع ويب متجاوبة تعمل بسلاسة عبر جميع الأجهزة والمتصفحات في المنطقة.",
          icon: "🔍",
          color: "from-indigo-500 to-indigo-600"
        }
      ],
      ctaTitle: "مستعد للبدء؟",
      ctaSubtitle: "دعنا نناقش مشروعك وننشئ استراتيجية مخصصة تحقق النتائج.",
      ctaButton: "تواصل معنا اليوم"
    }
  }

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyc-purple to-cyc-purple-light bg-clip-text text-transparent">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].services.map((service, index) => (
            <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-cyc-purple transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6">
                  <button className={`bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-cyc-purple to-cyc-purple-light rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">{content[language].ctaTitle}</h3>
          <p className="text-xl mb-8 text-blue-100">
            {content[language].ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="bg-cyc-yellow text-cyc-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              {content[language].ctaButton}
            </Link>
            <motion.a
              href="https://wa.me/201100539306"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>💬</span>
              {language === 'ar' ? 'تواصل عبر الواتساب' : 'WhatsApp Us'}
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
