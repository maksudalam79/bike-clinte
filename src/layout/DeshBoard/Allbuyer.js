import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../share/loading/Loading';

const Allbuyer = () => {
    const role={
        role:"Buyer"
    }
    const { isLoading, error, data:users=[] } = useQuery({
       
        queryKey: ['users'],
        queryFn: () =>
          fetch(`http://localhost:5000/users/${role.role}`)
          .then(res =>
            res.json()
          )
      })
      const handleDelete = (_id) => {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              alert("delete successfully");
            }
          });
      };
      
      if (isLoading) return <Loading></Loading>
      if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
        <h3 className='text-4xl font-bold text-center'>All Selller</h3>
        <div className="overflow-x-auto m-2">
    <table className="table table-zebra w-full">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>
        {users.map((user,i) => (
          <tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button  onClick={() => handleDelete(user._id)} className='btn btn-sm'>Delete</button></td>
            
           
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    </div>
    );
};

export default Allbuyer;