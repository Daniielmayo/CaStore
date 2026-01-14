import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import { AuthLayout } from "../layout/AuthLayout";

/**
 * Componente de página para recuperación de contraseña
 * 
 * Permite a los usuarios solicitar un enlace de recuperación de contraseña
 * mediante su correo electrónico. Incluye navegación de vuelta al login
 * y hacia el cambio de contraseña.
 
 */
export const ForgetPassword = () => {
  return (
    <AuthLayout
      title="Recuperar contraseña"
      subtitle="Te enviaremos un correo para recuperar tu contraseña"
    >
      <Input label="Correo electrónico" type="email" fullWidth />
      <Button variant="primary" fullWidth navigateTo="/change-password">
        Enviar correo
      </Button>
      <Button variant="underLine" fullWidth navigateTo="/login">
        Volver al login
      </Button>
    </AuthLayout>
  );
};
