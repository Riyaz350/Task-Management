import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUserData = () => {
    const axiosPublic = useAxiosPublic()

    const {data:usersData =[], isPending:userLoading, refetch} =useQuery({
        queryKey:['usersData'],
        queryFn: async()=>{
            
                const res = await axiosPublic.get('/users')
                return res.data
        }
    })
    return [usersData, userLoading, refetch]
};

export default useUserData;