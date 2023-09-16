import { useState } from "react";
import axios from "axios";

import "../style/AuthPage.css";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { username, secret })
      // eslint-disable-next-line react/prop-types
      .then((r) => props.onAuth({ ...r.data, secret })) 
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      // eslint-disable-next-line react/prop-types
      .then((r) => props.onAuth({ ...r.data, secret })) 
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="login-page">
      <div className="header">
        <div className="title">Welcome to chatting...</div>
        <div className="subtitle">Please <span>Login</span> or <span>Sign Up</span></div>
        <code className="help">
          <div className="title-code"><strong>How to use:</strong></div>
          <div><strong>1</strong> Login with username and password</div>
          <div><strong>2</strong> Or Sign Up with username, password, email, first name and last name</div>
          <div><strong>3</strong> Enjoy chatting!</div>
        </code>
      </div>
      <div className="card-container">
        <div className="card">
          <form onSubmit={onLogin}>
            <div className="card-title">Login</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="secret"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
            />
            <button type="submit">LOG IN</button>
          </form>
        </div>

        <div className="card">
          <form onSubmit={onSignup}>
            <div className="card-title">or Sign Up</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="secret"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
