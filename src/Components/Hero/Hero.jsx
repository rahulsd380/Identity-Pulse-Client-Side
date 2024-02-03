import { Link } from "react-router-dom";
import { RiCalendarTodoLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Hero = () => {
  const {user} = useContext(AuthContext);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">

          <div>
            <div>
              <h1 className="text-xl font-weight-bold d-flex align-items-center justify-content-center gap-2 mb-2">
                Elevate, Empower, Achieve, Simplify.{" "}
                <RiCalendarTodoLine className="text-primary h2"></RiCalendarTodoLine>
              </h1>
              <h1 className="text-4xl text-dark font-weight-bold text-center mb-2">
              Empower Your Digital Ecosystem with IdentityPulse: Seamless User Management for the Modern Era.
              </h1>

              <p className="text-center text-secondary">
              Elevate Security, Streamline Access: Your Central Hub for Effortless User Identity Management.
              </p>
            </div>

            <div className="py-10 w-full">
              {
                user? 
                <div className="d-flex gap-5 justify-content-center align-items-center max-w-6xl mx-auto">
                <Link to={"/profile"} className="d-flex align-items-center">
                  <button className="d-flex align-items-center relative btn btn-primary">
                    <span>Manage Profile</span>
                    <span className="position-absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 d-flex justify-content-center bg-white rounded-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M4 12H20M20 12L14 6M20 12L14 18"
                            stroke="#0ea5e9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
              :
              <div className="d-flex gap-5 justify-content-center align-items-center max-w-6xl mx-auto">
                <Link to={"/signin"} className="d-flex align-items-center">
                  <button className="d-flex align-items-center relative btn btn-primary">
                    <span>Get Started</span>
                    <span className="position-absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 d-flex justify-content-center bg-white rounded-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M4 12H20M20 12L14 6M20 12L14 18"
                            stroke="#0ea5e9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </Link>

                <Link to={"/signup"} className="d-flex align-items-center">
                  <button className="d-flex align-items-center relative btn btn-outline-primary border-2">
                    <span>Sign Up</span>
                    <span className="position-absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 d-flex justify-content-center bg-white rounded-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M4 12H20M20 12L14 6M20 12L14 18"
                            stroke="#0ea5e9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
              }
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
