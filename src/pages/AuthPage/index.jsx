import AuthSingIn from "../../components/AuthSingIn";
import { useLocation } from "react-router-dom";

export default function AuthPage() {
  const pathname = useLocation().pathname;
  const isCreating = pathname === "/auth/sing-in";

  return <AuthSingIn isCreating={isCreating} />;
}
