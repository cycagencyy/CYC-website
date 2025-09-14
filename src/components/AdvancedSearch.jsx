import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function AdvancedSearch({ 
  placeholder = "Search...", 
  onSearch, 
  suggestions = [],
  filters = [],
  language = 'en'
}) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const searchRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (searchQuery = query) => {
    if (onSearch) {
      const results = onSearch(searchQuery, selectedFilters)
      setSearchResults(results)
    }
    setIsOpen(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const toggleFilter = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  const clearFilters = () => {
    setSelectedFilters([])
    setQuery('')
    setSearchResults([])
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <motion.div
        className="relative"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="w-full px-6 py-4 pl-14 pr-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-cyc-purple focus:border-transparent transition-all duration-300 text-gray-800 dark:text-white"
          />
          
          {/* Search Icon */}
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Search Button */}
          <motion.button
            onClick={() => handleSearch()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyc-purple to-cyc-purple-light text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </motion.button>
        </div>
      </motion.div>

      {/* Search Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Filters */}
            {filters.length > 0 && (
              <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {language === 'en' ? 'Filters' : 'المرشحات'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter, index) => (
                    <motion.button
                      key={index}
                      onClick={() => toggleFilter(filter)}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                        selectedFilters.includes(filter)
                          ? 'bg-cyc-purple text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {filter}
                    </motion.button>
                  ))}
                </div>
                {selectedFilters.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="mt-3 text-xs text-cyc-purple hover:text-cyc-purple-light transition-colors"
                  >
                    {language === 'en' ? 'Clear all filters' : 'مسح جميع المرشحات'}
                  </button>
                )}
              </div>
            )}

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="p-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {language === 'en' ? 'Suggestions' : 'اقتراحات'}
                </h4>
                <div className="space-y-2">
                  {suggestions
                    .filter(suggestion => 
                      suggestion.toLowerCase().includes(query.toLowerCase())
                    )
                    .slice(0, 5)
                    .map((suggestion, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          setQuery(suggestion)
                          handleSearch(suggestion)
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                        whileHover={{ x: 5 }}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                </div>
              </div>
            )}

            {/* Recent Searches */}
            {query === '' && (
              <div className="p-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {language === 'en' ? 'Recent Searches' : 'البحث الأخير'}
                </h4>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {language === 'en' ? 'No recent searches' : 'لا توجد عمليات بحث حديثة'}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 space-y-4"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {language === 'en' ? 'Search Results' : 'نتائج البحث'}
          </h3>
          {searchResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                {result.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {result.description}
              </p>
              {result.category && (
                <span className="inline-block mt-2 px-2 py-1 bg-cyc-purple/10 text-cyc-purple text-xs rounded-full">
                  {result.category}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default AdvancedSearch






