function LoginComponent() {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
          <div className="social-login">
            <p>Or sign in with:</p>
            <div className="social-icons">
              <button className="social-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#3b5998"
                  width="24px"
                  height="24px"
                >
                  <path d="M12 2.04C6.48 2.04 2 6.52 2 12.04C2 17.02 5.65 21.1 10.44 21.96V14.7H7.9V12.04H10.44V9.72C10.44 7.2 11.93 5.88 14.18 5.88C15.2 5.88 16.3 6.08 16.3 6.08V8.56H14.97C13.68 8.56 13.44 9.38 13.44 10.14V12.04H16.2L15.75 14.7H13.44V21.96C18.25 21.1 22 17.02 22 12.04C22 6.52 17.52 2.04 12 2.04Z" />
                </svg>
              </button>
              <button className="social-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#1da1f2"
                  width="24px"
                  height="24px"
                >
                  <path d="M23.4 4.84C22.53 5.2 21.61 5.44 20.65 5.55C21.62 5.04 22.36 4.15 22.72 3.06C21.79 3.58 20.76 3.94 19.67 4.11C18.79 3.2 17.51 2.68 16.12 2.68C13.82 2.68 11.99 4.51 11.99 6.81C11.99 7.16 12.03 7.5 12.1 7.81C8.69 7.64 5.73 6.06 3.8 3.73C3.42 4.33 3.21 5.03 3.21 5.77C3.21 7.18 3.99 8.41 5.17 9.1C4.37 9.09 3.63 8.86 2.98 8.46V8.52C2.98 10.55 4.46 12.24 6.36 12.66C5.96 12.77 5.54 12.83 5.11 12.83C4.81 12.83 4.52 12.81 4.23 12.75C4.82 14.43 6.38 15.63 8.19 15.66C6.72 16.74 4.88 17.35 2.92 17.35C2.61 17.35 2.31 17.34 2 17.3C3.84 18.49 5.99 19.16 8.31 19.16C16.11 19.16 20.63 12.92 20.63 7.27C20.63 7.08 20.63 6.89 20.62 6.7C21.55 6.09 22.36 5.31 23.03 4.42L23.4 4.84Z" />
                </svg>
              </button>
              <button className="social-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#db4437"
                  width="24px"
                  height="24px"
                >
                  <path d="M21.6 12.2C21.6 11.62 21.55 11.07 21.44 10.54H12V13.66H17.33C17.09 14.87 16.43 15.89 15.46 16.56V18.52H18.29C20.09 16.85 21.6 14.17 21.6 12.2ZM12 22C14.43 22 16.47 21.18 18.04 19.79L15.46 17.83C14.62 18.46 13.46 18.82 12 18.82C9.66 18.82 7.72 17.25 6.96 14.9H3.99V16.92C5.55 19.72 8.54 22 12 22ZM6.96 14.9C6.71 14.27 6.56 13.58 6.56 12.9C6.56 12.22 6.71 11.53 6.96 10.9V8.88H3.99C3.36 10.23 3 11.69 3 12.9C3 14.11 3.36 15.57 3.99 16.92L6.96 14.9ZM12 7.18C13.48 7.18 14.62 7.76 15.39 8.48L18.14 5.74C16.47 4.22 14.43 3.4 12 3.4C8.54 3.4 5.55 5.68 3.99 8.48L6.96 10.5C7.72 8.15 9.66 6.58 12 6.58V7.18Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
