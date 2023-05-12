
import { useAuthentication } from "./Authentication";
import { Navigate } from "react-router-dom";

const RequireAuth = ({children}) => {
    const auth = useAuthentication();
    if(!auth.user){

        return <Navigate to="/login"/>;
    }
  return children;
  
};

export default RequireAuth;