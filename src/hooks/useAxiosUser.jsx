import axios from "axios";


const axiosUser = axios.create({
    baseURL: 'https://task-hub-connect-server.vercel.app'
})

const useAxiosUser = () => {
    return axiosUser;
};

export default useAxiosUser;