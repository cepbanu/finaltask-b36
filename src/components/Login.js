import React from "react";

const Login = () => {
  return (
    <>
      <div className="">
        <div>Login</div>
        <div>
          <form>
            <input
              type="email"
              placeHolder="Email"
              name="email"
              //   value={email}
              //   onChange={handleChange}
              required
              className="bg-neutral-600 focus:text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
