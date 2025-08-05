import React from 'react'
import '../styles/login.css'

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Login</button>
        <div class="checkbox">
          <input type="checkbox" id="remember" name="check"/>
          <label for="remember">Remember me</label>
        </div>
        <div class="content">
            <a href="#"> Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;