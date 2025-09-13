import React, { useState, useEffect } from 'react'

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading visitor count
    const loadVisitorCount = () => {
      // More realistic visitor count for a marketing agency
      const baseCount = 47 // Starting count - more realistic
      const randomIncrement = Math.floor(Math.random() * 8) + 1
      const totalCount = baseCount + randomIncrement
      
      setVisitorCount(totalCount)
      setIsLoading(false)
    }

    // Load initial count
    loadVisitorCount()

    // Update count every 2-3 minutes to simulate realistic visitor patterns
    const interval = setInterval(() => {
      // Sometimes increase, sometimes stay the same (more realistic)
      const shouldUpdate = Math.random() > 0.3 // 70% chance to update
      if (shouldUpdate) {
        setVisitorCount(prev => prev + Math.floor(Math.random() * 2) + 1)
      }
    }, 120000) // Every 2 minutes

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num) => {
    return num.toLocaleString('en-US')
  }

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 text-sm">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-gray-600 dark:text-gray-400">Loading visitors...</span>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2 text-sm bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-md px-2 py-1 border border-white/10 dark:border-gray-700/30">
      <div className="flex items-center space-x-1">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-gray-500 dark:text-gray-400 text-xs">Online:</span>
      </div>
      <span className="font-semibold text-gray-700 dark:text-gray-300 text-xs">
        {formatNumber(visitorCount)}
      </span>
    </div>
  )
}

export default VisitorCounter
