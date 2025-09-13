import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

function Sitemap() {
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
      title: "Sitemap",
      subtitle: "Find everything on our website",
      mainPages: "Main Pages",
      services: "Our Services",
      legal: "Legal Pages",
      contact: "Contact Information",
      lastUpdated: "Last Updated"
    },
    ar: {
      title: "خريطة الموقع",
      subtitle: "اعثر على كل شيء في موقعنا",
      mainPages: "الصفحات الرئيسية",
      services: "خدماتنا",
      legal: "الصفحات القانونية",
      contact: "معلومات الاتصال",
      lastUpdated: "آخر تحديث"
    }
  }

  const sitemapData = {
    mainPages: [
      { title: "Home", url: "/", description: "Digital Marketing Agency for MENA region" },
      { title: "About Us", url: "/about", description: "Learn about CYC Marketing team and mission" },
      { title: "Services", url: "/services", description: "Our comprehensive digital marketing services" },
      { title: "Portfolio", url: "/portfolio", description: "View our latest projects and client work" },
      { title: "Blog", url: "/blog", description: "Latest marketing tips and industry insights" },
      { title: "FAQ", url: "/faq", description: "Frequently asked questions about our services" },
      { title: "Contact", url: "/contact", description: "Get in touch with our marketing experts" }
    ],
    services: [
      { title: "Digital Marketing", description: "Comprehensive digital marketing strategies" },
      { title: "Social Media Management", description: "Professional social media management" },
      { title: "SEO Services", description: "Search engine optimization for better rankings" },
      { title: "Content Creation", description: "High-quality content for all platforms" },
      { title: "Web Design", description: "Modern and responsive website design" },
      { title: "Branding", description: "Complete brand identity and design" },
      { title: "PPC Advertising", description: "Pay-per-click advertising campaigns" },
      { title: "Email Marketing", description: "Effective email marketing campaigns" }
    ],
    legalPages: [
      { title: "Privacy Policy", url: "/privacy-policy", description: "How we protect your privacy" },
      { title: "Terms of Service", url: "/terms-of-service", description: "Terms and conditions" }
    ],
    contact: {
      phone: "+20-110-053-9306",
      email: "support@cyc-agency.site",
      address: "Cairo, Egypt",
      social: [
        { name: "Facebook", url: "https://www.facebook.com/cyc.agency1/" },
        { name: "Instagram", url: "https://www.instagram.com/cyc.vision" },
        { name: "LinkedIn", url: "https://linkedin.com/company/cyc-agency" },
        { name: "YouTube", url: "https://youtube.com/@cyc-agency" }
      ]
    }
  }

  const arabicContent = {
    mainPages: [
      { title: "الرئيسية", url: "/", description: "وكالة التسويق الرقمي لمنطقة الشرق الأوسط وشمال أفريقيا" },
      { title: "من نحن", url: "/about", description: "تعرف على فريق CYC Marketing ومهمتنا" },
      { title: "الخدمات", url: "/services", description: "خدماتنا الشاملة في التسويق الرقمي" },
      { title: "معرض الأعمال", url: "/portfolio", description: "شاهد أحدث مشاريعنا وأعمال العملاء" },
      { title: "المدونة", url: "/blog", description: "أحدث نصائح التسويق ورؤى الصناعة" },
      { title: "الأسئلة الشائعة", url: "/faq", description: "الأسئلة المتكررة حول خدماتنا" },
      { title: "تواصل معنا", url: "/contact", description: "تواصل مع خبراء التسويق لدينا" }
    ],
    services: [
      { title: "التسويق الرقمي", description: "استراتيجيات التسويق الرقمي الشاملة" },
      { title: "إدارة وسائل التواصل الاجتماعي", description: "إدارة احترافية لوسائل التواصل الاجتماعي" },
      { title: "خدمات تحسين محركات البحث", description: "تحسين محركات البحث لترتيب أفضل" },
      { title: "إنشاء المحتوى", description: "محتوى عالي الجودة لجميع المنصات" },
      { title: "تصميم المواقع", description: "تصميم مواقع حديثة ومتجاوبة" },
      { title: "الهوية البصرية", description: "هوية بصرية وتصميم شامل للعلامة التجارية" },
      { title: "الإعلانات المدفوعة", description: "حملات إعلانية مدفوعة فعالة" },
      { title: "التسويق عبر البريد الإلكتروني", description: "حملات تسويق عبر البريد الإلكتروني فعالة" }
    ],
    legalPages: [
      { title: "سياسة الخصوصية", url: "/privacy-policy", description: "كيف نحمي خصوصيتك" },
      { title: "شروط الخدمة", url: "/terms-of-service", description: "الشروط والأحكام" }
    ],
    contact: {
      phone: "+20-110-053-9306",
      email: "support@cyc-agency.site",
      address: "القاهرة، مصر",
      social: [
        { name: "فيسبوك", url: "https://www.facebook.com/cyc.agency1/" },
        { name: "إنستجرام", url: "https://www.instagram.com/cyc.vision" },
        { name: "لينكد إن", url: "https://linkedin.com/company/cyc-agency" },
        { name: "يوتيوب", url: "https://youtube.com/@cyc-agency" }
      ]
    }
  }

  const currentData = language === 'ar' ? arabicContent : sitemapData

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24">
      <SEOHead 
        title={language === 'ar' ? 'خريطة الموقع | CYC Marketing' : 'Sitemap | CYC Marketing'}
        description={language === 'ar' ? 'اعثر على جميع صفحات وخدمات CYC Marketing في مكان واحد' : 'Find all CYC Marketing pages and services in one place'}
        url="/sitemap"
        language={language}
      />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {content[language].title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Pages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              {content[language].mainPages}
            </h2>
            <div className="space-y-4">
              {currentData.mainPages.map((page, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={page.url}
                    className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-cyc-purple transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {page.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              {content[language].services}
            </h2>
            <div className="space-y-4">
              {currentData.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Legal Pages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              {content[language].legal}
            </h2>
            <div className="space-y-4">
              {currentData.legalPages.map((page, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <Link
                    to={page.url}
                    className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-cyc-purple transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {page.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              {content[language].contact}
            </h2>
            <div className="space-y-4">
              <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <h3 className="font-semibold text-gray-800 dark:text-white">Phone</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {currentData.contact.phone}
                </p>
              </div>
              <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {currentData.contact.email}
                </p>
              </div>
              <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <h3 className="font-semibold text-gray-800 dark:text-white">Address</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {currentData.contact.address}
                </p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Social Media</h3>
                <div className="flex flex-wrap gap-2">
                  {currentData.contact.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-cyc-purple text-white rounded-full text-sm hover:bg-cyc-purple-light transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400">
            {content[language].lastUpdated}: {new Date().toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US')}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Sitemap
