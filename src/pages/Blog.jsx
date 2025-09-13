import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState(null)

  useEffect(() => {
    // Listen for language changes from navbar
    const handleLanguageChange = (e) => {
      setLanguage(e.detail.language)
    }
    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    setSubscribeStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/xkgvepgq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          type: 'newsletter_subscription',
          message: 'Newsletter subscription request'
        })
      })

      if (response.ok) {
        setSubscribeStatus('success')
        setEmail('')
      } else {
        setSubscribeStatus('error')
      }
    } catch (error) {
      setSubscribeStatus('error')
    } finally {
      setIsSubscribing(false)
    }
  }
  const content = {
    en: {
      title: "Our Blog",
      subtitle: "Stay updated with the latest digital marketing insights, trends, and strategies for the MENA region.",
      featuredTitle: "Featured Article",
      newsletterTitle: "Stay Updated",
      newsletterSubtitle: "Get the latest marketing insights delivered to your inbox.",
      newsletterPlaceholder: "Enter your email",
      newsletterButton: "Subscribe",
      readMore: "Read More",
      stayUpdated: "Stay Updated",
      newsletterText: "Get the latest marketing insights delivered to your inbox.",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      subscribing: "Subscribing...",
      successMessage: "Successfully subscribed!",
      errorMessage: "Failed to subscribe. Please try again.",
      posts: [
        {
          id: 1,
          title: "10 Digital Marketing Trends for 2024",
          excerpt: "Discover the latest trends that will shape digital marketing in 2024 and how to leverage them for your business growth.",
          author: "Mohamed El-Badry",
          date: "Dec 15, 2023",
          readTime: "5 min read",
          category: "Digital Marketing",
          image: "📈",
          color: "from-blue-500 to-blue-600"
        },
    {
      id: 2,
      title: "The Complete Guide to Social Media Strategy",
      excerpt: "Learn how to create an effective social media strategy that drives engagement and builds your brand community.",
      author: "Sarah Mohamed",
      date: "Dec 10, 2023",
      readTime: "8 min read",
      category: "Social Media",
      image: "📱",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 3,
      title: "SEO Best Practices for E-commerce Websites",
      excerpt: "Optimize your e-commerce site for search engines with these proven SEO strategies and techniques.",
      author: "Omar Ali",
      date: "Dec 5, 2023",
      readTime: "6 min read",
      category: "SEO",
      image: "🔍",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Building Brand Identity Through Design",
      excerpt: "Explore how effective graphic design can strengthen your brand identity and connect with your target audience.",
      author: "Fatma Ibrahim",
      date: "Nov 28, 2023",
      readTime: "7 min read",
      category: "Design",
      image: "🎨",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      title: "Content Marketing: Storytelling That Sells",
      excerpt: "Master the art of content marketing through compelling storytelling that converts readers into customers.",
      author: "Ahmed Hassan",
      date: "Nov 20, 2023",
      readTime: "9 min read",
      category: "Content",
      image: "✍️",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      title: "Facebook Ads vs Google Ads: Which is Better?",
      excerpt: "Compare Facebook and Google advertising platforms to determine the best choice for your marketing budget.",
      author: "Sarah Mohamed",
      date: "Nov 15, 2023",
      readTime: "6 min read",
      category: "Advertising",
      image: "💰",
      color: "from-indigo-500 to-indigo-600"
        }
      ],
      categories: ["All", "Digital Marketing", "Social Media", "SEO", "Design", "Content", "Advertising"]
    },
    ar: {
      title: "مدونتنا",
      subtitle: "ابق على اطلاع بأحدث رؤى التسويق الرقمي والاتجاهات والاستراتيجيات لمنطقة الشرق الأوسط وشمال أفريقيا.",
      featuredTitle: "المقال المميز",
      newsletterTitle: "ابق على اطلاع",
      newsletterSubtitle: "احصل على أحدث رؤى التسويق مباشرة إلى صندوق الوارد الخاص بك.",
      newsletterPlaceholder: "أدخل بريدك الإلكتروني",
      newsletterButton: "اشترك",
      readMore: "اقرأ المزيد",
      stayUpdated: "ابق على اطلاع",
      newsletterText: "احصل على أحدث رؤى التسويق مباشرة إلى صندوق الوارد الخاص بك.",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subscribe: "اشترك",
      subscribing: "جاري الاشتراك...",
      successMessage: "تم الاشتراك بنجاح!",
      errorMessage: "فشل في الاشتراك. يرجى المحاولة مرة أخرى.",
      posts: [
        {
          id: 1,
          title: "10 اتجاهات التسويق الرقمي لعام 2024",
          excerpt: "اكتشف أحدث الاتجاهات التي ستشكل التسويق الرقمي في عام 2024 وكيفية الاستفادة منها لنمو عملك.",
          author: "محمد البدري",
          date: "15 ديسمبر 2023",
          readTime: "5 دقائق قراءة",
          category: "التسويق الرقمي",
          image: "📈",
          color: "from-blue-500 to-blue-600"
        },
        {
          id: 2,
          title: "الدليل الكامل لاستراتيجية وسائل التواصل الاجتماعي",
          excerpt: "تعلم كيفية إنشاء استراتيجية وسائل تواصل اجتماعي فعالة تحفز التفاعل وتبني مجتمع علامتك التجارية.",
          author: "أمينة الزهراء",
          date: "10 ديسمبر 2023",
          readTime: "8 دقائق قراءة",
          category: "وسائل التواصل الاجتماعي",
          image: "📱",
          color: "from-pink-500 to-pink-600"
        },
        {
          id: 3,
          title: "أفضل ممارسات SEO للمواقع التجارية",
          excerpt: "حسن موقعك التجاري لمحركات البحث باستخدام استراتيجيات وتقنيات SEO المثبتة.",
          author: "خالد الراشد",
          date: "5 ديسمبر 2023",
          readTime: "6 دقائق قراءة",
          category: "تحسين محركات البحث",
          image: "🔍",
          color: "from-green-500 to-green-600"
        },
        {
          id: 4,
          title: "بناء الهوية التجارية من خلال التصميم",
          excerpt: "استكشف كيف يمكن للتصميم الجرافيكي الفعال تقوية هويتك التجارية والتواصل مع جمهورك المستهدف.",
          author: "فاطمة المنصوري",
          date: "28 نوفمبر 2023",
          readTime: "7 دقائق قراءة",
          category: "التصميم",
          image: "🎨",
          color: "from-purple-500 to-purple-600"
        },
        {
          id: 5,
          title: "تسويق المحتوى: سرد القصص الذي يبيع",
          excerpt: "أتقن فن تسويق المحتوى من خلال سرد القصص المقنعة التي تحول القراء إلى عملاء.",
          author: "محمد البدري",
          date: "20 نوفمبر 2023",
          readTime: "9 دقائق قراءة",
          category: "المحتوى",
          image: "✍️",
          color: "from-orange-500 to-orange-600"
        },
        {
          id: 6,
          title: "إعلانات فيسبوك مقابل إعلانات جوجل: أيهما أفضل؟",
          excerpt: "قارن بين منصات الإعلان في فيسبوك وجوجل لتحديد الخيار الأفضل لميزانية التسويق الخاصة بك.",
          author: "أمينة الزهراء",
          date: "15 نوفمبر 2023",
          readTime: "6 دقائق قراءة",
          category: "الإعلان",
          image: "💰",
          color: "from-indigo-500 to-indigo-600"
        }
      ],
      categories: ["الكل", "التسويق الرقمي", "وسائل التواصل الاجتماعي", "تحسين محركات البحث", "التصميم", "المحتوى", "الإعلان"]
    }
  }
  
  const filteredPosts = selectedCategory === (language === 'en' ? "All" : "الكل")
    ? content[language].posts 
    : content[language].posts.filter(post => post.category === selectedCategory)

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

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {content[language].categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                category === selectedCategory
                  ? "bg-gradient-to-r from-cyc-purple to-cyc-purple-light text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-blue-200 text-sm font-medium">{content[language].featuredTitle}</span>
                <h2 className="text-3xl font-bold mb-4 mt-2">
                  {language === 'en' ? 'The Future of Digital Marketing' : 'مستقبل التسويق الرقمي'}
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  {language === 'en' 
                    ? 'Explore emerging technologies and strategies that will revolutionize how businesses connect with their customers in the digital age.'
                    : 'استكشف التقنيات والاستراتيجيات الناشئة التي ستعيد ثورة كيفية اتصال الشركات بعملائها في العصر الرقمي.'
                  }
                </p>
                <div className="flex items-center text-blue-200 text-sm mb-6">
                  <span>{language === 'en' ? 'By Ahmed Hassan' : 'بواسطة أحمد حسن'}</span>
                  <span className="mx-2">•</span>
                  <span>{language === 'en' ? 'Dec 20, 2023' : '20 ديسمبر 2023'}</span>
                  <span className="mx-2">•</span>
                  <span>{language === 'en' ? '10 min read' : '10 دقائق قراءة'}</span>
                </div>
                <motion.button
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === 'en' ? 'Read Full Article' : 'اقرأ المقال كاملاً'}
                </motion.button>
              </div>
              <div className="text-center">
                <div className="text-8xl">🚀</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Post Image */}
              <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}>
                <motion.div 
                  className="text-6xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {post.image}
                </motion.div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-cyc-purple transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-gray-600">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <span>{post.date}</span>
                </div>

                <motion.button
                  className="w-full mt-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {content[language].readMore}
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-cyc-purple to-cyc-purple-light rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{content[language].stayUpdated}</h3>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            {content[language].newsletterText}
          </p>
          
          {/* Status Messages */}
          {subscribeStatus === 'success' && (
            <motion.div 
              className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg max-w-md mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {content[language].successMessage}
            </motion.div>
          )}
          
          {subscribeStatus === 'error' && (
            <motion.div 
              className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg max-w-md mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {content[language].errorMessage}
            </motion.div>
          )}
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content[language].emailPlaceholder}
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <motion.button
                type="submit"
                disabled={isSubscribing}
                className="bg-cyc-yellow text-cyc-purple px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubscribing ? { scale: 1.05 } : {}}
                whileTap={!isSubscribing ? { scale: 0.95 } : {}}
              >
                {isSubscribing ? content[language].subscribing : content[language].subscribe}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
