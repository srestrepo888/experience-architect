import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SophisticatedInputProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  type?: 'text' | 'email' | 'password' | 'textarea' | 'number'
  variant?: 'default' | 'elegant' | 'minimal' | 'glass'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  error?: string
  success?: boolean
  disabled?: boolean
  required?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  rows?: number
  maxLength?: number
  autoFocus?: boolean
}

export function SophisticatedInput({
  label,
  placeholder,
  value = '',
  onChange,
  type = 'text',
  variant = 'default',
  size = 'md',
  error,
  success = false,
  disabled = false,
  required = false,
  icon,
  iconPosition = 'left',
  className,
  rows = 3,
  maxLength,
  autoFocus = false
}: SophisticatedInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)
  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const variantClasses = {
    default: 'bg-background border-border/50 focus:border-foreground/50',
    elegant: 'bg-card/50 border-border/30 focus:border-foreground/40 focus:bg-card/80',
    minimal: 'bg-transparent border-border/20 focus:border-foreground/30',
    glass: 'bg-background/20 backdrop-blur-sm border-border/20 focus:border-foreground/40 focus:bg-background/30'
  }

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
    xl: 'px-6 py-5 text-xl'
  }

  const baseClasses = cn(
    'relative w-full transition-all duration-500 ease-out rounded-lg border-2',
    'font-body font-light placeholder:text-muted-foreground/60',
    'focus:outline-none focus:ring-0',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    error && 'border-destructive/50 focus:border-destructive',
    success && 'border-green-500/50 focus:border-green-500',
    className
  )

  const inputElement = type === 'textarea' ? (
    <textarea
      ref={inputRef as React.RefObject<HTMLTextAreaElement>}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      rows={rows}
      maxLength={maxLength}
      autoFocus={autoFocus}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        baseClasses,
        'resize-none',
        icon && iconPosition === 'left' && 'pl-12',
        icon && iconPosition === 'right' && 'pr-12'
      )}
    />
  ) : (
    <input
      ref={inputRef as React.RefObject<HTMLInputElement>}
      type={type}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      maxLength={maxLength}
      autoFocus={autoFocus}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        baseClasses,
        icon && iconPosition === 'left' && 'pl-12',
        icon && iconPosition === 'right' && 'pr-12'
      )}
    />
  )

  return (
    <div className="relative w-full">
      {/* Label */}
      {label && (
        <motion.label
          className="block text-sm font-elegant font-light text-foreground/80 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </motion.label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <motion.div
            className={cn(
              'absolute top-1/2 -translate-y-1/2 z-10 text-muted-foreground/60',
              iconPosition === 'left' ? 'left-4' : 'right-4'
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}

        {/* Input Element */}
        {inputElement}

        {/* Focus Border Animation */}
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-transparent pointer-events-none"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{
            scale: isFocused ? 1.02 : 1,
            opacity: isFocused ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            borderColor: error ? 'hsl(var(--destructive))' : 'hsl(var(--foreground))'
          }}
        />

        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0"
          animate={{
            opacity: isHovered && !isFocused ? 1 : 0,
            x: isHovered && !isFocused ? '100%' : '-100%'
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Success/Error Indicator */}
        <AnimatePresence>
          {(error || success) && (
            <motion.div
              className={cn(
                'absolute top-1/2 -translate-y-1/2 right-4',
                error ? 'text-destructive' : 'text-green-500'
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {error ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Character Counter */}
        {maxLength && (
          <motion.div
            className="absolute -bottom-6 right-0 text-xs text-muted-foreground/60 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFocused ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {value.length}/{maxLength}
          </motion.div>
        )}
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="mt-2 text-sm text-destructive font-light"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 