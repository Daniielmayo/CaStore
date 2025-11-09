import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./feature/auth/login";
import { ForgetPassword } from "./feature/auth/forgetPassword";
import { ChangePassword } from './feature/auth/changePassword/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
