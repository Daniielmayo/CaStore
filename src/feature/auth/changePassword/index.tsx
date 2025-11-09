import { AuthLayout } from "../layout/AuthLayout";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export const ChangePassword = () => {

  return (
    <AuthLayout
      title="Recuperar contraseña"
      subtitle="Te enviaremos un correo para recuperar tu contraseña"
    >
      <Input label="Nueva contraseña" type="password" fullWidth />
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
