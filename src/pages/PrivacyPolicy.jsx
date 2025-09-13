import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function PrivacyPolicy() {
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
      title: "Privacy Policy",
      subtitle: "Your privacy is important to us. This policy explains how we collect, use, and protect your information.",
      lastUpdated: "Last updated: December 2023",
      sections: [
        {
          title: "Information We Collect",
          content: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, company information, and any other information you choose to provide."
        },
        {
          title: "How We Use Your Information",
          content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and comply with legal obligations. We may also use your information to send you marketing communications if you have consented to receive them."
        },
        {
          title: "Information Sharing",
          content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with service providers who assist us in operating our website and conducting our business."
        },
        {
          title: "Data Security",
          content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
        },
        {
          title: "Cookies and Tracking",
          content: "We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences."
        },
        {
          title: "Your Rights",
          content: "You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us using the information provided below."
        },
        {
          title: "Data Retention",
          content: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When we no longer need your information, we will securely delete or anonymize it."
        },
        {
          title: "International Transfers",
          content: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws."
        },
        {
          title: "Children's Privacy",
          content: "Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it."
        },
        {
          title: "Changes to This Policy",
          content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last updated' date. Your continued use of our services after any changes constitutes acceptance of the updated policy."
        }
      ],
      contactTitle: "Contact Us",
      contactSubtitle: "If you have any questions about this privacy policy, please contact us:",
      contactInfo: [
        { label: "Email", value: "support@cyc-agency.site" },
        { label: "Phone", value: "+20 110 053 9306" },
        { label: "Address", value: "Cairo, Egypt" }
      ]
    },
    ar: {
      title: "سياسة الخصوصية",
      subtitle: "خصوصيتك مهمة بالنسبة لنا. تشرح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتك.",
      lastUpdated: "آخر تحديث: ديسمبر 2023",
      sections: [
        {
          title: "المعلومات التي نجمعها",
          content: "نجمع المعلومات التي تقدمها لنا مباشرة، مثل عند إنشاء حساب أو التواصل معنا أو استخدام خدماتنا. قد يشمل ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك ومعلومات الشركة وأي معلومات أخرى تختار تقديمها."
        },
        {
          title: "كيف نستخدم معلوماتك",
          content: "نستخدم المعلومات التي نجمعها لتقديم وصيانة وتحسين خدماتنا، والتواصل معك، ومعالجة المعاملات، والامتثال للالتزامات القانونية. قد نستخدم معلوماتك أيضاً لإرسال اتصالات تسويقية إذا كنت قد وافقت على تلقيها."
        },
        {
          title: "مشاركة المعلومات",
          content: "لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى أطراف ثالثة دون موافقتك، باستثناء ما هو موضح في هذه السياسة. قد نشارك معلوماتك مع مقدمي الخدمات الذين يساعدوننا في تشغيل موقعنا وإدارة أعمالنا."
        },
        {
          title: "أمان البيانات",
          content: "نطبق تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100%."
        },
        {
          title: "ملفات تعريف الارتباط والتتبع",
          content: "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربتك على موقعنا، وتحليل أنماط الاستخدام، وتقديم محتوى مخصص. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال تفضيلات المتصفح."
        },
        {
          title: "حقوقك",
          content: "لديك الحق في الوصول إلى معلوماتك الشخصية أو تحديثها أو حذفها. يمكنك أيضاً إلغاء الاشتراك في الاتصالات التسويقية في أي وقت. لممارسة هذه الحقوق، يرجى الاتصال بنا باستخدام المعلومات المقدمة أدناه."
        },
        {
          title: "الاحتفاظ بالبيانات",
          content: "نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضرورياً لتقديم خدماتنا والامتثال للالتزامات القانونية. عندما لا نحتاج إلى معلوماتك بعد الآن، سنحذفها بأمان أو نجعلها مجهولة الهوية."
        },
        {
          title: "التحويلات الدولية",
          content: "قد يتم نقل معلوماتك ومعالجتها في بلدان أخرى غير بلدك. نضمن وجود ضمانات مناسبة لحماية معلوماتك وفقاً لقوانين حماية البيانات المعمول بها."
        },
        {
          title: "خصوصية الأطفال",
          content: "خدماتنا لا تستهدف الأطفال دون سن 13 عاماً. لا نجمع معلومات شخصية من الأطفال دون سن 13 عاماً عن علم. إذا علمنا أننا جمعنا مثل هذه المعلومات، فسنتخذ خطوات لحذفها."
        },
        {
          title: "تغييرات على هذه السياسة",
          content: "قد نحدث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر السياسة الجديدة على هذه الصفحة وتحديث تاريخ 'آخر تحديث'. استمرارك في استخدام خدماتنا بعد أي تغييرات يشكل قبولاً للسياسة المحدثة."
        }
      ],
      contactTitle: "تواصل معنا",
      contactSubtitle: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:",
      contactInfo: [
        { label: "البريد الإلكتروني", value: "support@cyc-agency.site" },
        { label: "الهاتف", value: "+20 110 053 9306" },
        { label: "العنوان", value: "القاهرة، مصر" }
      ]
    }
  }

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            {content[language].subtitle}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {content[language].lastUpdated}
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {content[language].sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-cyc-purple to-cyc-purple-light rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">{content[language].contactTitle}</h3>
          <p className="text-blue-100 mb-6">
            {content[language].contactSubtitle}
          </p>
          <div className="space-y-3">
            {content[language].contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="font-semibold min-w-[100px]">{info.label}:</span>
                <span className="text-blue-100">{info.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-cyc-purple hover:text-cyc-purple-dark transition-colors font-semibold"
          >
            <span className="mr-2">←</span>
            {language === 'en' ? 'Back to Home' : 'العودة للصفحة الرئيسية'}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
