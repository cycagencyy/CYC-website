import React from 'react'
import { Helmet } from 'react-helmet-async'

function SEOHead({ 
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  language = 'en',
  author = 'CYC Agency'
}) {
  const siteName = 'CYC Agency'
  const baseUrl = window.location.origin
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/cyc-logo.png`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": baseUrl,
    "logo": fullImage,
    "description": description,
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cairo",
      "addressCountry": "Egypt",
      "addressRegion": "Cairo"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+20-110-053-9306",
      "contactType": "customer service",
      "email": "support@cyc-agency.site",
      "availableLanguage": ["Arabic", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/cyc.agency1/",
      "https://www.instagram.com/cyc.vision",
      "https://linkedin.com/company/cyc-agency",
      "https://youtube.com/@cyc-agency"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 30.0444,
        "longitude": 31.2357
      },
      "geoRadius": "5000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Comprehensive digital marketing strategies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Management",
            "description": "Professional social media management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Search engine optimization"
          }
        }
      ]
    },
    "keywords": "digital marketing, social media management, SEO, content creation, web design, MENA, Egypt, Arabic marketing",
    "knowsAbout": ["Digital Marketing", "Social Media Marketing", "SEO", "Content Creation", "Web Design", "Branding"]
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | {siteName}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language} />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language === 'ar' ? 'ar_EG' : 'en_US'} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@cycmarketing" />
      <meta name="twitter:creator" content="@cycmarketing" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* SEO Meta Tags */}
      <meta name="geo.region" content="EG-C" />
      <meta name="geo.placename" content="Cairo" />
      <meta name="geo.position" content="30.0444;31.2357" />
      <meta name="ICBM" content="30.0444, 31.2357" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="coverage" content="worldwide" />
      
      {/* Performance Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Alternate Language Versions */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${url || ''}`} />
      <link rel="alternate" hrefLang="ar" href={`${baseUrl}/ar${url || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${url || ''}`} />

      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-TXX0X9R44E"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TXX0X9R44E');
        `}
      </script>
      
      {/* Plausible Analytics */}
      <script defer data-domain="cyc-agency.site" src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"></script>
      <script>
        {`
          window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}
      </script>
    </Helmet>
  )
}

// SEO configurations for different pages
export const seoConfigs = {
  home: {
    en: {
      title: "CYC Agency | Premium Digital Marketing Solutions",
      description: "We turn attention into growth. CYC Agency specializes in social media, paid campaigns, SEO, and creative strategies to boost your brand.",
      keywords: "digital marketing, social media marketing, paid advertising, SEO, brand growth, creative strategies, CYC Agency, premium marketing solutions"
    },
    ar: {
      title: "CYC Agency | حلول التسويق الرقمي المتميزة",
      description: "نحول الانتباه إلى نمو. CYC Agency متخصصون في وسائل التواصل الاجتماعي والحملات المدفوعة وتحسين محركات البحث والاستراتيجيات الإبداعية لتعزيز علامتك التجارية.",
      keywords: "التسويق الرقمي, تسويق وسائل التواصل الاجتماعي, الإعلانات المدفوعة, تحسين محركات البحث, نمو العلامة التجارية, الاستراتيجيات الإبداعية, CYC Agency, حلول التسويق المتميزة"
    }
  },
  about: {
    en: {
      title: "About Us | CYC Marketing Team",
      description: "Meet the CYC Marketing team. Learn about our mission, values, and expertise in digital marketing across the MENA region.",
      keywords: "about CYC, marketing team, digital marketing experts, MENA specialists, company mission"
    },
    ar: {
      title: "من نحن | فريق CYC Marketing",
      description: "تعرف على فريق CYC Marketing. تعرف على مهمتنا وقيمنا وخبرتنا في التسويق الرقمي عبر منطقة الشرق الأوسط وشمال أفريقيا.",
      keywords: "عن CYC, فريق التسويق, خبراء التسويق الرقمي, متخصصو الشرق الأوسط, مهمة الشركة"
    }
  },
  services: {
    en: {
      title: "Digital Marketing Services | CYC Marketing",
      description: "Comprehensive digital marketing services including social media management, SEO, content creation, and advertising for MENA markets.",
      keywords: "digital marketing services, social media management, SEO services, content creation, advertising, MENA marketing"
    },
    ar: {
      title: "خدمات التسويق الرقمي | CYC Marketing",
      description: "خدمات تسويق رقمي شاملة تشمل إدارة وسائل التواصل الاجتماعي وتحسين محركات البحث وإنشاء المحتوى والإعلانات لأسواق الشرق الأوسط.",
      keywords: "خدمات التسويق الرقمي, إدارة وسائل التواصل, خدمات تحسين محركات البحث, إنشاء المحتوى, الإعلانات, تسويق الشرق الأوسط"
    }
  },
  contact: {
    en: {
      title: "Contact Us | CYC Marketing",
      description: "Get in touch with CYC Marketing. Contact our digital marketing experts for consultation and project discussions.",
      keywords: "contact CYC, digital marketing consultation, project inquiry, marketing experts contact"
    },
    ar: {
      title: "تواصل معنا | CYC Marketing",
      description: "تواصل مع CYC Marketing. اتصل بخبراء التسويق الرقمي لدينا للاستشارة ومناقشة المشاريع.",
      keywords: "تواصل مع CYC, استشارة التسويق الرقمي, استفسار المشروع, تواصل خبراء التسويق"
    }
  }
}

export default SEOHead

