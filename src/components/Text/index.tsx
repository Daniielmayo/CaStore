import React from 'react';
import styles from './Text.module.css';

/**
 * Tamaños disponibles para el texto
 */
type TextSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Colores disponibles para el texto
 */
type TextColor = 'default' | 'muted' | 'white' | 'orange';

/**
 * Propiedades del componente Text
 */
interface TextProps {
  size?: TextSize;
  color?: TextColor;
  as?: React.ElementType;
  children: React.ReactNode;
}

/**
 * Componente Text tipográfico reutilizable
 * 
 * Un componente flexible para renderizar texto con diferentes tamaños, colores
 * y elementos HTML. Permite personalizar completamente la semántica HTML
 * manteniendo consistencia visual.
 */
export const Text: React.FC<TextProps> = ({
  size = 'md',
  color = 'default',
  as: Tag = 'p',
  children,
}) => {
  // Combina las clases CSS para aplicar estilo y color
  const classNames = [styles.text, styles[size], styles[color]].join(' ');
  return <Tag className={classNames}>{children}</Tag>;
};
