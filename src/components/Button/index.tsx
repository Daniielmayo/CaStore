import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

/**
 * Tipos de variantes disponibles para el botón
 */
type ButtonVariant = "primary" | "underLine" | "secondary" | "danger";

/**
 * Propiedades del componente Button
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  disabled?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  navigateTo?: string;
}

/**
 * Componente Button reutilizable
 * Un botón versátil que incluye navegación integrada con React Router.
 * Soporta múltiples variantes visuales, estados deshabilitados y ancho completo.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary" as ButtonVariant,
  disabled,
  fullWidth,
  navigateTo,
  ...props
}) => {
  // Construye las clases CSS basadas en las props
  const classNames = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");



  return (
    <Link  className={styles.link} to={navigateTo || "#"} style={{ textDecoration: "none" }}>
      <button className={classNames}  disabled={disabled} {...props}>
        {children}
      </button>
    </Link>
  );
};
