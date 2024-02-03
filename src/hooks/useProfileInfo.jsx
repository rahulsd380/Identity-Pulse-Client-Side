import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import useAxiosUser from "./useAxiosUser";


const useProfileInfo = () => {
    const {user} = useContext(AuthContext);
    const axiosUser = useAxiosUser();
    const { refetch, data: profile =[] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
         const res = await axiosUser.get(`/users?email=${user?.email}`);
        return res.data
     } 
    })
    return [profile, refetch]
};

export default useProfileInfo;