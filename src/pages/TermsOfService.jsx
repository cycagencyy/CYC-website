import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function TermsOfService() {
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
      title: "Terms of Service",
      subtitle: "These terms govern your use of our website and services. Please read them carefully.",
      lastUpdated: "Last updated: December 2023",
      sections: [
        {
          title: "Acceptance of Terms",
          content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          title: "Use License",
          content: "Permission is granted to temporarily download one copy of the materials on CYC Marketing's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials."
        },
        {
          title: "Service Description",
          content: "CYC Marketing provides digital marketing services including but not limited to social media management, content creation, SEO optimization, web development, and advertising services. We reserve the right to modify or discontinue any service at any time."
        },
        {
          title: "User Responsibilities",
          content: "You are responsible for providing accurate information, maintaining the confidentiality of your account, and using our services in compliance with applicable laws and regulations. You agree not to use our services for any unlawful or prohibited purpose."
        },
        {
          title: "Payment Terms",
          content: "Payment terms will be specified in individual service agreements. Generally, payment is due upon completion of services or as specified in the project contract. Late payments may incur additional fees as outlined in the service agreement."
        },
        {
          title: "Intellectual Property",
          content: "All content, trademarks, and intellectual property on this website are owned by CYC Marketing or its licensors. You may not use, reproduce, or distribute any content without our express written permission."
        },
        {
          title: "Privacy Policy",
          content: "Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services. By using our services, you agree to the collection and use of information in accordance with our Privacy Policy."
        },
        {
          title: "Limitation of Liability",
          content: "In no event shall CYC Marketing, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
        },
        {
          title: "Indemnification",
          content: "You agree to defend, indemnify, and hold harmless CYC Marketing and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees)."
        },
        {
          title: "Termination",
          content: "We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will cease immediately."
        },
        {
          title: "Governing Law",
          content: "These Terms shall be interpreted and governed by the laws of Egypt, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
        },
        {
          title: "Changes to Terms",
          content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect."
        },
        {
          title: "Contact Information",
          content: "If you have any questions about these Terms of Service, please contact us at legal@cycmarketing.com or through our contact page."
        }
      ],
      contactTitle: "Contact Us",
      contactSubtitle: "If you have any questions about these terms, please contact us:",
      contactInfo: [
        { label: "Email", value: "support@cyc-agency.site" },
        { label: "Phone", value: "+20 110 053 9306" },
        { label: "Address", value: "Cairo, Egypt" }
      ]
    },
    ar: {
      title: "شروط الخدمة",
      subtitle: "هذه الشروط تحكم استخدامك لموقعنا وخدماتنا. يرجى قراءتها بعناية.",
      lastUpdated: "آخر تحديث: ديسمبر 2023",
      sections: [
        {
          title: "قبول الشروط",
          content: "من خلال الوصول إلى هذا الموقع واستخدامه، تقبل وتوافق على الالتزام بشروط وأحكام هذه الاتفاقية. إذا كنت لا توافق على الالتزام بما سبق، يرجى عدم استخدام هذه الخدمة."
        },
        {
          title: "ترخيص الاستخدام",
          content: "يُمنح الإذن لتحميل نسخة واحدة مؤقتة من المواد على موقع CYC Marketing للاستخدام الشخصي غير التجاري المؤقت فقط. هذا منح ترخيص وليس نقل ملكية، وتحت هذا الترخيص لا يجوز لك تعديل أو نسخ المواد."
        },
        {
          title: "وصف الخدمة",
          content: "تقدم CYC Marketing خدمات التسويق الرقمي بما في ذلك على سبيل المثال لا الحصر إدارة وسائل التواصل الاجتماعي، وإنشاء المحتوى، وتحسين محركات البحث، وتطوير المواقع، وخدمات الإعلان. نحتفظ بالحق في تعديل أو إيقاف أي خدمة في أي وقت."
        },
        {
          title: "مسؤوليات المستخدم",
          content: "أنت مسؤول عن تقديم معلومات دقيقة، والحفاظ على سرية حسابك، واستخدام خدماتنا وفقاً للقوانين واللوائح المعمول بها. توافق على عدم استخدام خدماتنا لأي غرض غير قانوني أو محظور."
        },
        {
          title: "شروط الدفع",
          content: "ستحدد شروط الدفع في اتفاقيات الخدمة الفردية. عادة، يكون الدفع مستحقاً عند اكتمال الخدمات أو كما هو محدد في عقد المشروع. قد تترتب رسوم إضافية على المدفوعات المتأخرة كما هو موضح في اتفاقية الخدمة."
        },
        {
          title: "الملكية الفكرية",
          content: "جميع المحتويات والعلامات التجارية والملكية الفكرية على هذا الموقع مملوكة لـ CYC Marketing أو المرخصين لها. لا يجوز لك استخدام أو إعادة إنتاج أو توزيع أي محتوى دون إذن كتابي صريح منا."
        },
        {
          title: "سياسة الخصوصية",
          content: "خصوصيتك مهمة بالنسبة لنا. تشرح سياسة الخصوصية الخاصة بنا كيف نجمع ونستخدم ونحمي معلوماتك عند استخدام خدماتنا. باستخدام خدماتنا، توافق على جمع واستخدام المعلومات وفقاً لسياسة الخصوصية الخاصة بنا."
        },
        {
          title: "تحديد المسؤولية",
          content: "في أي حال من الأحوال، لن تكون CYC Marketing، ولا مديروها أو موظفوها أو شركاؤها أو وكلاؤها أو موردوها أو الشركات التابعة لها، مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك على سبيل المثال لا الحصر، فقدان الأرباح أو البيانات أو الاستخدام أو السمعة أو الخسائر غير الملموسة الأخرى."
        },
        {
          title: "التعويض",
          content: "توافق على الدفاع والتعويض وحماية CYC Marketing ومرخصيها ومرخصيها، وموظفيها ومقاوليها ووكلائها وضباطها ومديريها، من وضد أي مطالبات أو أضرار أو التزامات أو خسائر أو التزامات أو تكاليف أو ديون ونفقات (بما في ذلك على سبيل المثال لا الحصر أتعاب المحاماة)."
        },
        {
          title: "الإنهاء",
          content: "قد ننهي أو نعلق وصولك فوراً، دون إشعار مسبق أو مسؤولية، لأي سبب كان، بما في ذلك على سبيل المثال لا الحصر إذا انتهكت الشروط. عند الإنهاء، سيتوقف حقك في استخدام الخدمة فوراً."
        },
        {
          title: "القانون الحاكم",
          content: "يجب تفسير هذه الشروط وتطبيقها وفقاً لقوانين مصر، دون اعتبار لأحكام قانون النزاع. فشلنا في إنفاذ أي حق أو حكم من هذه الشروط لن يُعتبر تنازلاً عن تلك الحقوق."
        },
        {
          title: "تغييرات على الشروط",
          content: "نحتفظ بالحق، وفقاً لتقديرنا الوحيد، في تعديل أو استبدال هذه الشروط في أي وقت. إذا كان التنقيح جوهرياً، سنحاول تقديم إشعار قبل 30 يوماً على الأقل قبل سريان أي شروط جديدة."
        },
        {
          title: "معلومات الاتصال",
          content: "إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا على legal@cycmarketing.com أو من خلال صفحة الاتصال الخاصة بنا."
        }
      ],
      contactTitle: "تواصل معنا",
      contactSubtitle: "إذا كان لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا:",
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

export default TermsOfService
