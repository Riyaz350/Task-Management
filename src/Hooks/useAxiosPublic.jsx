import axios from "axios";
// http://localhost:5000
const axiosPublic = axios.create({
    baseURL:'https://task-management-server-seven-kappa.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;