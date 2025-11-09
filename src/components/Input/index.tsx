import { forwardRef } from 'react'
import './input.modules.css'

/**
 * Propiedades del componente Input
 */
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

/**
 * Componente Input reutilizable con soporte para etiquetas, errores y texto de ayuda
 * Un campo de entrada versátil que incluye validación visual, diferentes tamaños
 * y variantes de estilo. Implementa forwardRef para compatibilidad con bibliotecas
 * de formularios como React Hook Form que es la que vamos a utilizar para menejod e formularios.
 */
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
    // Construye las clases CSS dinámicamente basado en las props
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


