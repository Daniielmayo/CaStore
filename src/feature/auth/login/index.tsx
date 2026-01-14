import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import { AuthLayout } from "../layout/AuthLayout";

/**
 * Componente de página de inicio de sesión
 * 
 * Renderiza un formulario de login con campos para email y contraseña,
 * junto con botones para iniciar sesión y recuperar contraseña.
 * Utiliza el AuthLayout para mantener consistencia visual.
 */
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
