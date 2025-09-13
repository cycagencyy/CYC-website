// Image optimization utilities
export const optimizeImage = (src, options = {}) => {
  const {
    width = 800,
    height = 600,
    quality = 80,
    format = 'webp'
  } = options

  // If it's an external image, return as is
  if (src.startsWith('http')) {
    return src
  }

  // For local images, you can add optimization logic here
  // This is a placeholder for future image optimization service
  return src
}

// Generate responsive image sizes
export const generateImageSizes = (baseWidth) => {
  return {
    sm: Math.round(baseWidth * 0.5),
    md: Math.round(baseWidth * 0.75),
    lg: baseWidth,
    xl: Math.round(baseWidth * 1.25),
    '2xl': Math.round(baseWidth * 1.5)
  }
}

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

// Batch preload images
export const preloadImages = async (imageSources) => {
  try {
    await Promise.all(imageSources.map(preloadImage))
  } catch (error) {
    console.warn('Some images failed to preload:', error)
  }
}




