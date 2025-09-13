import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function FAQ() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })
  const [openIndex, setOpenIndex] = useState(null)

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
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our digital marketing services and processes.",
      searchPlaceholder: "Search questions...",
      categories: {
        general: "General",
        services: "Services",
        pricing: "Pricing",
        process: "Process",
        support: "Support"
      },
      faqs: [
        {
          category: "general",
          question: "What makes CYC Marketing different from other agencies?",
          answer: "We specialize in the MENA region with deep cultural understanding, bilingual capabilities, and proven results. Our team combines international expertise with local insights to deliver authentic campaigns that resonate with your target audience."
        },
        {
          category: "general",
          question: "Do you work with businesses outside the MENA region?",
          answer: "While we specialize in MENA markets, we also work with international businesses looking to expand into the region. Our expertise in cultural nuances and local market dynamics makes us the perfect partner for your regional expansion."
        },
        {
          category: "services",
          question: "What digital marketing services do you offer?",
          answer: "We offer comprehensive digital marketing services including social media management, content creation, SEO optimization, paid advertising, web development, brand identity design, and multilingual content creation in Arabic and English."
        },
        {
          category: "services",
          question: "Do you provide bilingual content creation?",
          answer: "Yes! We create authentic content in both Arabic and English, ensuring cultural sensitivity and proper localization. Our native speakers understand the nuances of both languages and cultures."
        },
        {
          category: "services",
          question: "Can you help with social media management?",
          answer: "Absolutely! We manage social media accounts across all major platforms including Facebook, Instagram, LinkedIn, Twitter, and TikTok. We create engaging content, manage community interactions, and run targeted advertising campaigns."
        },
        {
          category: "pricing",
          question: "How do you structure your pricing?",
          answer: "Our pricing is customized based on your specific needs, project scope, and goals. We offer flexible packages for different business sizes and can work within your budget while ensuring maximum ROI."
        },
        {
          category: "pricing",
          question: "Do you offer long-term contracts?",
          answer: "We offer both short-term projects and long-term partnerships. Our flexible approach allows you to start with a pilot project and scale up based on results and your satisfaction."
        },
        {
          category: "process",
          question: "What is your typical project timeline?",
          answer: "Timelines vary based on project complexity. Simple projects like social media setup can take 1-2 weeks, while comprehensive digital marketing campaigns typically take 4-8 weeks. We provide detailed timelines during the planning phase."
        },
        {
          category: "process",
          question: "How do you measure success?",
          answer: "We use data-driven metrics including engagement rates, conversion rates, website traffic, lead generation, and ROI. We provide regular reports and adjust strategies based on performance data."
        },
        {
          category: "process",
          question: "What information do you need to get started?",
          answer: "We need to understand your business goals, target audience, current marketing efforts, budget, and timeline. We'll conduct a discovery call to gather all necessary information and create a customized strategy."
        },
        {
          category: "support",
          question: "What kind of support do you provide?",
          answer: "We provide 24/7 support for urgent issues, regular check-ins, detailed reporting, and ongoing optimization. Our team is always available to answer questions and make adjustments to improve performance."
        },
        {
          category: "support",
          question: "Do you provide training for our team?",
          answer: "Yes! We offer training sessions to help your team understand digital marketing best practices, social media management, and how to maintain consistency with your brand voice across all channels."
        }
      ],
      contactTitle: "Still have questions?",
      contactSubtitle: "Can't find what you're looking for? Our team is here to help!",
      contactButton: "Contact Us"
    },
    ar: {
      title: "الأسئلة الشائعة",
      subtitle: "اعثر على إجابات للأسئلة الشائعة حول خدمات التسويق الرقمي وعملياتنا.",
      searchPlaceholder: "ابحث في الأسئلة...",
      categories: {
        general: "عام",
        services: "الخدمات",
        pricing: "الأسعار",
        process: "العملية",
        support: "الدعم"
      },
      faqs: [
        {
          category: "general",
          question: "ما الذي يميز CYC Marketing عن الوكالات الأخرى؟",
          answer: "نتخصص في منطقة الشرق الأوسط وشمال أفريقيا مع فهم عميق للثقافة، وقدرات ثنائية اللغة، ونتائج مثبتة. فريقنا يجمع بين الخبرة الدولية والرؤى المحلية لتقديم حملات أصيلة تتردد صدى مع جمهورك المستهدف."
        },
        {
          category: "general",
          question: "هل تعملون مع شركات خارج منطقة الشرق الأوسط وشمال أفريقيا؟",
          answer: "بينما نتخصص في أسواق الشرق الأوسط وشمال أفريقيا، نعمل أيضاً مع الشركات الدولية التي تسعى للتوسع في المنطقة. خبرتنا في الفروق الثقافية وديناميكيات السوق المحلية تجعلنا الشريك المثالي لتوسعك الإقليمي."
        },
        {
          category: "services",
          question: "ما هي خدمات التسويق الرقمي التي تقدمونها؟",
          answer: "نقدم خدمات تسويق رقمي شاملة تشمل إدارة وسائل التواصل الاجتماعي، وإنشاء المحتوى، وتحسين محركات البحث، والإعلانات المدفوعة، وتطوير المواقع، وتصميم الهوية التجارية، وإنشاء محتوى متعدد اللغات بالعربية والإنجليزية."
        },
        {
          category: "services",
          question: "هل تقدمون إنشاء محتوى ثنائي اللغة؟",
          answer: "نعم! ننشئ محتوى أصيل بالعربية والإنجليزية، مع ضمان الحساسية الثقافية والتوطين المناسب. متحدثونا الأصليون يفهمون الفروق الدقيقة في كلا اللغتين والثقافتين."
        },
        {
          category: "services",
          question: "هل يمكنكم المساعدة في إدارة وسائل التواصل الاجتماعي؟",
          answer: "بالطبع! ندير حسابات وسائل التواصل الاجتماعي عبر جميع المنصات الرئيسية بما في ذلك فيسبوك وإنستغرام ولينكد إن وتويتر وتيك توك. ننشئ محتوى جذاب وندير التفاعلات المجتمعية ونشغل حملات إعلانية مستهدفة."
        },
        {
          category: "pricing",
          question: "كيف تنظمون أسعاركم؟",
          answer: "أسعارنا مخصصة بناءً على احتياجاتك المحددة ونطاق المشروع وأهدافك. نقدم حزم مرنة لأحجام مختلفة من الشركات ويمكننا العمل ضمن ميزانيتك مع ضمان أقصى عائد استثمار."
        },
        {
          category: "pricing",
          question: "هل تقدمون عقود طويلة الأجل؟",
          answer: "نقدم مشاريع قصيرة الأجل وشراكات طويلة الأجل. نهجنا المرن يسمح لك بالبدء بمشروع تجريبي والتوسع بناءً على النتائج ورضاك."
        },
        {
          category: "process",
          question: "ما هو الجدول الزمني النموذجي لمشروعكم؟",
          answer: "تختلف الجداول الزمنية حسب تعقيد المشروع. المشاريع البسيطة مثل إعداد وسائل التواصل الاجتماعي يمكن أن تستغرق 1-2 أسبوع، بينما حملات التسويق الرقمي الشاملة تستغرق عادة 4-8 أسابيع. نقدم جداول زمنية مفصلة خلال مرحلة التخطيط."
        },
        {
          category: "process",
          question: "كيف تقيسون النجاح؟",
          answer: "نستخدم مقاييس مدفوعة بالبيانات تشمل معدلات التفاعل، ومعدلات التحويل، وحركة المرور على الموقع، وتوليد العملاء المحتملين، وعائد الاستثمار. نقدم تقارير منتظمة ونعدل الاستراتيجيات بناءً على بيانات الأداء."
        },
        {
          category: "process",
          question: "ما هي المعلومات التي تحتاجونها للبدء؟",
          answer: "نحتاج إلى فهم أهداف عملك، والجمهور المستهدف، وجهود التسويق الحالية، والميزانية، والجدول الزمني. سنجري مكالمة اكتشاف لجمع جميع المعلومات اللازمة وإنشاء استراتيجية مخصصة."
        },
        {
          category: "support",
          question: "ما نوع الدعم الذي تقدمونه؟",
          answer: "نقدم دعم 24/7 للقضايا العاجلة، وفحوصات منتظمة، وتقارير مفصلة، وتحسين مستمر. فريقنا متاح دائماً للإجابة على الأسئلة وإجراء تعديلات لتحسين الأداء."
        },
        {
          category: "support",
          question: "هل تقدمون تدريب لفريقنا؟",
          answer: "نعم! نقدم جلسات تدريبية لمساعدة فريقك على فهم أفضل ممارسات التسويق الرقمي، وإدارة وسائل التواصل الاجتماعي، وكيفية الحفاظ على الاتساق مع صوت علامتك التجارية عبر جميع القنوات."
        }
      ],
      contactTitle: "لا تزال لديك أسئلة؟",
      contactSubtitle: "لا تجد ما تبحث عنه؟ فريقنا هنا للمساعدة!",
      contactButton: "تواصل معنا"
    }
  }

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredFAQs = content[language].faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyc-purple to-cyc-purple-light bg-clip-text text-transparent">
            {content[language].title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-2xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder={content[language].searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pl-12 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-cyc-purple focus:border-transparent transition-all"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-cyc-purple text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {language === 'en' ? 'All' : 'الكل'}
              </button>
              {Object.entries(content[language].categories).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === key
                      ? 'bg-cyc-purple text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🤔</div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                {language === 'en' ? 'No questions found' : 'لم يتم العثور على أسئلة'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {language === 'en' 
                  ? 'Try adjusting your search or filter criteria'
                  : 'حاول تعديل معايير البحث أو التصفية'
                }
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-cyc-purple/10 text-cyc-purple text-sm rounded-full">
                        {content[language].categories[faq.category]}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-cyc-purple text-2xl ml-4"
                    >
                      ▼
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-16 text-center bg-gradient-to-r from-cyc-purple to-cyc-purple-light rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{content[language].contactTitle}</h3>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            {content[language].contactSubtitle}
          </p>
          <Link to="/contact">
            <motion.div 
              className="bg-cyc-yellow text-cyc-purple px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-yellow-300 transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content[language].contactButton}
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ
