import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOut from "./CheckOut";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const buying = useLoaderData();
 
  const { name, price } = buying;
  return (
    <div className="">
      <div>
        <h3 className="text-4xl font-bold text-center">Payment</h3>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto my-16">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title font-bold">{price} Taka</h2>
          <div className="my-5">
            <Elements stripe={stripePromise}>
              <CheckOut 
              buying={buying}
              />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
