// Sitemap generator utility
export const generateSitemap = (routes, baseUrl = 'https://cycmarketing.com') => {
  const currentDate = new Date().toISOString().split('T')[0]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map(route => {
  const priority = route.priority || (route.path === '/' ? '1.0' : '0.8')
  const changefreq = route.changefreq || 'weekly'
  
  return `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route.path}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar${route.path}" />
  </url>`
}).join('\n')}
</urlset>`

  return sitemap
}

// Robots.txt generator
export const generateRobotsTxt = (baseUrl = 'https://cycmarketing.com') => {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
`
}

// Route configurations for sitemap
export const sitemapRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.9', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/portfolio', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
  { path: '/thank-you', priority: '0.2', changefreq: 'yearly' }
]

// SEO performance monitoring
export const trackSEOPerformance = () => {
  // Track Core Web Vitals
  if ('web-vital' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log)
      getFID(console.log)
      getFCP(console.log)
      getLCP(console.log)
      getTTFB(console.log)
    })
  }
}

// Meta tags for social sharing
export const generateSocialMetaTags = (pageData) => {
  return {
    'og:title': pageData.title,
    'og:description': pageData.description,
    'og:image': pageData.image,
    'og:url': pageData.url,
    'og:type': pageData.type || 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': pageData.title,
    'twitter:description': pageData.description,
    'twitter:image': pageData.image
  }
}


