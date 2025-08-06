import { cn } from '@/lib/utils'

interface PortraitImageProps {
  src: string
  alt: string
  hover?: boolean
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  objectFit?: 'cover' | 'contain' | 'fill'
  className?: string
}

export function PortraitImage({ 
  src, 
  alt, 
  hover = true,
  rounded = 'none',
  objectFit = 'cover',
  className 
}: PortraitImageProps) {
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  }

  const objectFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill'
  }

  return (
    <div className={cn(
      'relative overflow-hidden',
      roundedClasses[rounded],
      hover && 'hover-lift',
      className
    )}>
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-auto',
          objectFitClasses[objectFit]
        )}
        loading="lazy"
      />
    </div>
  )
} 