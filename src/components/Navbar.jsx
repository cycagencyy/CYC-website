import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import VisitorCounter from './VisitorCounter'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || false
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.4)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('languageChange', { 
      detail: { language: newLanguage } 
    }))
    
    // Update document language and body class
    document.documentElement.setAttribute('lang', newLanguage)
    document.body.classList.remove('lang-en', 'lang-ar')
    document.body.classList.add(`lang-${newLanguage}`)
  }

  const navItems = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact'
    },
    ar: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      portfolio: 'معرض الأعمال',
      blog: 'المدونة',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا'
    }
  }
  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-2xl shadow-2xl border-b border-gray-200/30' 
        : 'bg-gradient-to-r from-cyc-purple/95 to-cyc-purple-light/95 backdrop-blur-xl shadow-xl border-b border-white/20'
    }`}>
      <div className="w-full flex justify-between items-center px-8 py-6">
        {/* Professional Logo */}
        <Link to="/" className="flex items-center group">
          <div className="relative">
            {/* Professional glow effect */}
            <div className={`absolute inset-0 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 scale-110 group-hover:scale-125 ${
              isScrolled 
                ? 'bg-cyc-purple/25' 
                : 'bg-cyc-yellow/30'
            }`}></div>
            <img 
              src="https://i.ibb.co/6Jv05tLN/CYC-GRAAH-LOGO-removebg-preview.png" 
              alt="CYC Marketing Logo" 
              className="relative h-10 md:h-12 w-auto transition-all duration-500 hover:scale-110 hover:-translate-y-1 rounded-2xl p-1.5"
              style={{
                filter: isScrolled 
                  ? 'brightness(0) saturate(100%) invert(20%) sepia(94%) saturate(2000%) hue-rotate(250deg) brightness(95%) contrast(90%) drop-shadow(0 8px 25px rgba(76, 29, 149, 0.4))'
                  : 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%) drop-shadow(0 8px 25px rgba(255, 255, 255, 0.4))'
              }}
            />
          </div>
        </Link>
        {/* Professional Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {/* Visitor Counter */}
          <div className="hidden lg:block">
            <VisitorCounter />
          </div>
          <Link 
            to="/" 
            className={`nav-link font-semibold transition-all duration-300 relative group py-2 ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-cyc-purple' 
                : 'text-white hover:text-cyc-yellow'
            }`}
          >
            {navItems[language].home}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-cyc-purple transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
          <Link 
            to="/about" 
            className={`nav-link font-semibold transition-all duration-300 relative group py-2 ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-cyc-purple' 
                : 'text-white hover:text-cyc-yellow'
            }`}
          >
            {navItems[language].about}
            <span className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full rounded-full ${
              isScrolled ? 'bg-cyc-purple' : 'bg-cyc-yellow'
            }`}></span>
          </Link>
          <Link 
            to="/services" 
            className={`nav-link font-semibold transition-all duration-300 relative group py-2 ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-cyc-purple' 
                : 'text-white hover:text-cyc-yellow'
            }`}
          >
            {navItems[language].services}
            <span className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full rounded-full ${
              isScrolled ? 'bg-cyc-purple' : 'bg-cyc-yellow'
            }`}></span>
          </Link>
          <Link 
            to="/portfolio" 
            className={`nav-link font-semibold transition-all duration-300 relative group py-2 ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-cyc-purple' 
                : 'text-white hover:text-cyc-yellow'
            }`}
          >
            {navItems[language].portfolio}
            <span className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full rounded-full ${
              isScrolled ? 'bg-cyc-purple' : 'bg-cyc-yellow'
            }`}></span>
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link font-semibold transition-all duration-300 relative group py-2 ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-cyc-purple' 
                : 'text-white hover:text-cyc-yellow'
            }`}
          >
            {navItems[language].blog}
            <span className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full rounded-full ${
              isScrolled ? 'bg-cyc-purple' : 'bg-cyc-yellow'
            }`}></span>
          </Link>
          <Link 
            to="/faq" 
            className={`nav-link font-semibold transition-all duration-300 relative group py-2 ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-cyc-purple' 
                : 'text-white hover:text-cyc-yellow'
            }`}
          >
            {navItems[language].faq}
            <span className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full rounded-full ${
              isScrolled ? 'bg-cyc-purple' : 'bg-cyc-yellow'
            }`}></span>
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link font-semibold transition-all duration-300 relative group py-2 ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-cyc-purple' 
                : 'text-white hover:text-cyc-yellow'
            }`}
          >
            {navItems[language].contact}
            <span className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full rounded-full ${
              isScrolled ? 'bg-cyc-purple' : 'bg-cyc-yellow'
            }`}></span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className={`px-6 py-3 rounded-full transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 ${
              isScrolled 
                ? 'bg-gradient-to-r from-cyc-purple to-cyc-purple-light text-white hover:from-cyc-purple-light hover:to-cyc-purple'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
            }`}
            title="Toggle Language"
          >
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          <button 
            onClick={toggleDarkMode}
            className={`p-3 rounded-xl transition-all duration-300 backdrop-blur-sm ${
              isScrolled 
                ? 'bg-white/10 dark:bg-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-600/50 border border-white/20 dark:border-gray-600/50'
                : 'bg-white/20 hover:bg-white/30 border border-white/30'
            }`}
            title={isDarkMode ? "التبديل للوضع الفاتح" : "التبديل للوضع الداكن"}
          >
            {isDarkMode ? (
              <svg className="w-6 h-6 text-cyc-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className={`w-6 h-6 fill-current ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`} viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button 
            className={`md:hidden p-3 rounded-xl transition-all duration-300 backdrop-blur-sm ${
              isScrolled 
                ? 'bg-white/10 dark:bg-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-600/50 border border-white/20 dark:border-gray-600/50'
                : 'bg-white/20 hover:bg-white/30 border border-white/30'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className={`w-6 h-6 fill-none stroke-current ${
              isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
            }`} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg max-h-screen overflow-y-auto">
          <div className="px-4 py-3">
            {/* Mobile Visitor Counter */}
            <div className="px-3 py-3 mb-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <VisitorCounter />
            </div>
            
            {/* Mobile Contact Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <a 
                href="https://wa.me/201100539306" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="text-sm">WhatsApp</span>
              </a>
              <a 
                href="tel:+201100539306" 
                className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-sm">Call</span>
              </a>
            </div>
            
            <div className="space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-cyc-purple hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navItems[language].home}
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-cyc-purple hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navItems[language].about}
              </Link>
              <Link 
                to="/services" 
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-cyc-purple hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navItems[language].services}
              </Link>
              <Link 
                to="/portfolio" 
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-cyc-purple hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navItems[language].portfolio}
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-cyc-purple hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navItems[language].blog}
              </Link>
              <Link 
                to="/faq" 
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-cyc-purple hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navItems[language].faq}
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-cyc-purple hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navItems[language].contact}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
