"use client"

import { useState, useEffect } from "react"

interface CountUpProps {
  end: number
  duration?: number
  separator?: string
  prefix?: string
  suffix?: string
  className?: string
}

const CountUp = ({ 
  end, 
  duration = 2, 
  separator = ",", 
  prefix = "", 
  suffix = "",
  className = ""
}: CountUpProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  }

  return (
    <span className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}

export default CountUp 