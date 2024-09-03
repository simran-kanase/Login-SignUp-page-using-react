import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginSignUp = () => {
  const [page, setPage] = useState("Login");

  const handlePageToggle = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div>
      <div className="flex justify-center mt-32">
        <div className="flex flex-col items-center justify-center gap-5 border-2 shadow-lg w-96">
          <h1 className="p-2 my-5 text-2xl font-medium text-center">
            {page}
          </h1>

          <div className="flex flex-col gap-4 mb-10">
            {page === "Sign Up" && (
              <div className="flex items-center gap-4 p-4 px-10 bg-gray-200">
                <FaUser color="gray" />
                <input
                  type="text"
                  className="bg-transparent outline-none"
                  placeholder="Name"
                />
              </div>
            )}

            <div className="flex items-center gap-4 p-4 px-10 bg-gray-200">
              <MdEmail color="gray" />
              <input
                type="text"
                className="bg-transparent outline-none"
                placeholder="Email"
              />
            </div>

            <div className="flex items-center gap-4 p-4 px-10 bg-gray-200 border-2">
              <RiLockPasswordFill color="gray" />
              <input
                type="password"
                className="bg-transparent outline-none"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                className={`px-5 py-2 border-2 rounded-full ${
                  page === "Sign Up"
                    ? "text-white bg-blue-700 hover:bg-blue-600"
                    : "text-black bg-gray-100 hover:bg-gray-300"
                }`}
                onClick={() => handlePageToggle("Sign Up")}
              >
                Sign Up
              </button>

              <button
                className={`px-5 py-2 border-2 rounded-full ${
                  page === "Login"
                    ? "text-white bg-blue-700 hover:bg-blue-600"
                    : "text-black bg-gray-100 hover:bg-gray-300"
                }`}
                onClick={() => handlePageToggle("Login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
