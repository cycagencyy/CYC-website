import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  useEffect(() => {
    // Listen for language changes
    const handleLanguageChange = (e) => {
      setLanguage(e.detail.language)
    }
    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  const content = {
    en: {
      title: "Chat with us",
      placeholder: "Type your message...",
      send: "Send",
      welcome: "Hi! How can we help you today?",
      quickReplies: [
        "What services do you offer?",
        "How much does it cost?",
        "Can I see your portfolio?",
        "How to get started?",
        "Contact us"
      ],
      responses: {
        "What services do you offer?": "We offer digital marketing, social media management, SEO, content creation, and web design services.",
        "How much does it cost?": "Our pricing varies based on your needs. Let's schedule a free consultation to discuss your project!",
        "Can I see your portfolio?": "Sure! Check out our portfolio section to see our latest work and client success stories.",
        "How to get started?": "Simply fill out our contact form or call us at +20-110-053-9306. We'll get back to you within 24 hours!",
        "Contact us": "For direct communication, you can reach us at:\n📧 Email: support@cyc-agency.site\n📱 Instagram: @cyc.vision\n📞 Phone: +20-110-053-9306"
      }
    },
    ar: {
      title: "تحدث معنا",
      placeholder: "اكتب رسالتك...",
      send: "إرسال",
      welcome: "مرحباً! كيف يمكننا مساعدتك اليوم؟",
      quickReplies: [
        "ما هي الخدمات التي تقدمونها؟",
        "كم التكلفة؟",
        "هل يمكنني رؤية أعمالكم؟",
        "كيف أبدأ؟",
        "تواصل معنا"
      ],
      responses: {
        "ما هي الخدمات التي تقدمونها؟": "نقدم خدمات التسويق الرقمي وإدارة وسائل التواصل الاجتماعي وتحسين محركات البحث وإنشاء المحتوى وتصميم المواقع.",
        "كم التكلفة؟": "تختلف أسعارنا حسب احتياجاتك. دعنا نحدد استشارة مجانية لمناقشة مشروعك!",
        "هل يمكنني رؤية أعمالكم؟": "بالطبع! تحقق من قسم معرض الأعمال لرؤية أحدث أعمالنا وقصص نجاح العملاء.",
        "كيف أبدأ؟": "ببساطة املأ نموذج الاتصال أو اتصل بنا على +20-110-053-9306. سنعود إليك خلال 24 ساعة!",
        "تواصل معنا": "للتواصل المباشر معنا، يمكنك الوصول إلينا عبر:\n📧 البريد الإلكتروني: support@cyc-agency.site\n📱 الإنستجرام: @cyc.vision\n📞 الهاتف: +20-110-053-9306"
      }
    }
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setNewMessage('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const response = content[language].responses[newMessage] || 
        (language === 'ar' 
          ? "شكراً لرسالتك! سنعود إليك قريباً. يمكنك أيضاً الاتصال بنا على +20-110-053-9306"
          : "Thanks for your message! We'll get back to you soon. You can also call us at +20-110-053-9306"
        )
      
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickReply = (reply) => {
    setNewMessage(reply)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyc-purple to-cyc-purple-light text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyc-purple to-cyc-purple-light text-white p-4 rounded-t-2xl">
              <h3 className="font-semibold text-lg">{content[language].title}</h3>
              <p className="text-sm opacity-90">CYC Marketing</p>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {/* Welcome Message */}
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-cyc-purple rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">C</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    {content[language].welcome}
                  </p>
                </div>
              </div>

              {/* Quick Replies */}
              <div className="space-y-2">
                {content[language].quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="block w-full text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg p-2 text-sm text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              {/* Chat Messages */}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-cyc-purple text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    <div className="whitespace-pre-line">{message.text}</div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-cyc-purple rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={content[language].placeholder}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyc-purple dark:bg-gray-700 dark:text-white text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-cyc-purple text-white px-4 py-2 rounded-lg hover:bg-cyc-purple-light transition-colors text-sm"
                >
                  {content[language].send}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget
