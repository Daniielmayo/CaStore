import type { ReactNode } from "react";
import { Text } from "../../../components/Text";
import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <form className={styles["auth-container"]}>
      <section className={styles["auth-header"]}>
        <Text size="xl" color="white">
          CA STORE
        </Text>
      </section>
      <div className={styles["auth-content"]}>
        <section className={styles["auth-title"]}>
          <Text size="xl">{title}</Text>
          {subtitle && <Text size="sm">{subtitle}</Text>}
        </section>
        <section className={styles["auth-children"]}>{children}</section>
      </div>
    </form>
  );
};
