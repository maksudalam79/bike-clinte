import React, { useEffect } from 'react';

const ProductItem = () => {
    useEffect(()=>{
        fetch('http://localhost:5000/bikeProduct')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ProductItem;