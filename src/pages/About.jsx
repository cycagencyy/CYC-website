import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { seoConfigs } from '../components/SEOHead'

function About() {
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
      title: "About <span class='text-cyc-yellow'>CYC Marketing</span>",
      subtitle: "We're a specialized digital marketing agency focused on helping businesses in the Middle East and North Africa region achieve their online potential through culturally-aware strategies and bilingual expertise.",
      stats: [
        { number: "75+", label: "Successful Projects" },
        { number: "45+", label: "Happy Clients" },
        { number: "3+", label: "Years in MENA Market" },
        { number: "15+", label: "Industries Served" }
      ],
      team: [
        { name: "Aly Ismail", role: "CO & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { name: "Mohammed Hamdy", role: "Digital Marketing Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { name: "Mohammed Tarek", role: "Graphic Designer", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" }
      ],
      ourStory: "Our Story",
      storyText: "Founded in 2021, CYC Marketing emerged from a vision to bridge the gap between global digital marketing practices and the unique needs of MENA businesses. We understand the cultural nuances, language requirements, and market dynamics that make this region special. Our team combines international expertise with local insights to deliver results that truly resonate with your audience.",
      ourValues: "Our Values",
      values: [
        { title: "Cultural Sensitivity", description: "We respect and understand the diverse cultures and traditions across the MENA region." },
        { title: "Bilingual Excellence", description: "Native-level Arabic and English content creation for authentic local and international reach." },
        { title: "Transparency", description: "Clear communication, honest reporting, and regular updates on your project progress." },
        { title: "Measurable Results", description: "Data-driven strategies that deliver quantifiable improvements in your business metrics." }
      ]
    },
    ar: {
      title: "من نحن <span class='text-cyc-yellow'>CYC Marketing</span>",
      subtitle: "نحن وكالة تسويق رقمي متخصصة تركز على مساعدة الشركات في منطقة الشرق الأوسط وشمال أفريقيا لتحقيق إمكاناتها الرقمية من خلال استراتيجيات واعية ثقافياً وخبرة ثنائية اللغة.",
      stats: [
        { number: "75+", label: "مشروع ناجح" },
        { number: "45+", label: "عميل سعيد" },
        { number: "3+", label: "سنوات في السوق العربي" },
        { number: "15+", label: "قطاع خدمناه" }
      ],
      team: [
        { name: "علي إسماعيل", role: "المؤسس المشارك", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { name: "محمد حمدي", role: "رئيس التسويق الرقمي", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { name: "محمد طارق", role: "مصمم جرافيك", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" }
      ],
      ourStory: "قصتنا",
      storyText: "تأسست CYC Marketing في عام 2021 من رؤية لسد الفجوة بين ممارسات التسويق الرقمي العالمية والاحتياجات الفريدة لشركات الشرق الأوسط وشمال أفريقيا. نحن نفهم الفروق الثقافية ومتطلبات اللغة وديناميكيات السوق التي تجعل هذه المنطقة مميزة. فريقنا يجمع بين الخبرة الدولية والرؤى المحلية لتقديم نتائج تتردد صدى حقيقي مع جمهورك.",
      ourValues: "قيمنا",
      values: [
        { title: "الحساسية الثقافية", description: "نحترم ونفهم الثقافات والتقاليد المتنوعة عبر منطقة الشرق الأوسط وشمال أفريقيا." },
        { title: "التميز ثنائي اللغة", description: "إنشاء محتوى أصلي بالعربية والإنجليزية للوصول المحلي والدولي الأصيل." },
        { title: "الشفافية", description: "تواصل واضح وتقارير صادقة وتحديثات منتظمة حول تقدم مشروعك." },
        { title: "النتائج القابلة للقياس", description: "استراتيجيات مدفوعة بالبيانات تقدم تحسينات قابلة للقياس في مقاييس عملك." }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SEOHead 
        {...seoConfigs.about[language]}
        url="/about"
        language={language}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyc-purple via-cyc-purple-light to-cyc-purple-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            dangerouslySetInnerHTML={{ __html: content[language].title }}
          />
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">{content[language].ourStory}</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyc-purple">Founded on Innovation</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {content[language].storyText}
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyc-purple/10 to-cyc-purple-light/10 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Innovation First</h4>
                <p className="text-gray-600 dark:text-gray-300">We're always exploring new technologies and strategies to give our clients a competitive edge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">{language === 'en' ? 'Our Impact' : 'تأثيرنا'}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {content[language].stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyc-purple mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">{language === 'en' ? 'Meet Our Team' : 'تعرف على فريقنا'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {content[language].team.map((member, index) => (
              <div key={index} className="text-center bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-cyc-purple/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                <p className="text-cyc-purple font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-cyc-purple to-cyc-purple-light text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{content[language].ourValues}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {content[language].values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{['🎯', '🤝', '💡', '📈'][index]}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-blue-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">{language === 'en' ? 'Follow Us' : 'تابعنا'}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'en' ? 'Stay updated with our latest projects, insights, and industry news.' : 'ابق على اطلاع بأحدث مشاريعنا ورؤانا وأخبار الصناعة.'}
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.facebook.com/cyc.agency1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/cyc.vision?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110"
              title="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/cyc-agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">{language === 'en' ? 'Ready to Work With Us?' : 'مستعد للعمل معنا؟'}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'en' ? 'Let\'s discuss how we can help your business grow and achieve its marketing goals in the MENA region.' : 'دعنا نناقش كيف يمكننا مساعدة عملك على النمو وتحقيق أهدافه التسويقية في منطقة الشرق الأوسط وشمال أفريقيا.'}
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-cyc-purple to-cyc-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            {language === 'en' ? 'Get Started Today' : 'ابدأ اليوم'}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
