import { forwardRef } from 'react'
import './input.modules.css'

interface InputProps {
  label?: string
  error?: string
  helperText?: string
  variant?: 'outlined' | 'filled' | 'standard'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  disabled?: boolean
  type?: string
  className?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      variant = 'outlined',
      size = 'medium',
      fullWidth = false,
      type = 'text',
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const inputClasses = [
      'input',
      `input--${variant}`,
      `input--${size}`,
      fullWidth && 'input--full-width',
      error && 'input--error',
      disabled && 'input--disabled',
      className
    ].filter(Boolean).join(' ')

    return (
      <div className={`input-wrapper ${fullWidth ? 'input-wrapper--full-width' : ''}`}>
        {label && (
          <label className={`input-label ${size === 'small' ? 'input-label--small' : ''} ${error ? 'input-label--error' : ''}`}>
            {label}
          </label>
        )}
        
        <input
          ref={ref}
          type={type}
          className={inputClasses}
          disabled={disabled}
          {...props}
        />
        
        {(error || helperText) && (
          <span className={`input-helper ${error ? 'input-helper--error' : ''}`}>
            {error || helperText}
          </span>
        )}
      </div>
    )
  }
)


