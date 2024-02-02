import { Link } from "react-router-dom";
import { RiCalendarTodoLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Hero = () => {
  const { user } = useContext(AuthContext);

  const [users, setUsers] = useState({});

  const url = `https://task-hub-connect-server.vercel.app/users?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.map((i) => setUsers(i)));
  }, [url]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center">

        {user ? (
          <div>
            <div>
              <h1 className="text-xl font-weight-bold d-flex align-items-center justify-content-center gap-2 mb-2">
                Elevate, Empower, Achieve, Simplify.{" "}
                <RiCalendarTodoLine className="text-primary h2"></RiCalendarTodoLine>
              </h1>
              <h1 className="text-4xl text-dark font-weight-bold mb-2">
                Welcome back, <span className="text-info">{user?.displayName}!</span> Elevate productivity with our intuitive task platform. Stay organized and focus on what matters most to you!
              </h1>

              <p className="text-secondary">
                Unleash productivity with our intuitive platform. Elevate your
                workflow effortlessly, efficiently managing tasks. Empower your
                journey <br /> toward success with streamlined organization and
                enhanced productivity at your fingertips.
              </p>
            </div>

            

            
          </div>
        ) : (
          <div>
            <div>
              <h1 className="text-xl font-weight-bold d-flex align-items-center justify-content-center gap-2 mb-2">
                Elevate, Empower, Achieve, Simplify.{" "}
                <RiCalendarTodoLine className="text-primary h2"></RiCalendarTodoLine>
              </h1>
              <h1 className="text-4xl text-dark font-weight-bold text-center mb-2">
                Empower Your Productivity: Elevate Your <br /> Workflow with Our
                Intuitive Task Management{" "}
                <span className="text-primary">Platform!</span>
              </h1>

              <p className="text-center text-secondary">
                Unleash productivity with our intuitive platform. Elevate your
                workflow effortlessly, efficiently managing tasks. Empower your
                journey <br /> toward success with streamlined organization and
                enhanced productivity at your fingertips.
              </p>
            </div>

            <div className="py-10 w-full">
              <div className="d-flex gap-5 justify-content-center align-items-center border p-6 rounded-md max-w-6xl mx-auto">
                <Link to={"/login"} className="d-flex align-items-center">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
