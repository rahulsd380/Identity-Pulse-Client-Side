import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../Navbar/Navbar";
import useAxiosUser from "../../hooks/useAxiosUser";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Signup = () => {
  //   const axiosUser = useAxiosUser();
  //   const { updateProfileInfo, signUp, googleSignUp } = useContext(AuthContext);
  //   const location = useLocation();
  //   const navigate = useNavigate();

  //   const handleSignUp = (e) => {
  //     e.preventDefault();
  //     const name = e.target.name.value;
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     const role = "user";

  //     const toastId = toast.loading("Signing up...");

  //     signUp(email, password)
  //       .then((result) => {
  //         updateProfileInfo(name).then(() => {
  //           const userInfo = { name, email, role };
  //           axiosUser.post("/users", userInfo).then((res) => {
  //             if (res.data.insertedId) {
  //               toast.success("Signed up successfully.", { id: toastId });
  //               navigate(location?.state ? location.state : "/");
  //             }
  //           });
  //         });
  //       })
  //       .catch((error) => console.log(error))
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   const googleSignIn = () => {
  //     googleSignUp()
  //       .then((result) => {
  //         navigate(location?.state ? location.state : "/");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          {/* Left side form */}
          <form className="col-md-6">
            <div>
              {/* Logo */}
              <div className="d-flex align-items-center gap-3 mb-2">
                <img
                  style={{ width: "30px", height: "auto" }}
                  src="https://i.ibb.co/1shLF4Q/logo.png"
                  alt=""
                />
                <h1 className="text-2xl font-weight-bold text-gradient">
                  Identity Pulse
                </h1>
              </div>

              <h1 className="small text-gray-600 mb-2">
                Welcome to <span className="text-blue">Identity Pulse.</span>{" "}
                Manage your identity
              </h1>

              <div>
                <div className="mb-2">
                  <p className="mb-1 font-weight-bold text-gray-600">
                    Your Name
                  </p>
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    placeholder="Rahul Sutradhar"
                  />
                </div>

                <div className="mb-2">
                  <p className="mb-1 font-weight-bold text-gray-600">
                    Your Email
                  </p>
                  <input
                    name="email"
                    className="form-control"
                    type="email"
                    placeholder="rahul@gmail.com"
                  />
                </div>

                <div className="mb-2">
                  <p className="mb-1 font-weight-bold text-gray-600">
                    Password
                  </p>
                  <input
                    name="password"
                    className="form-control"
                    type="password"
                    placeholder="*********"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="fileInput" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control custom-file-input"
                    id="fileInput"
                  />
                </div>

                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <p className="text-gray-600 font-weight-bold d-flex align-items-center gap-2">
                    <input type="checkbox" className="form-check-input" />{" "}
                    Remember me
                  </p>

                  <Link
                    to={"/forgotPassword"}
                    className="text-gray-600 font-weight-bold text-blue"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button className="w-100 font-weight-bold transition duration-300 btn btn-primary mb-3">
                  Sign Up
                </button>

                <p className="mb-3 text-center text-gray-600 font-weight-bold">
                  Or,
                </p>

                <button className="w-100 font-weight-bold transition duration-300 btn btn-outline-dark mb-3 d-flex align-items-center gap-2 justify-content-center">
                  <FcGoogle></FcGoogle> Continue with Google
                </button>

                <p className="mb-4 text-center">
                  Already Have An Account?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue font-weight-bold underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Signup;
