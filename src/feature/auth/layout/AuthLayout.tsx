import type { ReactNode } from "react";
import { Text } from "../../../components/Text";
import styles from "./AuthLayout.module.css";

/**
 * Propiedades del componente AuthLayout
 */
interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

/**
 * Layout base para las páginas de autenticación
 * 
 * Proporciona una estructura consistente para todas las pantallas relacionadas
 * con autenticación (login, registro, recuperación de contraseña, etc.).
 * Incluye el branding de la aplicación y áreas designadas para título y contenido.
 */
export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <form className={styles["auth-container"]}>
      {/* Header con branding de la aplicación */}
      <section className={styles["auth-header"]}>
        <Text size="xl" color="white">
          CA STORE
        </Text>
      </section>
      <div className={styles["auth-content"]}>
        {/* Sección de título y subtítulo */}
        <section className={styles["auth-title"]}>
          <Text size="xl">{title}</Text>
          {subtitle && <Text size="sm">{subtitle}</Text>}
        </section>
        {/* Contenido del formulario */}
        <section className={styles["auth-children"]}>{children}</section>
      </div>
    </form>
  );
};
