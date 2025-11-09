import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { AuthLayout } from "../layout/AuthLayout";

export const Login = () => {


  return (
    <AuthLayout title="Iniciar sesión" subtitle="Construyendo motores con amor">
      <Input label="Correo electronico" type="email" fullWidth />
      <Input label="Contraseña" type="password" fullWidth />
      <Button variant="primary" fullWidth >
        Iniciar sesión
      </Button>
      <Button variant="underLine" fullWidth navigateTo="/forget-password">
        Recuperar contraseña
      </Button>
    </AuthLayout>
  );
};
