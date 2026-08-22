import { forwardRef } from 'react'

/**
 * Button component
 * 
 * @param {'primary'|'secondary'|'ghost-light'|'gold-outline'} variant
 * @param {string} className - Additional classes
 * @param {React.ReactNode} children
 */
const Button = forwardRef(({ variant = 'primary', className = '', children, ...props }, ref) => {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    'ghost-light': 'btn-ghost-light',
    'gold-outline': 'btn-gold-outline',
  }

  return (
    <button
      ref={ref}
      className={`${variantClasses[variant] || variantClasses.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
