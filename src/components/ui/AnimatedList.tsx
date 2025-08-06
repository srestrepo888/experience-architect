import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedListProps {
  items: React.ReactNode[]
  onItemClick: (index: number) => void
  className?: string
}

export function AnimatedList({ 
  items, 
  onItemClick, 
  className 
}: AnimatedListProps) {
  return (
    <motion.div
      className={cn('space-y-6', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          onClick={() => onItemClick(index)}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  )
} 