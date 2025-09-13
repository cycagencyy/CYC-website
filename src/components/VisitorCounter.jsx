import React, { useState, useEffect } from 'react'

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading visitor count
    const loadVisitorCount = () => {
      // In a real implementation, you would fetch this from your analytics API
      // For now, we'll use a simulated count that increases over time
      const baseCount = 1247 // Starting count
      const randomIncrement = Math.floor(Math.random() * 50) + 1
      const totalCount = baseCount + randomIncrement
      
      setVisitorCount(totalCount)
      setIsLoading(false)
    }

    // Load initial count
    loadVisitorCount()

    // Update count every 30 seconds to simulate real-time updates
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 30000)

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
    <div className="flex items-center space-x-2 text-sm bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20 dark:border-gray-700/50">
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
        <span className="text-gray-600 dark:text-gray-400 font-medium">Live:</span>
      </div>
      <span className="font-bold text-purple-600 dark:text-purple-400 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
        {formatNumber(visitorCount)}
      </span>
    </div>
  )
}

export default VisitorCounter
