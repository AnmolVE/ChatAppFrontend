import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

import COVER_IMAGE from "../../assets/images/Login.jpg";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error } = useSelector((store) => store.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  function handleLoginSubmit(e) {
    e.preventDefault();
    dispatch(loginUser({ email, password })).then((result) => {
      console.log(result);
      if (!result.error) {
        navigate("/chat-area");
      } else {
        setShowError(true);
      }
    });
  }

  return (
    <>
      <div className="w-full h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col">
          <div className="absolute top-[25%] left-[10%] flex flex-col">
            <h1 className="text-4xl text-white font-bold my-4">
              Turn Your Ideas into reality
            </h1>
            <p className="text-xl text-white font-normal">
              Start for free and get attractive offers from community
            </p>
          </div>
          <img
            src={COVER_IMAGE}
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
          <h1 className="w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold">
            Interactive Brand
          </h1>
          <div className="w-full flex flex-col max-w-[500px]">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-3xl font-semibold mb-2">Login</h3>
              <p className="text-base mb-2">
                Welcome Back! Please enter your details.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit}>
              <div className="w-full flex flex-col">
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>

              <div className="w-full flex items-center justify-between">
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                  Forgot Password?
                </p>
              </div>

              <div className="w-full flex flex-col my-4">
                <button
                  type="submit"
                  className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
                >
                  Log in
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center"
                >
                  Register
                </button>
              </div>
            </form>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#060606]">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="font-semibold underline underline-offset-2 cursor-pointer"
              >
                Sign up for free
              </span>
            </p>
          </div>
          {showError && (
            <div
              id="alert-border-2"
              className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
              role="alert"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <div className="ms-3 text-sm font-medium">{error}</div>
              <button
                onClick={() => setShowError(false)}
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                data-dismiss-target="#alert-border-2"
                aria-label="Close"
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
