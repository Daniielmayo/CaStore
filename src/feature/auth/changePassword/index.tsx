import { AuthLayout } from "../layout/AuthLayout";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";

/**
 * Componente de página para cambio de contraseña
 * 
 * Permite a los usuarios establecer una nueva contraseña después de solicitar
 * la recuperación. Incluye validación mediante confirmación de contraseña
 * y navegación de vuelta al login.
 */
export const ChangePassword = () => {

  return (
    <AuthLayout
      title="Recuperar contraseña"
      subtitle="Te enviaremos un correo para recuperar tu contraseña"
    >
      <Input label="Nueva contraseña" type="password" fullWidth />      {/* Campo para confirmar la nueva contraseña */}
      <Input label="Confirmar nueva contraseña" type="password" fullWidth />
      <Button variant="primary" fullWidth navigateTo="/change-password">
        Cambiar contraseña
      </Button>
      <Button variant="underLine" fullWidth navigateTo="/login">
        Volver al login
      </Button>
    </AuthLayout>
  );
};
