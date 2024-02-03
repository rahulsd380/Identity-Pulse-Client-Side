import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useProfileInfo from "../../hooks/useProfileInfo";
import useAxiosUser from "../../hooks/useAxiosUser";
import { useForm } from "react-hook-form";
import Navbar from "../Navbar/Navbar";
import { FaRegCircleUser } from "react-icons/fa6";
const imgApiKey = '763882e480dd8ab664d9058115562cab';
// Construct the API URL using the key
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;


const Profile = () => {
    const {user} = useContext(AuthContext);
    const [profile, refetch] = useProfileInfo();
    const [loading, setLoading] = useState(true);

    const axiosUser = useAxiosUser();
    
//   Updating user data using react hook form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image : data.image[0]}
        const res = await axiosUser.post(imgHostingApi, imageFile, {
          headers : {
            'content-type' : 'multipart/form-data'
          }
        });
        console.log(res.data);
      
        if(res.data.success){
          const updatedInfo = {
            name: data.name,
            bio: data.bio,
          image: res.data.data.display_url,
          coverImage: res.data.data.display_url,
          title: data.title,
          }
          
          const updatedRes = await axiosUser.put(`/users/${profile.map(i => i._id)}`, updatedInfo);
          console.log(updatedRes.data);
          
          if(updatedRes.data.insertedId){
            reset();
            refetch();
            setLoading(false)
          }
        }
        console.log(res.data);
      };


    return (
        <div>
            
            <Navbar></Navbar>
            {/* Getting the user data */}
            {
                profile.map(i => <div key={i._id} className="container my-5">
                <div className="card shadow-lg">
                  <div className="card-body">
                    {
                        i.image ? <div className="d-flex justify-content-center align-items-center">
                        <img style={{ width: '200px', height: '200px'}} className=" start-50 rounded-circle bg-gray-400 border border-white" src={i.image} alt="" />
                      </div>
                      :
                            <FaRegCircleUser></FaRegCircleUser>
                    }
                    <div className="pt-4 text-center">
                      <h1 className="text-xl mb-1">{i.name}</h1>
                      <p className="text-gray-400 text-sm">{i.title}</p>
                      <p className="text-gray-400 text-sm">{i.bio}</p>
                    </div>


                    {/* <!-- Button trigger modal --> */}
                    <div className="text-center mt-3">
                      <button type="button" className="btn btn-primary btn-lg w-75" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit Profile Info
                      </button>
                    </div>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update Profile Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit(onSubmit)} className="">
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

              <div>
                <div className="mb-2">
                  <p className="mb-1 font-weight-bold text-gray-600">
                    {
                        loading == true &&  "" && loading == false&& "Updated Successfully"
                    }
                  </p>
                </div>


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
                    Bio
                  </p>
                  <input
                  required {...register("bio")}
                    className="form-control"
                    type="text"
                    placeholder="Your Bio"
                  />
                </div>

                <div className="mb-2">
                  <p className="mb-1 font-weight-bold text-gray-600">
                    Title
                  </p>
                  <input
                  required {...register("title")}
                    className="form-control"
                    type="text"
                    placeholder="Web Developer*"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="fileInput" className="form-label">
                    Profile Image
                  </label>
                  <input
                  required {...register("image")}
                    type="file"
                    className="form-control custom-file-input"
                    id="fileInput"
                  />
                </div>

                <button className="w-100 font-weight-bold transition duration-300 btn btn-primary mb-3">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
      </div>
    </div>
  </div>
</div>
                  </div>
                </div>
              </div>)
            }
        </div>
      
    );
};
export default Profile;