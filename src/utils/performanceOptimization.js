// تحسينات الأداء للموبايل
export const optimizeForMobile = () => {
  // تقليل عدد العناصر المتحركة على الشاشات الصغيرة
  const isMobile = window.innerWidth < 768
  const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4
  
  if (isMobile || isLowEndDevice) {
    // تقليل عدد الجسيمات المتحركة
    document.documentElement.style.setProperty('--particle-count', '3')
    
    // تقليل مدة الرسوم المتحركة
    document.documentElement.style.setProperty('--animation-duration', '0.2s')
    
    // تعطيل بعض التأثيرات الثقيلة على الموبايل
    document.documentElement.style.setProperty('--blur-effect', 'none')
    
    // إضافة كلاس لتقليل الحركة
    document.body.classList.add('motion-reduce')
    
    // تعطيل بعض التأثيرات الثقيلة
    const heavyElements = document.querySelectorAll('.blur-xl, .blur-2xl, .blur-3xl')
    heavyElements.forEach(el => {
      el.style.filter = 'none'
    })
    
    // تقليل عدد العناصر المتحركة
    const animatedElements = document.querySelectorAll('[data-animate]')
    animatedElements.forEach((el, index) => {
      if (index > 5) {
        el.style.animation = 'none'
      }
    })
  } else {
    // إعادة تعيين القيم للديسكتوب
    document.documentElement.style.setProperty('--particle-count', '10')
    document.documentElement.style.setProperty('--animation-duration', '0.4s')
    document.documentElement.style.setProperty('--blur-effect', 'blur(5px)')
    
    // إزالة كلاس تقليل الحركة
    document.body.classList.remove('motion-reduce')
  }
}

// تحسين تحميل الصور
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]')
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove('lazy')
        observer.unobserve(img)
      }
    })
  })
  
  images.forEach(img => imageObserver.observe(img))
}

// تحسين الأداء العام
export const initPerformanceOptimizations = () => {
  // تحسين للموبايل
  optimizeForMobile()
  
  // إعادة التحسين عند تغيير حجم الشاشة
  window.addEventListener('resize', optimizeForMobile)
  
  // تحميل الصور الكسول
  lazyLoadImages()
  
  // تحسين الذاكرة
  if ('memory' in performance) {
    console.log('Memory usage:', performance.memory)
  }
}
