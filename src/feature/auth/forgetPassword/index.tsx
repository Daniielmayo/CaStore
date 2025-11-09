import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { AuthLayout } from "../layout/AuthLayout";

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
