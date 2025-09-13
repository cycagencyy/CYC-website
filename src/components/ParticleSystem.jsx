import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function ParticleSystem({ 
  particleCount = 50, 
  colors = ['#8B5CF6', '#A855F7', '#F59E0B'],
  speed = 1,
  size = 2,
  className = ''
}) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    // Set canvas size
    canvas.width = rect.width
    canvas.height = rect.height

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: size + Math.random() * 2,
          opacity: Math.random() * 0.5 + 0.3
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)

      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > rect.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > rect.height) particle.vy *= -1

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(rect.width, particle.x))
        particle.y = Math.max(0, Math.min(rect.height, particle.y))

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()

        // Draw connections
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = particle.color + Math.floor((1 - distance / 100) * 50).toString(16).padStart(2, '0')
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Handle resize
    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect()
      canvas.width = newRect.width
      canvas.height = newRect.height
      
      // Update particle positions
      particlesRef.current.forEach(particle => {
        particle.x = (particle.x / rect.width) * newRect.width
        particle.y = (particle.y / rect.height) * newRect.height
      })
      
      rect.width = newRect.width
      rect.height = newRect.height
    }

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          initParticles()
          animate()
        } else {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(canvas)
    window.addEventListener('resize', handleResize)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particleCount, colors, speed, size])

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    />
  )
}

// Interactive Particle Background
function InteractiveParticleBackground({ children, ...props }) {
  return (
    <div className="relative overflow-hidden">
      <ParticleSystem {...props} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export { ParticleSystem, InteractiveParticleBackground }
