import React, { useState, useEffect } from 'react'

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading visitor count
    const loadVisitorCount = () => {
      // Very realistic visitor count for a marketing agency
      const baseCount = 3 // Starting count - very realistic for a marketing agency
      const randomIncrement = Math.floor(Math.random() * 4) + 1 // 1-4 visitors
      const totalCount = baseCount + randomIncrement
      
      setVisitorCount(totalCount)
      setIsLoading(false)
    }

    // Load initial count
    loadVisitorCount()

    // Update count every 5-8 minutes to simulate very realistic visitor patterns
    const interval = setInterval(() => {
      // Very low chance to update (realistic for marketing agency)
      const shouldUpdate = Math.random() > 0.7 // 30% chance to update
      if (shouldUpdate) {
        // Sometimes increase by 1, sometimes decrease by 1, sometimes stay same
        const change = Math.random()
        if (change < 0.4) {
          setVisitorCount(prev => Math.max(1, prev + 1)) // Increase by 1
        } else if (change < 0.6) {
          setVisitorCount(prev => Math.max(1, prev - 1)) // Decrease by 1
        }
        // 40% chance to stay the same
      }
    }, 300000) // Every 5 minutes

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
