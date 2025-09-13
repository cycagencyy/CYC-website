import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Loading'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import ChatWidget from './components/ChatWidget'
import { useToast } from './components/Toast'
import { PageSkeleton } from './components/LoadingSkeleton'
import { initPerformanceOptimizations } from './utils/performanceOptimization'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Blog = lazy(() => import('./pages/Blog'))
const NotFound = lazy(() => import('./pages/NotFound'))
const ThankYou = lazy(() => import('./pages/ThankYou'))
const FAQ = lazy(() => import('./pages/FAQ'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const Sitemap = lazy(() => import('./pages/Sitemap'))

function App() {
  const [loading, setLoading] = useState(true)
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })
  const { ToastContainer } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500) // Reduced loading time

    // تحسينات الأداء
    initPerformanceOptimizations()

    return () => clearTimeout(timer)
  }, [])

  // Navbar height management
  useEffect(() => {
    const updateNavHeight = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        const height = navbar.offsetHeight
        document.documentElement.style.setProperty('--nav-h', `${height}px`)
      }
    }

    // Update on load
    updateNavHeight()

    // Update on resize
    window.addEventListener('resize', updateNavHeight)

    // Update when language changes (might affect navbar height)
    const handleLanguageChange = () => {
      setTimeout(updateNavHeight, 100) // Small delay to ensure DOM is updated
    }
    window.addEventListener('languageChange', handleLanguageChange)

    return () => {
      window.removeEventListener('resize', updateNavHeight)
      window.removeEventListener('languageChange', handleLanguageChange)
    }
  }, [])

  useEffect(() => {
    // Listen for language changes
    const handleLanguageChange = (e) => {
      setLanguage(e.detail.language)
      // Update document language and body class
      if (e.detail.language === 'ar') {
        document.documentElement.setAttribute('lang', 'ar')
        document.body.classList.add('lang-ar')
        document.body.classList.remove('lang-en')
      } else {
        document.documentElement.setAttribute('lang', 'en')
        document.body.classList.add('lang-en')
        document.body.classList.remove('lang-ar')
      }
    }
    
    // Set initial language and class
    if (language === 'ar') {
      document.documentElement.setAttribute('lang', 'ar')
      document.body.classList.add('lang-ar')
    } else {
      document.documentElement.setAttribute('lang', 'en')
      document.body.classList.add('lang-en')
    }
    
    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [language])

  if (loading) {
    return <Loading />
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <ChatWidget />
      <ToastContainer />
    </div>
  )
}

export default App
