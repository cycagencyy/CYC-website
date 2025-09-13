import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
              src="https://i.postimg.cc/gXy58Ymz/cyc-logo.png" 
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
        <div className="hidden md:flex items-center space-x-10">
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
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-2 space-y-1">
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
      )}
    </nav>
  )
}

export default Navbar
