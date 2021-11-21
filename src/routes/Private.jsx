import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Private = ({path, component, exact}) => {
  const [token] =useAuth();
  // const history = useHistory();
  if(token) {
    return <Route path={path} component = {component} exact ={exact} />
  }

  return <Redirect to="/login"  />;
};

export default Private;