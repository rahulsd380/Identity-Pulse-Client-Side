import axios from "axios";


const axiosUser = axios.create({
    baseURL: 'https://user-management-server-side-six.vercel.app'
})

const useAxiosUser = () => {
    return axiosUser;
};

export default useAxiosUser;