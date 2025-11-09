import React from 'react';
import styles from './Text.module.css';

type TextSize = 'sm' | 'md' | 'lg' | 'xl';
type TextColor = 'default' | 'muted' | 'white' | 'orange';

interface TextProps {
  size?: TextSize;
  color?: TextColor;
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size = 'md',
  color = 'default',
  as: Tag = 'p',
  children,
}) => {
  const classNames = [styles.text, styles[size], styles[color]].join(' ');
  return <Tag className={classNames}>{children}</Tag>;
};
