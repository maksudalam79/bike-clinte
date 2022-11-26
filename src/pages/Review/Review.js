import React from 'react';
import img from '../../asset/quote.svg'
import img1 from '../../asset/review/beautiful-biker-girl-wearing-black-leather-jacket-leaning-her-superbike-outside-building_613910-19321.jpg'
import img2 from '../../asset/review/best-motorcycles-for-women-dp-768x708.jpg'
import img3 from '../../asset/review/confident-old-man-having-rest-260nw-695438368.jpg'
import ReviewCard from './ReviewCard';

const Review = () => {
    const comments = [
        {
          id: 1,
          des: "If you want to be happy for a lifetime, ride a motorcycle",
          name: "Winson jerry ",
          
          img: img1,
        },
        {
          id: 2,
          des: "Just start off and then the adventure carries your way.",
          name: "Winson merry",
          
          img: img2,
        },
        {
          id: 1,
          des: "No hour of life is wasted when it’s spent on two wheels.",
          name: "Winson Herry",
          img: img3
        },
      ];
    
    return (
        <section className='my-10 m-2'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-4xl font-bold text-center">Review User</h4>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={img} alt="" />
                </figure>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
{
    comments.map(comment=><ReviewCard
    key={comment.id}
    comment={comment}
    ></ReviewCard>)
}
            </div>
        </section>
    );
};

export default Review;