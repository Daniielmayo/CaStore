import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "underLine" | "secondary" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  disabled?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  navigateTo?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary" as ButtonVariant,
  disabled,
  fullWidth,
  navigateTo,
  ...props
}) => {
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
