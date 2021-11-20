import { useRef } from "react";

const Login = () => {

  const emailRef =useRef();
  const passwordRef =useRef();
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
    .then((data) => console.log(data));
  };
  return (
    <form onSubmit={handleLogin}>
<input ref={emailRef} type="email" placeholder="email" required />
<input ref={passwordRef} type="password" placeholder="password" required />
<button type="submit">Login</button>
    </form>
  );
};

export default Login;