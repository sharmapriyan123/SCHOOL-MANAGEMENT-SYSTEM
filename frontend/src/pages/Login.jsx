import React from 'react'

function Login() {
  return (
    <>
    <div className="login-container">
        <div className="login-card">
            <h2>Log In</h2>
            <form>
                <label for="username">Username:</label><br/>
                <input type="text" id="username" name="username" required/><br/>
                <label for="password">Password:</label><br/>
                <input type="password" id="password" name="password" required/><br/>
                <button type="submit">Log In</button>
                <p>Don't have an account? <a href="/register">Sign Up</a>
                </p>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login