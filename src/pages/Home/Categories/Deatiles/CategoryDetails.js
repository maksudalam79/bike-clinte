import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const CategoryDetails = () => {
    const category=useLoaderData()
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-4'>
            {
                category.products.map(product=><ProductDetails
                    product={product}
                ></ProductDetails>)
            }
        </div>
    );
};

export default CategoryDetails;