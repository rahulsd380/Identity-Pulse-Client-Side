import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../Navbar/Navbar";
import useAxiosUser from "../../hooks/useAxiosUser";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const imgApiKey = '763882e480dd8ab664d9058115562cab';

// Construct the API URL using the key
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;

const Signup = () => {
  const axiosUser = useAxiosUser();
  const { updateProfileInfo, signUp, googleSignUp } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = async (data) => {
    console.log(data);

    try {
      // Upload image to imgHostingApi using FormData
      const formData = new FormData();
      formData.append('image', data.image[0]);

      const res = await axiosUser.post(imgHostingApi, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });

      if (res.data.success) {
        const { email, password, name } = data;

        const userInfo = {
          name: data.name,
          email: data.email,
          image: res.data.data.display_url,
        };

        console.log(userInfo);

        const toastId = toast.loading('Signing up...');

        // Sign up with email and password
        signUp(email, password)
          .then((result) => {
            // Update profile info
            updateProfileInfo(name).then(() => {
              // Post user data to MongoDB
              const userData = { name, email, image: res.data.data.display_url };
              axiosUser.post('/users', userData).then((res) => {
                if (res.data.insertedId) {
                  toast.success('Signed up successfully.', { id: toastId });
                  navigate(location?.state ? location.state : '/');
                }
              });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const googleSignIn = () => {
    googleSignUp().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      axiosUser.post("/users", userInfo).then((res) => {
        console.log(res);
        navigate('/');
      });
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          {/* Left side form */}
          <form onSubmit={handleSubmit(onSubmit)} className="col-md-6">
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
                  required {...register("name")}
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
                  required {...register("email")}
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
                  required {...register("password")}
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
                  required {...register("image")}
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

                <button onClick={googleSignIn} className="w-100 font-weight-bold transition duration-300 btn btn-outline-dark mb-3 d-flex align-items-center gap-2 justify-content-center">
                  <FcGoogle></FcGoogle> Continue with Google
                </button>

                <p className="mb-4 text-center">
                  Already Have An Account?{" "}
                  <Link
                    to={"/signin"}
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
