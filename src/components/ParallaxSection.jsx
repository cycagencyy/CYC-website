import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function ParallaxSection({ children, speed = 0.3, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax background component
function ParallaxBackground({ children, speed = 0.3, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}

// Floating elements component
function FloatingElements({ children, speed = 0.2, delay = 0 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * speed])

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

// Staggered animation component
function StaggeredContainer({ children, stagger = 0.1, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

function StaggeredItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

// Reveal animation component
function RevealOnScroll({ children, direction = 'up', delay = 0, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [direction === 'up' ? 50 : -50, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Magnetic hover effect
function MagneticHover({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * strength
    const y = (clientY - (top + height / 2)) * strength
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Gradient text with animation
function AnimatedGradientText({ children, className = '' }) {
  return (
    <motion.div
      className={`bg-gradient-to-r from-cyc-purple via-cyc-purple-light to-cyc-yellow bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        backgroundSize: "200% 200%"
      }}
    >
      {children}
    </motion.div>
  )
}

export {
  ParallaxSection,
  ParallaxBackground,
  FloatingElements,
  StaggeredContainer,
  StaggeredItem,
  RevealOnScroll,
  MagneticHover,
  AnimatedGradientText
}
