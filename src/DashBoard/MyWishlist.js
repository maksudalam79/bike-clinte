import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../layout/share/loading/Loading';
import Wish from './Wish';

const MyWishlist = () => {
    const {user}=useContext(AuthContext)

    const { isLoading, error, data:wishs=[] } = useQuery({
       
        queryKey: ['wistList'],
        queryFn: () =>
          fetch("http://localhost:5000/wistList")
          .then(res =>
            res.json()
          )
      })
      if (isLoading) return <Loading></Loading>
      if (error) return 'An error has occurred: ' + error.message




    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5'>
            {
                wishs.map(wish=><Wish
                key={wish._id}
                wish={wish}
                ></Wish>)
            }
        </div>
    );
};

export default MyWishlist;