import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function InteractiveTimeline({ items, language = 'en' }) {
  const [activeItem, setActiveItem] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div ref={containerRef} className="relative py-16">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyc-purple to-cyc-yellow"></div>

      <div className="max-w-4xl mx-auto px-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <motion.div
              className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${
                activeItem === index ? 'bg-cyc-yellow scale-125' : 'bg-cyc-purple'
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => setActiveItem(index)}
            />

            {/* Content Card */}
            <motion.div
              className={`w-5/12 ${
                index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                <motion.div
                  className="text-cyc-purple text-sm font-semibold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {item.date}
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-gray-800 dark:text-white mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.title[language]}
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {item.description[language]}
                </motion.p>
                {item.highlights && (
                  <motion.ul
                    className="mt-4 space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {item.highlights[language].map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-cyc-yellow rounded-full mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Floating Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyc-yellow/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default InteractiveTimeline





