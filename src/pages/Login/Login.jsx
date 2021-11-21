import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const history = useHistory();
  const [, setToken] = useAuth(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleLogin = (evt) => {
    evt.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    // console.log(data);
    fetch('https://reqres.in/api/login', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.token) {
          setToken(data);
          history.push('/');
        }
        else {
          setToken(null);
          emailRef.current.style.border = "1px solid #f00";
        }
      });
  };
  return (
    <form onSubmit={handleLogin}>
      <input defaultValue="eve.holt@reqres.in" ref={emailRef} type="email" placeholder="email" required />
      <input defaultValue="cityslicka" ref={passwordRef} type="password" placeholder="password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;