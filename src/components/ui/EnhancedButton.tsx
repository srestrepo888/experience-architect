import React from 'react'
import { cn } from '@/lib/utils'
import { Download, ExternalLink } from 'lucide-react'

interface EnhancedButtonProps {
  children: React.ReactNode
  href?: string
  external?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: 'download' | 'external'
  className?: string
  onClick?: () => void
}

export function EnhancedButton({ 
  children, 
  href, 
  external = false,
  variant = 'primary', 
  size = 'md',
  icon,
  className,
  onClick 
}: EnhancedButtonProps) {
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'bg-transparent text-foreground hover:bg-muted'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const iconComponent = {
    download: <Download className="w-4 h-4" />,
    external: <ExternalLink className="w-4 h-4" />
  }

  const Component = href ? 'a' : 'button'
  const props = href ? { href, target: external ? '_blank' : undefined, rel: external ? 'noopener noreferrer' : undefined } : { onClick }

  return (
    <Component
      {...props}
      className={cn(
        'inline-flex items-center gap-2 font-medium rounded-md transition-all duration-200 ease-out hover-lift',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
      {icon && iconComponent[icon]}
    </Component>
  )
} 