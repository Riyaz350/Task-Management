import { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Authentication/AuthProvider';

const useCurrentUserInfo = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const {data:userInfo =[], isPending:userLoading, refetch} =useQuery({
        queryKey:[user?.email, 'userInfo'],
        queryFn: async()=>{
            
                const res = await axiosPublic.get(`/user/${user.email}`)
                return res.data
        }
    })
    return [userInfo, userLoading, refetch]
};

export default useCurrentUserInfo;