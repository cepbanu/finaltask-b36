import React from "react";

const Register = () => {
  return (
    <>
      <div className="h-80 w-60">
        <div>Register</div>
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

export default Register;
