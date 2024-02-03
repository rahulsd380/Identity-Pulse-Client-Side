import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../Navbar/Navbar";
import useAxiosUser from "../../hooks/useAxiosUser";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignIn = () => {
  const axiosUser = useAxiosUser();
  const { login, googleSignUp } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const toastId = toast.loading("Login...")

    login(email, password)
    .then(result => {
        console.log(result.user);
        toast.success('Logged in successfully.', { id: toastId})
        navigate(location?.state? location.state : "/")
    })
    .catch(error => {
        console.error(error);
    })
    
}

    const googleSignIn = () => {
      googleSignUp()
      .then(result => {
          console.log(result.user);
          const userInfo = {
              name: result.user?.displayName,
              email: result.user?.email
          }
          axiosUser.post('/users',userInfo )
          .then(res => {
              console.log(res);
              navigate("/")
          })
      })
  }
  

  return (
    <div>
      <Navbar></Navbar>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          {/* Left side form */}
          <form onSubmit={handleLogin} className="col-md-6">
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
                Welcome back. Sig in to access your details
              </h1>

              <div>

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
                  Sign In
                </button>

                <p className="mb-3 text-center text-gray-600 font-weight-bold">
                  Or,
                </p>

                <button onClick={googleSignIn} className="w-100 font-weight-bold transition duration-300 btn btn-outline-dark mb-3 d-flex align-items-center gap-2 justify-content-center">
                  <FcGoogle></FcGoogle> Continue with Google
                </button>

                <p className="mb-4 text-center">
                  Don't Have An Account?{" "}
                  <Link
                    to={"/signup"}
                    className="text-blue font-weight-bold underline"
                  >
                    Sign Up
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

export default SignIn;
