import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedListItemProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  isActive?: boolean
}

export function AnimatedListItem({ 
  children, 
  className, 
  onClick, 
  isActive = false 
}: AnimatedListItemProps) {
  return (
    <motion.div
      className={cn(
        'p-6 rounded-2xl border transition-all duration-300 cursor-pointer',
        isActive ? 'border-black/10 shadow-md bg-white/50' : 'border-black/5 bg-white/30 hover:border-black/10 hover:shadow-sm',
        className
      )}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
} 